// selector
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// get quote from api
let apiRes = [];

async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiRes = await response.json();
    const randomQuote = apiRes[Math.floor(Math.random() * apiRes.length)];
    quoteText.textContent = randomQuote.text;
    authorText.textContent = randomQuote.author;
  } catch (error) {
    console.log(error);
  }
}

// getQuote();getQuote();

// New Quote button
newQuoteButton.addEventListener("click", getQuote);
