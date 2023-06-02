import { Schedule } from "../../models/schedule.models";

interface ScheduleItemProps {
  schedule: Schedule;
}

export const ScheduleItem: React.FC<ScheduleItemProps> = ({
  schedule: { time, title },
}) => {
  return (
    <div className="flex flex-row items-center mb-7 font-poppins not-italic text-base leading-5">
      <div className="font-bold min-w-[44px]">{time}</div>
      <div className="h-8 w-0 border-r-[3px] border-r-blue-medium mx-[14px]" />
      <div className="font-normal">{title}</div>
    </div>
  );
};
