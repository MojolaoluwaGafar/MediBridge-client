import { useState } from 'react'
import Button from '../../Button'
import DisplayDept from './DisplayDept';
type Props = {}

export default function Department({}: Props) {
    const [showBooking, setShowBooking] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className='relative'>
        <h1 className="fontOutfit font-semibold text-[24px]">Departments</h1>
        <p className="text-[#707070] text-[16px] font-light">Find the right department for your healthcare needs</p>
        
        <Button onClick={()=> setShowBooking(true)} width="w-[250px]"
        className="absolute right-0 top-0" type="button"
        content="Book New Appointment"
        />

        <div className='w-full bg-[] border border-[]'>
            <div>
                <p>Search</p>
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-[817px]' placeholder='Search departments,conditions...' type="text" />
            </div>
             <div>
                <p>Filter</p>
                <select>
                    <option value="">All</option>
                </select>
            </div>
        </div>

        <div>
            <DisplayDept searchTerm={searchTerm} />
            
        </div>
    </div>
  )
}