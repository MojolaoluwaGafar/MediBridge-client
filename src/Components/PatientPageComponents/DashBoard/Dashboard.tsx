import { useState, useEffect, useCallback, useMemo } from "react";

import { useAuth } from "../../../Hooks/Auth/useAuth";
import { useAppointments } from "../../../Hooks/Appointments/useAppointments";
import { useActivities } from "../../../Hooks/Activities/useActivities";

import DashboardGreeting from "./DashboardGreeting";
import UpcomingAppointment from "./UpcomingAppointment";
import QuickActions from "./QuickActions";
import RecentActivities from "./RecentActivities";
import BookAppointmentModal from "./BookAppointmentModal";
import ViewAppointmentModal from "./ViewAppointmentModal";

import type { IAppointment } from "../../../types/appointment";

export default function Dashboard() {
    const [showBooking, setShowBooking] = useState(false);
    const [selectedAppointment, setSelectedAppointment] =
        useState<IAppointment | null>(null);
    const [delayedLoading, setDelayedLoading] = useState<boolean>(false);

    const { user } = useAuth();

    const {
        appointments,
        loading,
        error,
        fetchAppointments
    } = useAppointments();

    const {
        activities,
    } = useActivities();

    useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (loading) {
        timer = setTimeout(() => {
            setDelayedLoading(true);
        }, 150);
    } else {
        setDelayedLoading(false);
    }

    return () => {
        if (timer) clearTimeout(timer);
    };
    }, [loading]);

    const upcomingAppointment = useMemo(
        () => appointments[0] ?? null,
        [appointments]
    );

    const handleView = useCallback(
        (appointment: IAppointment) => {
            setSelectedAppointment(appointment);
        },
        []
    );

    return (
        <div className="w-full">

            {selectedAppointment && (
                <ViewAppointmentModal
                    appointment={selectedAppointment}
                    onClose={() =>
                        setSelectedAppointment(null)
                    }
                />
            )}

            {showBooking && (
                <BookAppointmentModal
                    onClose={() => setShowBooking(false)}
                    onBooked={fetchAppointments}
                />
            )}

            <DashboardGreeting user={user}/>

            <div className="flex justify-between gap-10 py-8">

                <UpcomingAppointment
                    appointment={upcomingAppointment}
                    loading={delayedLoading}
                    error={error}
                    onBookAppointment={() => setShowBooking(true)}
                    onView={handleView}
                />

                <QuickActions
                    onBookAppointment={() => setShowBooking(true)}
                />

            </div>

            <h2 className="py-3 text-[24px] font-medium fontOutfit">
                Recent Activities
            </h2>

            <div className="border border-[#D7D7D7] rounded-xl p-4">
                <RecentActivities
                    activities={activities}
                />
            </div>

        </div>
    );
}