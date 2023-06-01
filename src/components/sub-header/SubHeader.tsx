import React from "react";
import { RiTimer2Line } from "react-icons/ri";

interface SubHeaderProps {
  user: {
    avatarUrl: string;
    name: string;
    location: string;
  };
  classStartIn: number;
  onGoToClass?: () => void;
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  user: { avatarUrl, name, location },
  classStartIn,
  onGoToClass,
}) => {
  return (
    <div className="p-8 bg-orange-light border-[0.5px] rounded-3xl shadow-3xl w-[100%] grid grid-col-12">
      <div className="col-span-3 font-poppins not-italic font-medium">
        <span className="leading-[24px] text-gray-dark text-base">
          Sua aula começa em
        </span>
        <div className="flex justify-start items-center">
          <RiTimer2Line className="text-gray-medium w-4 h-4 mr-3" />
          <span className="text-gray-medium_dark text-xs leading-5">
            {`${classStartIn} min.`}
          </span>
        </div>
      </div>
      <div className="col-span-9"></div>
    </div>
  );
};
