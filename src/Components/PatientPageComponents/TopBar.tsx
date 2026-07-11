import Logo from "../../assets/MediBridgeLogo.svg";
import { Bell, Search, Menu } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import type { AuthUser } from "../../Hooks/Auth/useAuth";

type Props = {
  activeTab: string;
  user: AuthUser | null;
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;

  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isUserMenuOpen: boolean;
  setIsUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;

  onLogout: () => void;
};

export default function Topbar({
  activeTab,
  user,
  isSidebarOpen,
  setIsSidebarOpen,
  isUserMenuOpen,
  setIsUserMenuOpen,
  onLogout,
  searchTerm,
  setSearchTerm,
}: Props) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm ?? "");

  useEffect(() => {
    setLocalSearchTerm(searchTerm ?? "");
  }, [searchTerm]);

  const renderTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <p className="text-xl sm:text-2xl lg:text-[28px] font-medium fontOutfit">
            Dashboard
          </p>
        );

      case "settings":
        return (
          <p className="text-base sm:text-lg">
            Manage your account settings.
          </p>
        );

      default:
        return (
          <div className="relative w-full max-w-md lg:max-w-xl">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <Search color="#605E5E" size={18} />
            </span>

            <input
              value={localSearchTerm}
              onChange={(event) => {
                const value = event.target.value;
                setLocalSearchTerm(value);
                setSearchTerm?.(value);
              }}
              placeholder="Search condition, department..."
              className="h-11 w-full rounded-lg border border-[#E7E4E4] pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>
        );
    }
  };

  return (
    <header className="border-b border-[#E6EFF5] bg-white mx-auto container">
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">

        <div className="flex items-center gap-4 lg:w-72">

          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden rounded-md p-2 hover:bg-gray-100"
          >
            <Menu size={26} />
          </button>

          <Link to="/">
            <img
              className="w-36 sm:w-44 lg:w-52"
              src={Logo}
              alt="MediBridge logo"
            />
          </Link>

        </div>

       <div className="flex w-full justify-between items-center">
         <div className="hidden flex-1 justify-start px-8 lg:ml-10 lg:flex">
          {renderTitle()}
        </div>

        <div className="flex items-center gap-3 lg:gap-5">

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA] lg:h-12 lg:w-12">
            <Bell size={20} />
          </span>

          <UserMenu
            user={user}
            isOpen={isUserMenuOpen}
            setIsOpen={setIsUserMenuOpen}
            onLogout={onLogout}
          />

        </div>
       </div>
      </div>

      <div className="px-4 pb-4 lg:hidden">
        {renderTitle()}
      </div>
    </header>
  );
}