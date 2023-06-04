import { FC } from "react";
import { MyClass } from "../../models/my-class.models";
import { ClassItemDate } from "./ClassItemDate";
import { ClassItemUpdate } from "./ClassItemUpdate";
import { ClassItemView } from "./ClassItemView";

interface ClassItemProps {
  myClass: MyClass;
}

export const ClassItem: FC<ClassItemProps> = ({
  myClass: { category, date, title, views },
}) => {
  return (
    <div className="grid grid-cols-6 mb-8">
      <div className="col-span-3 max-sm:col-span-6 flex flex-row items-center max-sm:items-start max-sm:flex-col-reverse  max-sm:gap-2 max-sm:[&>*:not(:first-child)]:mx-2">
        <div className="font-poppins not-italic font-medium text-xs leading-5 text-white  rounded-[24px] bg-blue-dark mr-2 px-4 py-2 max-sm:w-full max-sm:text-center">
          {category}
        </div>
        <ClassItemView views={views} />
        <div className="font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center max-sm:font-bold max-sm:text-[15px]">
          {title}
        </div>
        <div className="sm:hidden flex flex-row justify-start items-center gap-12 mb-3">
          <ClassItemDate date={date} />
          <ClassItemUpdate />
        </div>
      </div>
      <ClassItemView views={views} smHidden />
      <ClassItemDate date={date} smHidden />
      <ClassItemUpdate smHidden />
    </div>
  );
};
