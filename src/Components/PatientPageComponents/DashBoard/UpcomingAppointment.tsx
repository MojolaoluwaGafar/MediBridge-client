import AppointmentCard from "./AppointmentCard";
import type { IAppointment } from "../../../types/appointment";

import EmptyAppointmentState from "./EmptyAppointmentState";

type Props = {
  loading?: boolean;
  showLoading?: boolean;
  error: string | null;
  appointment: IAppointment | null;
  onView: (appointment: IAppointment) => void;
  onBookAppointment: () => void;
};

export default function UpcomingAppointmentSection({
  showLoading,
  error,
  appointment,
  onView,
  onBookAppointment,
}: Props) {
  return (
    <div className="w-2/3 flex flex-col gap-3 fontOutfit">
      <p className="text-[24px] font-medium">
        Upcoming Appointment
      </p>

      {showLoading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <p>{error}</p>
      ) : appointment ? (
        <AppointmentCard
          appointment={appointment}
          onView={onView}
        />
      ) : (
        <EmptyAppointmentState
          onBookAppointment={onBookAppointment}
        />
      )}
    </div>
  );
}