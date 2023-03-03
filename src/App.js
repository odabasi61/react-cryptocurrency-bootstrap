import { useState, useEffect } from "react";
import axios from "axios";
import CoinsList from "./components/CoinsList";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";

function App() {
  // we leave an empty array here. soon we will return the cryptocurrency.
  const [coins, setCoins] = useState([]);

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
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinsList coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
