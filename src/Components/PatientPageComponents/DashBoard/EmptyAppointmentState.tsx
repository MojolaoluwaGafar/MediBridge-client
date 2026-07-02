import { CalendarX } from "lucide-react";
import Button from "../../Button";

type Props = {
  onBookAppointment: () => void;
};

export default function EmptyAppointmentState({
  onBookAppointment,
}: Props) {
  return (
    <div className="w-full rounded-xl border border-[#D7D7D7] flex flex-col items-center justify-center gap-2 py-4 h-[320px]">
      <span className="bg-[#EBEAEA] h-16.25 w-19.25 rounded-md flex items-center justify-center">
        <CalendarX size={35} />
      </span>

      <p className="text-[20px] font-medium pt-4">
        No upcoming appointments
      </p>

      <p className="px-5 text-center text-[14px] text-[#666666]">
        You don’t have any scheduled hospital visits yet.
        Once you book an appointment, it will appear here.
      </p>

      <Button
        type="button"
        className="mt-4"
        width="w-[194px]"
        content="Book Appointment"
        onClick={onBookAppointment}
      />
    </div>
  );
}