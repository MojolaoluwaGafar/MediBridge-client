import { useState } from 'react'
import DepartmentCard from './DepartmentCard'
import { departments, departmentDetails } from '../../data'
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import ViewDepartmentModal from './ViewDepartmentModal'

interface Props {
  searchTerm: string
}

export default function AllDepartments({ searchTerm }: Props) {
  const [activeTab, setActiveTab] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedDepartment, setSelectedDepartment] = useState<any | null>(null)
  const itemsPerPage = 8

  const filteredDepartments = departments
  .filter(department => activeTab === "All" || department.category === activeTab)
    .filter(department => department.field.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalItems = filteredDepartments.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedDepartments = filteredDepartments.slice(startIndex, endIndex)

  const btnClass =
    "border border-[#E8E8E8] rounded-md p-1 disabled:opacity-50 disabled:cursor-not-allowed"

  const handleViewDepartment = (departmentId: number) => {
    const details = departmentDetails.find(d => d.id === departmentId)
    if (details) {
      setSelectedDepartment(details)
    }
  }

  return (
    <div className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full px-20">
          {["All", "Medical", "Surgical", "Diagnostics", "Mental Health", "Emergency", "Women & Children"].map((dpmt, index) => (
            <button
              type="button"
              key={index}
              onClick={() => {
                setActiveTab(dpmt)
                setCurrentPage(1)
              }}
              className={`px-8 whitespace-nowrap h-12.5 fontOutfit rounded-[28px] text-[16px] font-light transition-colors duration-300 ${
                activeTab === dpmt
                  ? "bg-[#28574E] text-white font-semibold hover:bg-[#4f8379]"
                  : "bg-[#E5E5E5] hover:bg-gray-800 hover:text-white text-[#000000]"
              }`}
            >
              {dpmt}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 w-full px-20">
          {displayedDepartments.map(department => (
            <DepartmentCard key={department.id} {...department} onView={()=> handleViewDepartment(department.id)} />
          ))}
        </div>

        <div className="py-5 flex justify-between items-center px-20">
          <p className='text-[#838383] font-DMSans text-[14px]'>
            Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
          </p>

          <div className="flex items-center gap-5">
            <p className='text-[14px] font-DMSans'>Page {currentPage} of {totalPages}</p>
            <div className="flex items-center gap-2">
              <button
                type='button'
                aria-label="First page"
                className={btnClass}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
              >
                <ChevronsLeft color="#202020" />
              </button>
              <button
                type='button'
                aria-label="Previous page"
                className={btnClass}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              >
                <ChevronLeft />
              </button>
              <button
                type='button'
                aria-label="Next page"
                className={btnClass}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              >
                <ChevronRight />
              </button>
              <button
                type='button'
                aria-label="Last page"
                className={btnClass}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(totalPages)}
              >
                <ChevronsRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {selectedDepartment && <ViewDepartmentModal {...selectedDepartment} onClose={()=> setSelectedDepartment(null)} />}
    </div>
  )
}
