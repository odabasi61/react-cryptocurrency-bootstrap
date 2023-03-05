import { useState, useEffect } from "react";
import axios from "axios";
import CoinsList from "./components/CoinsList";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import NotFound from "./pages/NotFound";

function App() {
  // we leave an empty array here. soon we will return the cryptocurrency.
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App pb-3">
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <CoinsList coins={coins} search={search} setSearch={setSearch} />
          }
        />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
