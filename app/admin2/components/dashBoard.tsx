"use client";
import React from "react";
import DashboardHero from "./Dashhero";
import { EnergyCard } from "./CardVarients/EnergyCard";


export default function AdminDashboard() {
  const data = [<EnergyCard/>,]
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
