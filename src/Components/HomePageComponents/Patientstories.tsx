import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import Jordan from "../../assets/121054511_158666599245775_8379300751700607816_n (1).svg"
import Priya from "../../assets/121054511_158666599245775_8379300751700607816_n.svg"
import Marcus from "../../assets/121054511_158666599245775_8379300751700607816_n.svg"
import { motion, AnimatePresence } from 'framer-motion';

interface Card{
    id?: number,
    icon : React.ReactNode,
    comment : string,
    avatar : string,
    name : string,
    role : string
}

const Card = ({id,icon,comment,avatar,name,role} : Card)=>{
        return (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }} 
            className='border border-[#DDDDDD] bg-[#EEEDED] w-96.75 p-5 flex flex-col justify-center rounded-md gap-4'>
                <div>{icon}</div>
                <h1 className='text-[#403F3F]'>{comment}</h1>
                <span className='w-full h-0.5 bg-[#D2D0D0]'></span>
                <div className='flex items-center gap-3'>
                    <img className="w-12.25 h-12.25 rounded-full object-cover" src={avatar} alt="" />
                    <div className='flex flex-col gap-2 justify-center'>
                        <p className='text-[#363636] font-semibold'>{name}</p>
                        <p className='text-[#656565]'>{role}</p>
                    </div>
                </div>
            </motion.div>
        )

    }
export default function Patientstories() {
    const stories : Card[][] = [
        [
        {
            icon : (
                <div className="flex flex-row gap-2 text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>),
            comment : `"I rescheduled my mother's cardiology visit in under a minute. The whole family is on it now."`,
            avatar : Jordan,
            name : "Jordan A.",
            role : "Family caregiver"

        },
        {
            icon : (
                <div className="flex flex-row gap-2 text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>),
            comment : `"MediCare isn't just a hospital, it's a partner in my family's health. The pediatrics team is simply the best in the state."`,
            avatar : Priya,
            name : "Priya S.",
            role : "Patient"

        },
        {
            icon : (
                <div className="flex flex-row gap-2 text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>),
            comment : `"The AI support helped me prep questions before my visit. My doctor noticed the difference."`,
            avatar : Marcus,
            name : "Marcus W.",
            role : "Patient"

        }
    ],
    [
        {
            icon : (
                <div className="flex flex-row gap-2 text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>),
            comment : `"I rescheduled my mother's cardiology visit in under a minute. The whole family is on it now."`,
            avatar : Jordan,
            name : "Jordan B.",
            role : "Family caregiver"

        },
        {
            icon : (
                <div className="flex flex-row gap-2 text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>),
            comment : `"MediCare isn't just a hospital, it's a partner in my family's health. The pediatrics team is simply the best in the state."`,
            avatar : Priya,
            name : "Priya T.",
            role : "Patient"

        },
        {
            icon : (
                <div className="flex flex-row gap-2 text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>),
            comment : `"The AI support helped me prep questions before my visit. My doctor noticed the difference."`,
            avatar : Marcus,
            name : "Marcus X.",
            role : "Patient"

        }
    ],
    ]

    const [ index, setIndex ] = useState<number>(0)
    const handleNext =()=>{
        setIndex((prev)=> (prev + 1) % stories.length)
    }
    const handlePrev = ()=>{
        console.log("btn clicked");
        
        setIndex((prev)=> (prev - 1 + stories.length) % stories.length)
    }
  
  return (
    <div className='w-full px-10 py-20 bg-[#F5F5F5]'>
        <div className='mx-auto container px-10 relative'>
        <span className='text-[#28574E] text-[18px] bg-[#DCF2EE] flex items-center justify-center w-40.75 h-10.75 rounded-[31px]'>Patient stories</span>
        <h1 className='text-[34px] fontLibre font-semibold w-117.5 leading-10 py-4'>Real people. Real care. Real coordination</h1>
        <div className="flex gap-5 absolute top-5 right-1">
            <button type='button' onClick={handlePrev} className='bg-[#DBD7D7] rounded-full w-10.75 h-10.75 text-[#757575] text-[20px] flex justify-center items-center'><GrPrevious /></button>
            <button type='button' onClick={handleNext} className='bg-[#28574E] rounded-full w-10.75 h-10.75 text-white text-[20px] flex justify-center items-center' ><GrNext /></button>
        </div>
        <div className="flex gap-6 mt-8 justify-between">
        <AnimatePresence>
            {stories[index].map((story, id) => (
          <Card key={id} {...story} />
        ))}
        </AnimatePresence>
      </div>
        </div>
    </div>
  )
}