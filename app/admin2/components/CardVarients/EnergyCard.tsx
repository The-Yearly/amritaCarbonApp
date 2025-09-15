import { EnergyUsage } from "./BarVarients";
import { ArrowUpRight,Lightbulb,Banknote,Fuel } from "lucide-react";
export const EnergyCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Energy Usage</h2>
        <button className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2">
          <ArrowUpRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="flex justify-between space-x-4 mb-6">
        <div>
          <p className="text-4xl font-bold text-gray-900">100h</p>
          <p className="text-sm text-gray-500 mb-2">Energy Used</p>
        </div>
        <div className="flex text-gray-500 space-x-4">
          <div className="flex flex-col items-center">
            <Lightbulb className="text-gray-700"/>
            <p>314</p>
          </div>
          <div className="flex flex-col items-center">
            <Banknote className="text-gray-700"/>
            <p>1200</p>
          </div>
                    <div className="flex flex-col items-center">
            <Fuel className="text-gray-700"/>
            <p>120 L</p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-5">
        <EnergyUsage />
      </div>
    </div>
  );
};