export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
  price_change_percentage_24h_in_currency: number;
}

export interface MarketData {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: null;
  platforms: {
    string: string;
  };
  detail_platforms: {
    "": {
      decimal_place: null;
      contract_address: string;
    };
  };
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: [string, string];
  public_notice: null;
  additional_notices: [];
  description: {
    en: string;
  };
  links: {
    homepage: [string, string, string];
    blockchain_site: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ];
    official_forum_url: [string, string, string];
    chat_url: [string, string, string];
    announcement_url: [string, string];
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: null;
    telegram_channel_identifier: string;
    subreddit_url: string;
    repos_url: {
      github: [string, string];
      bitbucket: [];
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: {
    current_price: currencies;
    total_value_locked: null;
    mcap_to_tvl_ratio: null;
    fdv_to_tvl_ratio: null;
    roi: null;
    ath: currencies;
    ath_change_percentage: currencies;
    ath_date: currencies;
    atl: currencies;
    atl_change_percentage: currencies;
    atl_date: currencies;
    market_cap: currencies;
    market_cap_rank: number;
    fully_diluted_valuation: currencies;
    total_volume: currencies;
    high_24h: currencies;
    low_24h: currencies;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: currencies;
    price_change_percentage_1h_in_currency: currencies;
    price_change_percentage_24h_in_currency: currencies;
    price_change_percentage_7d_in_currency: currencies;
    price_change_percentage_14d_in_currency: currencies;
    price_change_percentage_30d_in_currency: currencies;
    price_change_percentage_60d_in_currency: currencies;
    price_change_percentage_200d_in_currency: currencies;
    price_change_percentage_1y_in_currency: currencies;
    market_cap_change_24h_in_currency: currencies;
    market_cap_change_percentage_24h_in_currency: currencies;
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
  };
  public_interest_stats: {
    alexa_rank: number;
    bing_matches: null;
  };
  status_updates: [];
  last_updated: string;
}

interface currencies {
  aed: number;
  ars: number;
  aud: number;
  bch: number;
  bdt: number;
  bhd: number;
  bmd: number;
  bnb: number;
  brl: number;
  btc: number;
  cad: number;
  chf: number;
  clp: number;
  cny: number;
  czk: number;
  dkk: number;
  dot: number;
  eos: number;
  eth: number;
  eur: number;
  gbp: number;
  hkd: number;
  huf: number;
  idr: number;
  ils: number;
  inr: number;
  jpy: number;
  krw: number;
  kwd: number;
  lkr: number;
  ltc: number;
  mmk: number;
  mxn: number;
  myr: number;
  ngn: number;
  nok: number;
  nzd: number;
  php: number;
  pkr: number;
  pln: number;
  rub: number;
  sar: number;
  sek: number;
  sgd: number;
  thb: number;
  try: number;
  twd: number;
  uah: number;
  usd: number;
  vef: number;
  vnd: number;
  xag: number;
  xau: number;
  xdr: number;
  xlm: number;
  xrp: number;
  yfi: number;
  zar: number;
  bits: number;
  link: number;
  sats: number;
}
