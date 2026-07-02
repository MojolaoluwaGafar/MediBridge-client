import React from "react";
import { PiSignOut } from "react-icons/pi";

export interface SidebarTab {
  key: string;
  label: string;
  icon: React.ReactNode;
}

type Props = {
  tabs: SidebarTab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  onLogout: () => void;
};

export default function Sidebar({
  tabs,
  activeTab,
  setActiveTab,
  onLogout,
}: Props) {
  return (
    <div className="w-62.5 border-r border-r-[#E6EFF5] shadow-lg py-10 px-4 flex flex-col gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => setActiveTab(tab.key)}
          className={`text-[18px] font-semibold flex gap-2 w-53.5 h-11 items-center pl-5 transition
          ${
            activeTab === tab.key
              ? "bg-[#28574E] text-white rounded-sm"
              : "text-[#605E5E] hover:bg-gray-100"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}

      <button
        type="button"
        onClick={onLogout}
        className="text-red-700 flex items-center gap-3 mt-auto pl-5 text-[18px]"
      >
        <PiSignOut size={24} />
        Log out
      </button>
    </div>
  );
}