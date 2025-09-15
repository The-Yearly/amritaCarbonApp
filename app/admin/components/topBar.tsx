import React from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

interface TopBarProps {
  onMenuClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-rose-500 border-b border-rose-600 z-40">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onMenuClick}
            className="p-2 hover:bg-rose-600 rounded-lg"
          >
            <Menu className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};
