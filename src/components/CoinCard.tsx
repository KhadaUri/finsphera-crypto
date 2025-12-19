"use client";

import { Coin } from "@/types";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useStore } from "@/store/useStore";

export const CoinCard = ({ coin }: { coin: Coin }) => {
  const setSelectedCoin = useStore((state) => state.setSelectedCoin);
  const isPositive = coin.price_change_percentage_24h >= 0;


return (
    <motion.div
      layout
      layoutId={`card-${coin.id}`}
      onClick={() => setSelectedCoin(coin)}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer hover:shadow-md transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
        <div>
          {/* Text light & Dark Theme*/}
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{coin.name}</h3>
          <span className="text-slate-400 text-sm uppercase">{coin.symbol}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-slate-400 mb-1">Price</p>
          <p className="text-xl font-bold font-mono text-slate-900 dark:text-white">
            ${coin.current_price.toLocaleString()}
          </p>
        </div>
        <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
        </div>
      </div>
    </motion.div>
  );
};