const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const fbBtn = document.getElementById('fb');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];
async function getQuotes(){
    showLoading();
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
    complete();
    console.log(quote);
}

function fbPost(){
    const fbUrl = `https://graph.facebook.com/me/feed?message=${quoteText.textContent}&access_token={page-access-token}"`;
    window.open(fbUrl, '_blank');
}

function tweetQuote(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`
    window.open(tweetUrl, '_blank');

}
function showLoading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
newQuoteBtn.addEventListener('click', newQuote);
//fbBtn.addEventListener('click',fbPost);
twitterBtn.addEventListener('click',tweetQuote);