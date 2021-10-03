let quoteContainerId = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let fbBtn = document.getElementById('fb');
let newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
        alert(error);

    }
}

getQuotes();

function newQuote(){   
    let quote =  apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(quote.text.length > 150){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    if(quote.author){
        authorText.textContent = quote.author;
    }else{
        authorText.textContent = 'Unknown';
    }
    console.log(quote);
}

function fbPost(){
    const fbUrl = `https://graph.facebook.com/prajakta.bavikar/feed?message=${quoteText.textContent}&access_token={page-access-token}"`;
    window.open(fbUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
fbBtn.addEventListener('click',fbPost);