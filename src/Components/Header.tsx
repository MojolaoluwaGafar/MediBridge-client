import React from 'react'
import Logo from "../assets/MediBridgeLogo.svg"
import { NavLink, Link } from 'react-router'
import Button from './Button'
import { useAuth } from '../Hooks/Auth/useAuth'

type Props = {
    className?: string,
    heading? : string,
    subHeading? : string,
    image? : string,
    others?: React.ReactNode
}

const navLinks = [
    {
        to: "/",
        label: "Home",
    },
    {
        to: "/departments",
        label: "Departments",
     },
    {
        to: "/support",
        label: "AI Support",
    },
    {
        to: "/about",
        label: "About Us",
    },
];

export default function Header({className, heading,subHeading,others, image}: Props) {
    const { isAuthenticated } = useAuth();


  return (
    <div className={`${className} relative px-20 py-5 w-full`}>
       <div className="mx-auto container">
        <nav className="bg-white rounded-full flex justify-between items-center px-10 h-20">
            <Link to="/"><img src={Logo} alt="" /></Link>
            
            <div className='flex gap-5 items-center fontOutfit'>
                {navLinks.map(({to,label})=>{
                    return <NavLink
                    key={to} to={to} className={({isActive})=> isActive ? "text-[18px] text-[#28574E] font-semibold" : "text-[18px]"}>
                        <p className='text-[18px]'>{label}</p>
                    </NavLink>
                })}
            </div>

           {isAuthenticated ? 
           <Link to="/patientDashboard"><Button className="px-4 fontOutfit" type='button' content="Go to dashboard" /></Link>
            : 
            <div className='flex items-center gap-2'>
                <Link to="/login"><button type='button' className="text-[#28574E] text-[18px] fontOutfit border-0 h-13 font-semibold">Login</button></Link>
                <Link to="/activate"><Button className="px-4 fontOutfit" type='button' content="Activate Account" /></Link>
            </div>} 
        </nav>

        <div className='flex flex-col items-center justify-center py-25 w-195 mx-auto text-center gap-3'>
            <h1 className="text-[58px] text-white font-extrabold fontLibre leading-[100%]">{heading}</h1>
            <p className='text-[20px] text-[#DAD8D8] font-light w-160 text-center fontOutfit'>{subHeading}</p>
            <div className="flex gap-5 pt-5 z-10">
                {others}
            </div>
        </div>
       </div>
       <img className='w-225.5 absolute top-107 left-1/2 transform -translate-x-1/2' src={image} alt="" />
    </div>
  )
}