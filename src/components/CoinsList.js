import CoinItem from "./CoinItem";

const CoinsList = ({ coins }) => {
  // console.log(coins);
  return (
    <div>
      <div className="d-flex col-12 col-sm-10 col-lg-8 mx-auto my-3 justify-content-between rounded-3 p-2 headTable">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p>Volume</p>
        <p>Market Cap</p>
      </div>
      <CoinItem coins={coins} />
    </div>
  );
};

export default CoinsList;
