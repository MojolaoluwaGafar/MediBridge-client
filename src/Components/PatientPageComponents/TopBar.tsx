import Logo from "../../assets/MediBridgeLogo.svg";
import { Bell } from "lucide-react";
import { Link } from "react-router";
import UserMenu from "./UserMenu";
import type { AuthUser } from "../../Hooks/Auth/useAuth";

type Props = {
  activeTab: string;
  user: AuthUser | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
};

export default function Topbar({
  activeTab,
  user,
  isOpen,
  setIsOpen,
  onLogout,
}: Props) {
  const renderTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <p className="text-[28px] font-medium fontOutfit">
            Dashboard
          </p>
        );

      case "settings":
        return <p>Manage your account settings.</p>;

      default:
        return (
          <input
            placeholder="Search condition, department..."
            className="border rounded-lg px-4 py-2 w-96"
          />
        );
    }
  };

  return (
    <div className="flex border-b border-[#E6EFF5] p-4 px-10">
      <div className="w-62.5">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="flex justify-between items-center flex-1 pl-10">
        {renderTitle()}

        <div className="flex items-center gap-5">
          <span className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center">
            <Bell />
          </span>

          <UserMenu
            user={user}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onLogout={onLogout}
          />
        </div>
      </div>
    </div>
  );
}