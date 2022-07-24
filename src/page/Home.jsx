import React, { useState, useEffect } from "react";
import { Search } from "../components/Search";
import { BeerList } from "../components/BeerList";
import { getBeers, searchBeer } from "../api/PunkApi";
import { useFetching } from "../hooks/useFetching";

function Home() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [fetchSearchBeer] = useFetching(async (query) => {
    await searchBeer(query)
      .then((res) => setBeers(res))
      .catch((err) => console.log(err));
  }, setIsLoading);

  useEffect(() => {
    (async () => {
      await getBeers().then((res) => setBeers(res));
    })();
  }, []);

  return (
    <>
      <Search callback={fetchSearchBeer} />
      <BeerList beers={beers} />
    </>
  );
}

export default Home;
