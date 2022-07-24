import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { BeerDetails } from "./components/BeerDetails";
import { Home } from "./page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<BeerDetails />} />
      </Routes>
    </>
  );
}

export default App;
