"use client";

import { useQuery } from "@tanstack/react-query";
import { getCoins } from "@/lib/api";
import { useStore } from "@/store/useStore";
import { CoinCard } from "@/components/CoinCard";
import { CoinModal } from "@/components/CoinModal";
import { Sidebar } from "@/components/Sidebar";
import { Search } from "lucide-react";

export default function Home() {
  const { data: coins, isLoading, isError } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
    staleTime: 60000,
  });

  const { search, setSearch } = useStore();

  const filteredCoins = coins?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 dark:bg-black">
      {/* 1. Sidebar Panel */}
      <Sidebar />

      {/* 2. Main Panel */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto h-screen">
        {/* Top Bar w Search */}
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Crypto Market</h2>
                <p className="text-slate-500 text-sm">Overview of top cryptocurrencies</p>
            </div>
            
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                <input 
                    type="text"
                    placeholder="Search coin..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </header>

        {/* Content States */}
        {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />
                ))}
            </div>
        )}

        {isError && (
            <div className="p-8 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-2xl text-center">
                Failed to load market data. Please try again later.
            </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
            {filteredCoins?.map((coin) => (
                <CoinCard key={coin.id} coin={coin} />
            ))}
        </div>

        <CoinModal />
      </main>
    </div>
  );
}