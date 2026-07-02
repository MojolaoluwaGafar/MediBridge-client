import { useState } from 'react'

type Props = {
    onSelectReason: (reason: string) => void;
}

export default function StepFour({ onSelectReason }: Props) {
    const [reason, setReason] = useState<string>("");
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setReason(value);
        onSelectReason(value);
    };  
    
    return (
    <div>
        <label htmlFor="reason" className='text-[18px] fontOutfit font-medium pb-4'>Reason for Visit <span className='text-red-500'>*</span></label>
        <textarea value={reason}
        onChange={handleChange} placeholder='Briefly describe your symptoms or reason for this appointment...' id='reason' className='h-30 border border-[#D7D7D7] rounded-lg w-full p-2 my-2' />
    </div>
    )
}