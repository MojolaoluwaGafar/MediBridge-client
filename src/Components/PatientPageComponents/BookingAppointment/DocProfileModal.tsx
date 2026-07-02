import type { ISelectDoc } from './StepTwo'
import { X } from "lucide-react" 

interface IDocProfile extends ISelectDoc {
    about : string;
    availableTime : {
        day : string;
        start : string;
        end : string
    }[],
    onClose : ()=> void
}

export default function DocProfileModal({ docImg,docName, department,YOE, availability,about, availableTime, onClose}: IDocProfile) {
  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
        <div className='w-120 max-w-full max-h-[90vh] overflow-y-scroll scrollbar-none relative rounded-lg bg-white'>
            <h1 className='fontOutfit font-semibold text-[22px] px-6 py-4'>Doctor Profile</h1>
            <button className='absolute right-5 top-6' onClick={onClose} type='button'><X size={20} /></button>
        <div className='w-full h-0.5 bg-[#E7E4E4]'></div>

        <div className='flex gap-4 px-6 py-5'>
            <img className='w-[69.8px] h-19.25 rounded-[4.01px] ' src={docImg} alt="doctorImg" />
            <div className='flex flex-col gap-1'>
            <h1 className='text-[#141313] fontOutfit font-medium text-[20px]'>{docName}</h1>
            <p className='text-[#605E5E] fontOutfit font-light text-[16px]'>{department} Department</p>
            <p className='text-[14px] font-normal text-[#3E3B3B] '>{YOE} yrs Exp. <span className={availability ? "text-green-500" : "text-red-500"}>{availability ? "Available" : "Unavailable"}</span></p>
            </div>
        </div>

        <p className='font-light text-[16px] text-[#3E3B3B] px-6'>{about}</p>

        <p className='text-[17px] font-medium fontOutfit px-6 py-3'>Availability</p>

        <div className='text-[#3E3B3B] fontOutfit font-light text-[16px] px-6 pb-5'>
            {availableTime.map((slot, idx) => (
                <p key={idx}> {slot.day} – {slot.start} to {slot.end}</p>
            ))}
        </div>

        </div>
    </div>
  )
}