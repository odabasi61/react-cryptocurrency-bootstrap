const CoinItem = ({ coins }) => {
  console.log(coins);
  return (
    <div className="col-12 col-sm-10 col-lg-8 mx-auto">
      {coins.map((coin) => {
        return (
          <div
            type="button"
            key={coin.id}
            className="d-flex justify-content-between mb-3 rounded-3 p-2 coinTable"
          >
            <p>{coin.market_cap_rank}</p>
            <div className="d-flex gap-1">
              <img src={coin.image} alt={coin.symbol} width={"25px"} />
              <p>{coin.symbol.toUpperCase()}</p>
            </div>
            <p>{coin.current_price}</p>
            <p>{coin.price_change_percentage_24h}</p>
            <p>{coin.total_volume}</p>
            <p>{coin.market_cap}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoinItem;
