// selector
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("twitter");

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

// tweet function
function tweetQuote() {
  const tweet = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweet, "_blank");
}

// Tweet Quote Button
tweetButton.addEventListener("click", tweetQuote);
// New Quote button
newQuoteButton.addEventListener("click", getQuote);
