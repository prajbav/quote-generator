let quoteContainerId = document.getElementById('quote-container');
let quoteId = document.getElementById('quote');
let authorId = document.getElementById('author');
let twitterBtnId = document.getElementById('twitter');

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
    quoteId.textContent = quote.text;
    authorId.textContent = quote.author;
    console.log(quote);
}