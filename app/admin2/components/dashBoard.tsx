"use client";
import React from "react";
import DashboardHero from "./Dashhero";
import { EnergyCard } from "./CardVarients/EnergyCard";
import { WasteCard } from "./CardVarients/wasteCard";
import { TransportCard } from "./CardVarients/TransportCard";
import { GoodsCard } from "./CardVarients/GoodsCard";
import { WaterCard } from "./CardVarients/WaterTreatment";
import { FoodCard } from "./CardVarients/FoodCard";
import { WaterConsumedCard } from "./CardVarients/WaterConsumed";
export default function AdminDashboard() {
  const data = [
    <EnergyCard />,
    <WasteCard />,
    <TransportCard />,
    <GoodsCard />,
    <FoodCard />,
    <WaterCard />,
    <WaterConsumedCard />,
  ];
  return (
    <>
      <DashboardHero />
      <div className="mt-12 px-10 gap-1 grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        {data.map((item, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>
    </>
  );
}
