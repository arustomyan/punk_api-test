import React from "react";
import { Search } from "../components/Search";
import { BeerList } from "../components/BeerList";

function Home() {
  return (
    <>
      <Search />
      <BeerList />
    </>
  );
}

export default Home;
