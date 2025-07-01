// const url = "https://restcountries.com/v3.1/name/china?fullText=true";

async function getCountryInfo(country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  const data = await response.json(); // extract the response into a js array of objects
  console.log(data);
  // dom manipulation -- html -
}

getCountryInfo("sudan");

// non-blocking code / assynchronous code //--- promisees
