import React from "react";
import { DateUtils } from "./date.utils";

interface DateProps {
  date: string;
  smHidden?: boolean;
}

export const ClassItemDate: React.FC<DateProps> = ({
  date,
  smHidden = false,
}) => {
  return (
    <div
      data-testid="date-item"
      className={`${
        smHidden ? "max-sm:hidden" : "sm:hidden"
      } col-span-1 font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center`}
    >
      {DateUtils.formatedDate(date)}
    </div>
  );
};
