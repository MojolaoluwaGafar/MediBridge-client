import { CalendarCheck, RefreshCw, XCircle } from "lucide-react";
import type { Activity } from "../../../types/activity";

type Props = {
  activities: Activity[];
};

export default function RecentActivities({ activities }: Props) {
  if (activities.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center w-full text-center'>
            <p className='text-[20px] font-medium fontOutfit pb-2'>No recent activity yet</p>
            <p className='w-114.75 text-[#666666]'>Your hospital activity will appear here after you book an appointment, visit the hospital and receive updates from your care team</p>
        </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {activities.map((activity) => {
        const activityIcons = {
            confirmed: <CalendarCheck size={20} color="#605E5E" />,
            rescheduled: <RefreshCw size={20} color="#605E5E" />,
            cancelled: <XCircle size={20} color="#605E5E" />,
        };

        const formattedTime = new Date(activity.timestamp).toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          month: "short",
          day: "numeric",
        });

        return (
          <div key={`${activity.timestamp}-${activity.type}`} className="flex items-center gap-3 pb-2">
            <span className="bg-[#EBEBEB] h-12.5 w-12.5 flex items-center justify-center rounded-xl">
              {activityIcons[activity.type]}
            </span>
            <div>
                <h1 className="fontOutfit font-medium text-[20px]">Appointment {activity.type}</h1>
                <div className="flex flex-col">
              <p className="fontOutfit text-[16px] font-light text-[#605E5E]">{activity.message} {formattedTime}</p>            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
