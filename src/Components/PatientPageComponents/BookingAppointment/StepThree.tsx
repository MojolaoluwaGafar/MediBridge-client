import { useState} from 'react'
import type { IDoctor } from '../../../types/doctor';

type Props = {
  doctor : IDoctor | null;
  onSelectDateTime : (date: string,time : string)=> void;
}

export default function StepThree({doctor, onSelectDateTime}: Props) {
  const [ selectedTime, setSelectedTime ] = useState<string | null>(null)
  const [ selectedDate, setSelectedDate ] = useState<string | null>(null);
  const [ error, setError ] = useState<string | null>(null);

  if (!doctor) {
    return <p className="text-[#3E3B3B] fontOutfit">Please select a doctor</p>
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pickedDate = e.target.value;
    const today = new Date();
    const chosen = new Date(pickedDate);

    if (chosen < new Date(today.toDateString())) {
      setError("You cannot select a past date.");
      setSelectedDate(null);
      return;
    }

    setError(null);
    setSelectedDate(pickedDate);
    setSelectedTime(null);
  };

  const getDayName = (dateStr: string) => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[new Date(dateStr).getDay()];
  };

  const handleTimeClick = (slotLabel: string) => {
    if (!selectedDate || selectedTime) return;
    setSelectedTime(slotLabel);
    onSelectDateTime(selectedDate, slotLabel)
  };  

  const selectedDay = selectedDate ? getDayName(selectedDate) : null;
  const matchingSlots = selectedDay
    ? doctor.availableTime.filter(slot => slot.day === selectedDay)
    : [];

  return (
    <div>
      <label htmlFor="date" className='text-[18px] fontOutfit font-medium pb-4'>Select a date</label>
      <input id='date' className='w-118 border border-[#D7D7D7] text-[#606060] text-[16px] px-4 py-2 rounded-md my-2' type="date"
      onChange={handleDateChange} />
      {error && <p className="text-red-500 text-sm">{error}</p>}        
      <h1 className='text-[18px] fontOutfit font-medium pt-4 pb-2'>Time Slot</h1>
      
      <div className='grid grid-cols-3'>
        {!selectedDate ? (
          <p className="text-[#3E3B3B] fontOutfit text-sm">Pick a day to see available slots</p>
        ) : matchingSlots.length > 0 ? (
          matchingSlots.map((slot, idx) => {
            const timeLabel = `${slot.start}`;
            return (
            <button
            type='button' key={idx} onClick={() => handleTimeClick(timeLabel)}
            className={`border border-[#DDDDDD] h-15.5 rounded-lg w-38 font-normal
              ${selectedTime === timeLabel
              ? "bg-[#28574E] text-white"
              : "bg-white text-[#3E3B3B] hover:bg-[#F5F5F5]"}`}
            >
                {timeLabel}
            </button>
        );
      })
        ) : (
      <p className="text-[#3E3B3B] fontOutfit text-sm w-md">Doctor is not available on selected day, please check doctor's profile to confirm doctor's availabilty</p>
      )}
    </div>  

      <div>

      </div>
    </div>
  )
}