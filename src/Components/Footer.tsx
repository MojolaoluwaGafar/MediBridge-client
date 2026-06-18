import Logo from '../assets/MediBridgeLogo.svg'
import { Link } from 'react-router'

export default function Footer() {
  const links = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Support Center", to: "/support" },
    { label: "Contact", to: "/contact" },
  ]
  return (
    <div className="w-full h-[13vh] bg-[#E2DFDF] flex items-center justify-between px-10">
        <div className="mx-auto container flex justify-between px-10 fontOutfit">
            <img src={Logo} alt="" />

            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-center">
              {links.map((link, index)=>{
                return  <Link key={index} to={link.to}>{link.label}</Link>
              })}
            </div>

            <p>© 2026 MediBridge Healthcare. Calm & Trusted Care.</p>
        </div>
    </div>
  )
}