"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./sideBar";
import { TopBar } from "./topBar";

interface AdminWrapperProps {
  children: React.ReactNode;
}

export const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full  bg-gray-50">
      <TopBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className={`flex ${isSidebarOpen ? "overflow-x-hidden" : ""}`}>
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-16 h-[calc(100vh-4rem)] z-30"
            >
              <Sidebar />
            </motion.div>
          )}
        </AnimatePresence>

        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-[280px]" : "ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
