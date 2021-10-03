let apiQuotes = [];
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
     
    } catch (error) {
        alert(error);

    }
}

getQuotes();

function newQuote(){
   
    return apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}