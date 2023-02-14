// get quote from api
let apiRes = [];
async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiRes = await response.json();
    console.log(apiRes[5]);
  } catch (error) {
    console.log(error);
  }
}

getQuote();
