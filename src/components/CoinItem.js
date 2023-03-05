import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

const CoinItem = ({ coins, search, setSearch }) => {
  // $ sign down there is for money currency
  // console.log(coins);
  return (
    <div className="col-12 col-sm-10 col-lg-8 mx-auto">
      {coins
        .filter((item) =>
          item.name.toLowerCase().includes(search.trim().toLowerCase())
        )
        .map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <div className="d-flex justify-content-between mb-3 rounded-3 p-2 coinTable">
                <p>{coin.market_cap_rank}</p>
                <div className="d-flex gap-1">
                  <img src={coin.image} alt={coin.symbol} width={"25px"} />
                  <p>{coin.symbol.toUpperCase()}</p>
                </div>
                <p>${coin.current_price.toLocaleString()}</p>
                <p>{coin.price_change_percentage_24h.toFixed(2)}</p>
                <p>${coin.total_volume.toLocaleString()}</p>
                <p>${coin.market_cap.toLocaleString()}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default CoinItem;
