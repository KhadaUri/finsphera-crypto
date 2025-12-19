"use client";

import { useStore } from "@/store/useStore";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const CoinModal = () => {
  const { selectedCoin, setSelectedCoin } = useStore();

  return (
    <AnimatePresence>
      {selectedCoin && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCoin(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          {/* Container for Motion Modal  */}
          <motion.div
            layoutId={`card-${selectedCoin.id}`}
             transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }} 
   className="fixed inset-0 m-auto w-full max-w-lg h-fit bg-white dark:bg-slate-900 rounded-3xl p-8 z-50 shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            {/* Motion for text*/}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }} // Se desvanece rápido
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img src={selectedCoin.image} alt={selectedCoin.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{selectedCoin.name}</h2>
                    <span className="text-slate-400 text-lg uppercase">{selectedCoin.symbol}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCoin(null)} 
                  className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Market Cap</p>
                      <p className="font-bold text-slate-900 dark:text-white text-lg">
                          ${selectedCoin.market_cap.toLocaleString()}
                      </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <p className="text-sm text-slate-500 dark:text-slate-400">24h Low / High</p>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">
                          L: ${selectedCoin.low_24h.toLocaleString()} <br/>
                          H: ${selectedCoin.high_24h.toLocaleString()}
                      </p>
                  </div>
              </div>

              <div className="text-xs text-slate-400 text-center">
                Data provided by CoinGecko API
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};