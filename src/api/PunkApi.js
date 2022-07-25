const URL = "https://api.punkapi.com/v2/beers/";

const getBeers = async () =>
  fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));

const getBeer = async (id) =>
  fetch(URL + id)
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));

const searchBeer = async (query, page) =>
  fetch(`${URL}?beer_name=${query}?page=${page}`)
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));

export { getBeers, getBeer, searchBeer };
