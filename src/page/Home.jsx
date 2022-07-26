import React, { useState, useEffect } from "react";
import { Search } from "../components/Search";
import { BeerList } from "../components/BeerList";
import { getBeers, searchBeer } from "../api/PunkApi";
import { useFetching } from "../hooks/useFetching";

function Home() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(true);

  const [fetchSearchBeer] = useFetching(async (input) => {
    setQuery(input);
    await searchBeer(input, page)
      .then((res) => {
        if (res.length < 25) setIsLoadingMore(false);
        setBeers((prevState) => [...prevState, ...res]);
      })
      .catch((err) => console.log(err));
  }, setIsLoading);

  const [fetchBeers] = useFetching(async () => {
    await getBeers(page)
      .then((res) => {
        if (res.length < 25) setIsLoadingMore(false);
        setBeers([...beers, ...res]);
      })
      .catch((err) => console.log(err));
  }, setIsLoading);

  useEffect(() => {
    fetchBeers();
  }, []);

  const loadMore = async (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);

    if (!query) {
      await fetchBeers();
    } else {
      await fetchSearchBeer(query);
    }
  };

  return (
    <>
      <Search
        callback={fetchSearchBeer}
        setPage={setPage}
        setBeers={setBeers}
        setIsLoadingMore={setIsLoadingMore}
      />
      <BeerList
        beers={beers}
        isLoading={isLoading}
        loadMore={loadMore}
        isLoadingMore={isLoadingMore}
      />
    </>
  );
}

export default Home;
