// const url = "https://restcountries.com/v3.1/name/china?fullText=true";
async function getCountryInfo(country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  const data = await response.json(); // extract the response into a js array of objects
  console.log(data);
  if (data.length > 0) {
    const countryData = data[0];
    document.querySelector("#results").innerHTML = `
      <img src="${countryData.flags.png}" alt="${countryData.flags.alt}"  > 
      <h2>${countryData.name.official}</h2>
      <p>Capital: ${countryData.capital[0]} </p>
      <p>Population: ${countryData.population} </p>
    `;
  } else {
    document.querySelector("#results").textContent =
      "No country found with that name";
  }
  // dom manipulation -- html -
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchWord = document.querySelector("#country-name").value;
  if (searchWord.length < 3) {
    alert("The country name has to be more than two characters");
  } else {
    getCountryInfo(searchWord);
  }
});

// non-blocking code / assynchronous code //--- promisees
