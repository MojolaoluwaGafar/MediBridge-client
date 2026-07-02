import { useState } from "react";
import { useNavigate } from "react-router";

import Footer from "../Components/Footer";
import Dashboard from "../Components/PatientPageComponents/DashBoard/Dashboard";
import LogoutModal from "../Components/LogoutModal";

import Sidebar from "../Components/PatientPageComponents/SideBar";
import Topbar from "../Components/PatientPageComponents/TopBar";
import { useAuth } from "../Hooks/Auth/useAuth";
import { patientTabs } from "../Components/PatientPageComponents/PatientTabs";

export default function PatientPage() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;

      case "appointments":
        return <p>Appointments</p>;

      case "departments":
        return <p>Departments</p>;

      case "medRecords":
        return <p>Medical Records</p>;

      case "messages":
        return <p>Messages</p>;

      case "aiSupport":
        return <p>AI Support</p>;

      case "settings":
        return <p>Settings</p>;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="container mx-auto">

        <Topbar
          activeTab={activeTab}
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onLogout={() => setShowLogoutModal(true)}
        />

        <div className="flex">

          <Sidebar
            tabs={patientTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLogout={() => setShowLogoutModal(true)}
          />

          <main className="flex-1 p-10">
            {renderContent()}
          </main>

        </div>

      </div>

      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogout}
          onClose={() => setShowLogoutModal(false)}
        />
      )}

      <Footer />
    </>
  );
}