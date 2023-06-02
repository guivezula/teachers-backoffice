import moment from "moment";
import { FC } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RxEyeClosed } from "react-icons/rx";
import { MyClass } from "../../models/my-class.models";

interface ClassItemProps {
  myClass: MyClass;
}

export const ClassItem: FC<ClassItemProps> = ({
  myClass: { category, date, title, views },
}) => {
  const formatedDate = moment(date).format("DD/MM/yyyy");
  return (
    <div className="grid grid-cols-6 mb-8">
      <div className="col-span-3 flex flex-row items-center">
        <div className="font-poppins not-italic font-medium text-xs leading-5 text-white  rounded-[24px] bg-blue-dark mr-2 px-4 py-2">
          {category}
        </div>
        <div className="font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center">
          {title}
        </div>
      </div>
      <div className="col-span-1 font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center">
        <RxEyeClosed className="text-black w-4 h-4 mr-2" />
        {views}
      </div>
      <div className="col-span-1 font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center">
        {formatedDate}
      </div>
      <div className="col-span-1 font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center">
        <AiOutlineCheck className="w-5 h-4 mr-3" />
        Editar
      </div>
    </div>
  );
};
