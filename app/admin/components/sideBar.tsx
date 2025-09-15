import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Zap,
  House,
  Car,
  Droplet,
  Recycle,
  Package,
  Users,
  Utensils,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/admin/dashboard" },
  { icon: House, label: "Accomedation", href: "/admin/accomedation" },
  { icon: Car, label: "Transport", href: "/admin/transport" },
  { icon: Zap, label: "Energy", href: "/admin/energy" },
  { icon: Droplet, label: "Water", href: "/admin/Water" },
  { icon: Utensils, label: "Food", href: "/admin/food" },
  { icon: Recycle, label: "Waste", href: "/admin/waste" },
  { icon: Package, label: "Goods", href: "/admin/goods" },
  { icon: Users, label: "Users", href: "/admin/users" },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-[300px] bg-rose-500 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-white-rounded-lg hover:bg-rose-600 rounded ransition-colors"
                >
                  <item.icon className="w-5 h-5 text-white" />
                  <span className="font-medium text-lg text-white">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
