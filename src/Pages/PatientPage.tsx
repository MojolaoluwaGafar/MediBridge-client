import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Logo from "../assets/MediBridgeLogo.svg"
import { LayoutDashboard } from 'lucide-react'
import Dashboard from '../Components/PatientPageComponents/Dashboard'

interface ITab {
    key : string,
    label : string,
    icon? : React.ReactNode
}
export default function PatientPage() {
    const [ activeTab, setActiveTab ] = useState<string>("dashboard")
    const tabs : ITab[] = [
        { key: "dashboard", label: "Dashboard", icon : <LayoutDashboard color="#727783" />  },
        { key: "appointments", label: "Appointments" },
        { key: "departments", label: "Departments" },
        { key: "medRecords", label: "Medical Records" },
        { key: "messages", label: "Messages" },
        { key: "aiSupport", label: "AI Support" },
        { key: "settings", label: "Account Settings" },
    ];

  return (
    <div className='w-full'>
        <div className='container mx-auto'>
            <div className='top flex w-full border-b border-b-[#E6EFF5] p-4 px-10'>
                <div className='w-62.5'>
                    <img src={Logo} alt="" />
                </div>

                <div className='flex justify-between items-center w-full px-10'>
                    {activeTab === "dashboard" && <p className='text-[28px] font-medium fontOutfit'>Dashboard</p>}
                    {activeTab === "appointments" && <div>
                        <span></span>
                        <input placeholder='Search condition, department...' type="text" /></div>}
                    {activeTab === "departments" && <div>
                        <span></span>
                        <input placeholder='Search condition, department...' type="text" /></div>}
                    {activeTab === "medRecords" && <div>
                        <span></span>
                        <input placeholder='Search condition, department...' type="text" /></div>}
                    {activeTab === "messages" && <div>
                        <span></span>
                        <input placeholder='Search condition, department...' type="text" /></div>}
                    {activeTab === "aiSupport" && <div>
                        <span></span>
                        <input placeholder='Search condition, department...' type="text" /></div>}
                    {activeTab === "settings" && <p>Manage your account settings.</p>}
                </div>

            </div>


            <div className='bottom flex'>
                <div className='w-62.5 border-r border-r-[#E6EFF5] py-10 px-4 flex flex-col gap-3'>
                {tabs.map((tab) => {
                    return <button key={tab.key} type='button' onClick={()=> setActiveTab(tab.key)}
                    className={`text-[18px] font-semibold flex gap-2 w-53.5 h-11 items-center pl-5 hover:cursor-pointer ${activeTab === tab.key ? "bg-[#28574E] text-white rounded-sm" : "text-[#807D7E]"}`}>
                        {tab.icon} {tab.label}
                    </button>
                })}

                <button type='button' className='text-red-700 flex-1 pt-55 w-53.5 cursor-pointer'> <span></span>Log out</button>
                </div>

                <div className='w-full p-10'>
                    {activeTab === "dashboard" && <Dashboard />}
                    {activeTab === "appointments" && <p>Here are your upcoming appointments.</p>}
                    {activeTab === "departments" && <p>Browse hospital departments.</p>}
                    {activeTab === "medRecords" && <p>View your medical records.</p>}
                    {activeTab === "messages" && <p>Check your messages.</p>}
                    {activeTab === "aiSupport" && <p>AI Support is here to help you.</p>}
                    {activeTab === "settings" && <p>Manage your account settings.</p>}
                </div>

            </div>





        </div>
        <Footer />
    </div>
  )
}