import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { PiSignOut } from "react-icons/pi";
import UserAvatar from "../../assets/user-avatar-filled-svgrepo-com.svg";
import type { AuthUser } from "../../Context/AuthContext";

type Props = {
  user: AuthUser | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
};

export default function UserMenu({
  user,
  isOpen,
  setIsOpen,
  onLogout,
}: Props) {
  return (
    <div className="flex items-center gap-3 relative">
      <img
        src={user?.img || UserAvatar}
        className="w-12.5"
        alt="user"
      />

      <div className="flex items-center gap-2">
        <div className="text-[14px] fontOutfit">
          <p>
            {user?.firstname} {user?.lastname}
          </p>

          <p className="text-[#666666]">
            {user?.email}
          </p>
        </div>

        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 bg-white rounded-md shadow-lg p-3 w-44 z-50"
          >
            <button
              className="flex items-center gap-2 text-red-700"
              onClick={onLogout}
            >
              <PiSignOut />
              Log out
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}