import Button from '../Button'

export default function Dashboard() {
  return (
    <div className='w-full'>
        <div className='w-full bg-[#28574E] h-29 flex flex-col justify-center px-4 gap-1 rounded-xl'>
            <h1 className='text-white font-medium fontOutfit text-[24px]'>Hello, (fullName) 👋</h1>
            <p className='text-[#F0E9E9] text-[18px] font-light'>Welcome to Medibridge.</p>
        </div>

        <div className='w-full flex justify-between gap-10 py-8'>
            <div className='w-2/3 flex flex-col gap-3'>
                <p>Upcoming Appointment</p>
                <div className='w-full border border-[#D7D7D7] flex flex-col items-center justify-center gap-2 py-4 h-[320px]'>
                    <p>No upcoming appointments</p>
                    <p className='px-15 text-center'>You don’t have any scheduled hospital visits yet. Once you book an appointment, it will appear here</p>
                    <Button type='button' className='mt-4' width='w-[194px]' content="Book Appointment" />
                </div>

            </div>

            <div className='w-1/3 border border-[#D7D7D7] h-79.25 p-5.5'>
                <p className='pb-4'>Quick Actions</p>
                <div className='flex flex-col gap-5'>
                <button type='button' className='h-15.25 w-full border border-[#E7E4E4] rounded-lg flex items-center px-3 gap-2'><span className='h-11.25 w-11.25 bg-[#E3FDF7] flex items-center justify-center'>H</span>Book Appointment</button>
                <button type='button' className='h-15.25 w-full border border-[#E7E4E4] rounded-lg flex items-center px-3 gap-2'><span className='h-11.25 w-11.25 bg-[#E3FDF7] flex items-center justify-center'>H</span>Chat With AI</button>
                <button type='button' className='h-15.25 w-full border border-[#E7E4E4] rounded-lg flex items-center px-3 gap-2'><span className='h-11.25 w-11.25 bg-[#E3FDF7] flex items-center justify-center'>H</span>Medical Records</button>
                </div>

            </div>
        </div>

        <p className='text-start'>Recent Activities</p>

        <div className='flex flex-col items-center justify-center w-full text-center'>
            <p>No recent activity yet</p>
            <p className='w-114.75'>Your hospital activity will appear here after you book an appointment, visit the hospital and receive updates from your care team</p>
        </div>
    </div>
  )
}