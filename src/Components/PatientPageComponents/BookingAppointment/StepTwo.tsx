import { useState, useEffect } from 'react'
import DocProfileModal from './DocProfileModal';
import { useDoctors } from "../../../Hooks/Doctors/useDoctors";
import type { IDoctor } from '../../../types/doctor';

export interface ISelectDoc {
    _id: string;
    docImg : string;
    docName : string;
    department : string;
    YOE : number;
    availability : boolean; 
}


const Card = ({
    docImg,
    docName,
    department,
    YOE,
    availability,
    isSelected,
    onSelect,
    onViewProfile
} : IDoctor & { isSelected?: boolean; onSelect: () => void , onViewProfile : ()=> void})=>{

    return (
        <div className={`border rounded-lg p-3 w-118.25 h-45 transition ${
        isSelected ? "border-[#28574E] shadow-md" : "border-[#D7D7D7] hover:bg-[#F5F5F5]"}`}>
            <div className='flex gap-4'>
                <img className='w-[69.8px] h-19.25 rounded-[4.01px] ' src={docImg} alt="doctorImg" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#141313] fontOutfit font-medium text-[20px]'>{docName}</h1>
                    <p className='text-[#605E5E] fontOutfit font-light text-[16px]'>{department} Department</p>
                    <p className='text-[14px] font-normal text-[#3E3B3B] '>{YOE} yrs Exp. <span className={availability ? "text-green-500" : "text-red-500"}>{availability ? "Available" : "Unavailable"}</span></p>
                </div>
            </div>

            <div className='flex gap-5 w-full pt-4'>
                <button onClick={onViewProfile} className='text-[#28574E] w-51.75 h-10.5 text-[16px] fontOutfit font-medium' type='button'>View Profile</button>
                <button onClick={onSelect} className={`border w-51.75 h-10.5 border-[#28574E] bg-white text-[#28574E] text-[16px] fontOutfit font-medium rounded-md ${isSelected ? "hidden" : "flex items-center justify-center"}`} type='button'>Select Doctor</button>
            </div>

        </div>
    )
}

export default function StepTwo(
    {
        onSelectDoctor,
        selectedDepartment,
    } : { onSelectDoctor : (doc: IDoctor)=> void; selectedDepartment : string | null;}
) {
    const [selectedDoctor, setSelectedDoctor ] = useState<IDoctor | null>(null)
    const [profileDoc, setProfileDoc] = useState<ISelectDoc | null>(null)
    const { doctors, fetchDoctors, loading, error } = useDoctors();
        
    useEffect(() => {
        fetchDoctors();
    }, []);
    

    const filteredDoctors = selectedDepartment ? doctors.filter((doc)=> doc.department === selectedDepartment && doc.availability === true) : doctors
    
    return (
    <div>
        <div className='flex justify-between'>
        <h1 className='font-medium fontOutfit text-[18px]'>Select a Doctor</h1>
        <p className='flex items-center gap-1 text-[#3E3B3B] fontOutfit'>{selectedDepartment || "All Departments"} <span className='w-1 h-1 rounded-full bg-[#3E3B3B]'></span> {filteredDoctors.length} doctors available</p>
        </div>

        <div className='py-8 w-full grid gap-4 h-100 overflow-y-scroll scrollbar-none'>
            {loading ? <p>Loading doctors...</p>
            : error ? <p>{error}</p>
        : (            
            filteredDoctors.map((doctor, id) => {
                return <Card key={id} {...doctor} isSelected={selectedDoctor?._id === doctor._id} 
                onSelect={()=> {
                    setSelectedDoctor(doctor);
                    onSelectDoctor(doctor)
                }}
                onViewProfile={()=> setProfileDoc(doctor)}/>
            })
            )
            }
        </div>

        { profileDoc && <DocProfileModal {...profileDoc} onClose={()=> setProfileDoc(null)} />}
    </div>
  )
}