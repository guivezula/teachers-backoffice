import React from "react";
import { DateUtils } from "./Date.utils";

interface DateProps {
  date: string;
  smHidden?: boolean;
}

export const Date: React.FC<DateProps> = ({ date, smHidden = false }) => {
  return (
    <div
      className={`${
        smHidden ? "max-sm:hidden" : "sm:hidden"
      } col-span-1 font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center`}
    >
      {DateUtils.formatedDate(date)}
    </div>
  );
};
