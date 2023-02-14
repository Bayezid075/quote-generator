// get quote from api
let apiRes = [];
async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiRes = await response.json();
    const randomQuote = apiRes[Math.floor(Math.random() * apiRes.length)];
    console.log(randomQuote);
  } catch (error) {
    console.log(error);
  }
}

getQuote();
