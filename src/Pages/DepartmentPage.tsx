import {useState} from 'react'
import AppLayout from '../Layout/AppLayout'
import { Search } from 'lucide-react'
import AllDepartments from '../Components/DepartmentsPageComponents/AllDepartments'
import Button from '../Components/Button'
import NewsLetter from '../Components/HomePageComponents/NewsLetter'

export default function DepartmentPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <AppLayout  headerProps={{
      className : "departmentBg",
      heading : "Find The Right Department For Your Care",
      subHeading : "Explore hospital specialties, available services, and care teams.",
      others : <div className='flex items-center gap-5 pt-5 relative'>
        <span className='absolute left-3 text-white'><Search /></span>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search departments or conditions' type='text' className='pr-3 pl-10 text-[#DAD8D8] border border-white h-13.5 w-98.25 rounded-xl' />
        <Button variant='secondary' width='w-[152px]' type='button' content="Search" />
      </div>
    }}>
      <AllDepartments searchTerm={searchTerm} />
      <NewsLetter />
    </AppLayout>
    )
}