import { CoinData } from "@/interfaces";

const getCoinList = async (): Promise<CoinData[] | []> => {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=de&precision=2",
    { next: { revalidate: 60 } },
  ).then((res) => {
    if (res.status !== 200) {
      console.log("ERROR", res.json());
      return [];
    }
    return res.json();
  });
};

export { getCoinList };
