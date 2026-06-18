import React from 'react'
import { Heart, Baby,Bone, Venus,Eye } from 'lucide-react'
import icon from "../../assets/Icon (1).svg"
import Tooth from "../../assets/Container (1).svg"
import firstAid from "../../assets/Icon (2).svg"
import Button from '../Button'
import { Link } from 'react-router'

interface Idep{
    id? : number,
    icon : React.ReactNode,
    department : string,
    style? : string
}

export default function Explore() {
    const departments : Idep[] = [
        {
            id : 1,
            icon : <Heart />,
            department : "Cardiology",
            style : "text-[#FC0707]  bg-[#FFF4F3]"
        },
         {
            id : 2,
            icon : <Baby />,
            department : "Pediatrics",
            style : "text-[#F9A836] bg-[#FFF5E8]"
        },
         {
            id : 3,
            icon : <img src={icon}  alt=""/>,
            department : "Mental Health",
            style : "text-[] bg-[#CFDFE0]"        
        },
         {
            id : 4,
            icon : <img src={Tooth} alt="" />,
            department : "Dentistry",
            style : "text-[25px] text-[#191C1D] bg-[#E1E3E3] text-[]"
        },
         {
            id : 5,
            icon : <Bone />,
            department : "Orthopedics",
            style : "text-[#8519FF] bg-[#FEE2FF]"        },
         {
            id : 6,
            icon : <img src={firstAid} alt="" />,
            department : "General Practice",
            style : "text-[#00454B] bg-[#D1FAFF]"
        },
         {
            id : 7,
            icon : <Venus />,
            department : "OB-GYN",
            style : "text-[#2B00FF] bg-[#ECE6FF]"
        },
         {
            id : 8,
            icon : <Eye />,
            department : "Opthalmolgy",
            style : "text-[#5F330E] bg-[#FAEFE7]"
        },

    ]

    const Card = ({icon, department,style} : Idep)=>{
        return (
            <div className='bg-white rounded-lg flex flex-col items-center justify-center w-62.5 h-[148.5px] gap-2'>
                <span className={`${style} w-15 h-15 rounded-full flex items-center justify-center`}>{icon}</span>
                <p className='text-[20px] font-semibold'>{department}</p>
            </div>
        )
    }
    
  return (
    <div className='bg-[#28574E] w-full px-10 py-10'>
        <div className='mx-auto container py-8 flex flex-col items-center justify-center gap-4'>
            <span className='bg-[#DCF2EE] text-[#28574E] text-[18px] rounded-[31px]  h-10.75 w-40.25 flex items-center justify-center'>Specialty care</span>
            <h1 className='font-semibold text-[34px] text-white fontLibre'>10+ departments. One unified record.</h1>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
             {departments.map((department)=> {
                return <Card key={department.id} {...department} />
             })}
           </div>

           <Link to="/departments"><Button variant='primaryWBorder' width='w-[281px] mt-5' type='button' content="Explore all Departments"  /></Link>

        </div>
    </div>
  )
}