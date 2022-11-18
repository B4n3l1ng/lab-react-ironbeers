import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
