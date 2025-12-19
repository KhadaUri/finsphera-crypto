import { create } from 'zustand';
import { Coin } from '@/types';

interface AppState {
  search: string;
  selectedCoin: Coin | null;
  setSearch: (query: string) => void;
  setSelectedCoin: (coin: Coin | null) => void;

}

export const useStore = create<AppState>((set) => ({
  search: '',
  selectedCoin: null,
  setSearch: (query) => set({ search: query }),
  setSelectedCoin: (coin) => set({ selectedCoin: coin }),
}));