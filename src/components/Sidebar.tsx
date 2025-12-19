"use client";

import { useState } from "react";
import { LayoutDashboard, PieChart, Wallet, Settings, LogOut, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for open/close

  const menuItems = [
    { icon: LayoutDashboard, label: "Market", active: true },
    { icon: Wallet, label: "Portfolio", active: false },
    { icon: PieChart, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col h-auto md:h-screen sticky top-0 z-30">
      
      {/* HEADER SIDEBAR*/}
      <div className="p-4 md:p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Finsphera
          </h1>
        </div>

        {/* Ham button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav Container */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block md:flex-1 px-4 pb-4 md:px-6`}>
        <nav className="space-y-2">
  {menuItems.map((item) => (
    <button
      key={item.label}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
        item.active
          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
          : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-500"
      }`}
    >
      <item.icon size={20} />
      {item.label}
    </button>
  ))}
</nav>

        {/* Botón Logout example*/}
        <div className="mt-6 md:absolute md:bottom-6 md:left-6 md:right-6">
            <div className="border-t border-slate-100 dark:border-slate-800 my-4 md:hidden"></div>
            <button className="flex items-center gap-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors w-full md:w-auto px-4 md:px-0">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
            </button>
        </div>
      </div>
    </aside>
  );
};