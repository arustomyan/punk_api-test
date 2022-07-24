const URL = "https://api.punkapi.com/v2/beers";

const getBeers = async () =>
  fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));

export default getBeers;
