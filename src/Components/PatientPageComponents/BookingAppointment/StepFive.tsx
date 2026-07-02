type Props = {
  docImg : string;
  docName : string;
  department : string;
  availability : boolean;
  date: string;
  time : string;
  reason : string;
  shareRecords: boolean;
  setShareRecords: (value: boolean) => void;
}

export default function StepFive({
  docImg,
  docName,
  department,
  date,
  time,
  reason,
  shareRecords,
  setShareRecords  
}: Props) {

  const parsedDate = new Date(date)
  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
  // const formattedTime = parsedDate.toLocaleTimeString("en-US", {
  //   hour: "numeric",
  //   minute: "2-digit",
  //   hour12: true,
  // })

  return (
    <div>
        <h1 className='text-[18px] fontOutfit font-medium pb-4'>Review Your Appointment </h1>
          <div className='flex gap-2'>
                <img className='w-[69.8px] h-19.25 rounded-[4.01px] ' src={docImg} alt="doctorImg" />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[#141313] fontOutfit font-medium text-[20px]'>{docName}</h1>
                    <p className='text-[#605E5E] fontOutfit font-light text-[16px]'>{department} Department</p>
                </div>
        </div>

                  <div className='flex items-center justify-between space-y-5 border-t border-[#D9D9D9] mt-5 pt-5'>
                  <ul className="space-y-2 text-[#757575] font-light text-[16px] fontOutfit ">
                    <li>Department</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Reasons</li>
                  </ul>
                  <ul className="space-y-2 text-[16px] fontOutfit font-normal ">
                    <li>{department}</li>
                    <li>{formattedDate}</li>
                    <li>{time}</li>
                    <li>{reason}</li>
                  </ul>
                </div>

                <label htmlFor="recordSharing" className='text-[18px] fontOutfit font-medium'>Record Sharing</label>
                <div className="flex items-center gap-1 my-1"><input id="recordSharing" className="custom-checkbox" type="checkbox"  checked={shareRecords} onChange={(e) => setShareRecords(e.target.checked)} /><span>Medical History</span></div>
    </div>
  )
}