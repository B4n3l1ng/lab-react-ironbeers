import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import CreateBeer from "./pages/CreateBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new-beer" element={<CreateBeer />} />
      </Routes>
    </div>
  );
}

export default App;
