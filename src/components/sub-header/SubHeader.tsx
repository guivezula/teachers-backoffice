import React from "react";
import { RiTimer2Line } from "react-icons/ri";
import { Divider } from "../divider/Divider";

interface SubHeaderProps {
  user: {
    avatarUrl: string;
    name: string;
    location: string;
  };
  classStartIn: number;
  amount: number;
  onGoToClass?: () => void;
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  user: { avatarUrl, name, location },
  classStartIn,
  amount,
  onGoToClass,
}) => {
  return (
    <div className="p-8 bg-orange-light border-[0.5px] rounded-3xl shadow-3xl w-[100%] flex flex-row justify-between items-center">
      <div className="font-poppins not-italic font-medium">
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
      <div className="flex">
        <Divider />
        <div>avatar</div>
        <Divider />
        <div>amount</div>
        <Divider />
        <div>button</div>
      </div>
    </div>
  );
};
