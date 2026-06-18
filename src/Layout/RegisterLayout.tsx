import React from 'react'
import Logo from "../assets/MediBridgeLogo.svg"
import Footer from '../Components/Footer'

type Props = {
    children : React.ReactNode,
    heading : string,
    subHeading : string,
    ul? : React.ReactNode,
    image : string,
}

export default function RegisterLayout({heading,subHeading,children,ul,image}: Props) {
  return (
   <div>
     <div className='w-full flex justify-between'>
      <div className='w-full flex'>
        <div className='authBgGradient px-10 pt-8 pb-15 w-1/2 h-auto flex flex-col items-center justify-center gap-8.75'>
               
               <div className="container mx-auto flex flex-col justify-center w-109">
                 <img className="w-46 h-9.5 my-2" src={Logo} alt="" />
                <h1 className='text-[#28574E] text-[40px] font-semibold fontLibre leading-10 py-2'>{heading}</h1>
                <p className="text-[#3E3B3B] text-[18px] py-2 fontOutfit">{subHeading}</p>
                <div className="pt-4 pb-8 fontOutfit">
                    {ul}
                </div>
                <img className='w-109 h-[314.05px]' src={image} alt="" />
               </div>


        </div>
            <div className='w-1/2 px-10 flex items-center justify-center'>
                <div className='container mx-auto flex items-center justify-center fontOutfit'>
                    {children}
                </div>
            </div>
      </div>
    </div>
    <Footer />
   </div>
  )
}