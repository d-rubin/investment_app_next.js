import { CoinData } from "../interfaces";

const fetchCrypto = (url: string) => {
  return fetch(`${process.env.API_URL}${url}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((res) => {
    console.log("ERROR", res);
    return res;
  });
};

const getCoinList = (): Promise<CoinData[] | []> => {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h&locale=de&precision=2"
  ).then((res) => {
    if (res.status !== 200) {
      console.log("ERROR", res);
      return [];
    }
    return res.json();
  });
};

export { getCoinList };
