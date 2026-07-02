import {
  CalendarDays,
  Astroid,
  FileText,
} from "lucide-react";

type Props = {
  onBookAppointment: () => void;
};

export default function QuickActions({
  onBookAppointment,
}: Props) {
  return (
    <div className="w-97.75 border border-[#D7D7D7] rounded-xl h-79.25 p-5.5">
      <p className="pb-4 text-[24px] font-medium">
        Quick Actions
      </p>

      <div className="flex flex-col gap-5">

        <button
          onClick={onBookAppointment}
          type="button"
          className="h-15.25 w-full border border-[#E7E4E4] rounded-lg flex items-center px-3 gap-2 bg-white"
        >
          <span className="h-11.25 w-11.25 bg-[#E3FDF7] flex items-center justify-center">
            <CalendarDays color="#28574E" />
          </span>

          Book Appointment
        </button>

        <button
          type="button"
          className="h-15.25 w-full border border-[#E7E4E4] rounded-lg flex items-center px-3 gap-2 bg-white"
        >
          <span className="h-11.25 w-11.25 bg-[#E3FDF7] flex items-center justify-center">
            <Astroid color="#28574E" />
          </span>

          Chat With AI
        </button>

        <button
          type="button"
          className="h-15.25 w-full border border-[#E7E4E4] rounded-lg flex items-center px-3 gap-2 bg-white"
        >
          <span className="h-11.25 w-11.25 bg-[#E3FDF7] flex items-center justify-center">
            <FileText color="#28574E" />
          </span>

          Medical Records
        </button>

      </div>
    </div>
  );
}