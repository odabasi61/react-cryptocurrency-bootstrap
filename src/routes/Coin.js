import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

const Coin = () => {
  // we use useparams hook to catch the id of each item. coinId parameter was given in route in app.js, now we use it here
  const params = useParams();
  // the api we fetch is object and we put empty object in usestate
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container col-11 col-sm-10 col-lg-8 text-center rounded-3 py-3 my-3 headTable">
        <h1 className="text-uppercase">{coin.name}</h1>
      </div>
      <div className="container col-11 col-sm-10 col-lg-8 rounded-3 py-3 my-3 headTable">
        <div className="rank text-center col-12 py-2 m-auto rounded-2 text-danger fs-5 fw-bold">
          <span>Rank #{coin.market_cap_rank}</span>
        </div>
        <div className="info d-flex align-items-center justify-content-between px-4 py-2">
          <div className="coin-heading d-flex align-items-center gap-2">
            {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
            <p>{coin.name}</p>
            <p className="text-uppercase">{coin.symbol}</p>
          </div>
          <div className="coin-price">
            <h1>${coin.market_data?.current_price.usd.toLocaleString()}</h1>
          </div>
        </div>
      </div>

      <div className="container col-11 col-sm-10 col-lg-8 rounded-3 py-3 my-3 headTable">
        <table className="d-block px-4">
          <thead className="d-block pb-2">
            <tr className="d-block d-flex justify-content-between">
              <th>1h</th>
              <th>24h</th>
              <th>1d</th>
              <th>7d</th>
              <th>14d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody className="d-block">
            <tr className="d-block d-flex justify-content-between">
              <td>
                {coin.market_data?.price_change_percentage_1h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_1d_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_1d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_7d_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_14d_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_1y_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container col-11 col-sm-10 col-lg-8 rounded-3 py-3 my-3 headTable">
        <div className="stats d-grid d-sm-flex gap-4 px-4 justify-content-between">
          <div className="left d-flex flex-column gap-4 col-12 col-sm-5">
            <div className="row">
              <h4>24 Hour Low</h4>
              <p>${coin.market_data?.low_24h.usd.toLocaleString()}</p>
            </div>
            <div className="row">
              <h4>24 Hour High</h4>
              <p>${coin.market_data?.high_24h.usd.toLocaleString()}</p>
            </div>
          </div>
          <div className="right d-flex flex-column gap-4 col-12 col-sm-5">
            <div className="row">
              <h4>Market Cap</h4>
              <p>${coin.market_data?.market_cap.usd.toLocaleString()}</p>
            </div>
            <div className="row">
              <h4>Circulating Supply</h4>
              <p>{coin.market_data?.circulating_supply}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container col-11 col-sm-10 col-lg-8 rounded-3 py-3 px-4 my-3 headTable">
        <div className="about">
          <h3 className="text-center py-2">About</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
