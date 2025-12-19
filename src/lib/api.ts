import axios from 'axios';
import { Coin } from '@/types';

const API_URL = 'https://api.coingecko.com/api/v3';

export const getCoins = async (): Promise<Coin[]> => {
  const { data } = await axios.get(
    `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
  );
  return data;
};