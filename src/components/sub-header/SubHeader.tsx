import React from "react";
import { RiTimer2Line } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { Button } from "../button/Button";
import { Divider } from "../divider/Divider";

interface SubHeaderProps {
  user: {
    avatarUrl: string;
    name: string;
    location: string;
  };
  classStartIn: number;
  amount: number;
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  user: { avatarUrl, name, location },
  classStartIn,
  amount,
}) => {
  return (
    <div className="p-8 max-sm:p-4 mb-12 max-sm:mb-7 bg-orange-light border-[0.5px] rounded-3xl shadow-3xl w-[100%] flex flex-row justify-between items-center">
      <div className="font-poppins not-italic font-medium">
        <span className="leading-6 text-gray-dark text-base">
          Sua aula começa em
        </span>
        <div className="flex justify-start items-center">
          <RiTimer2Line className="text-gray-medium w-4 h-4 mr-3" />
          <span className="text-gray-dark-medium text-xs leading-5">
            {`${classStartIn} min.`}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <Divider />
        <div className="flex items-center flex-row max-sm:hidden">
          <img className="w-12 h-12 mr-4" src={avatarUrl} alt="user" />
          <div className="bg-[#00D555] border-[1px] border-white rounded-full p-1 relative top-0 right-0 translate-y-[-20px] translate-x-[-30px]" />
          <div>
            <span className="text-gray-dark text-sm leading-6 font-medium">
              {name}
            </span>
            <div className="flex justify-start items-center">
              <TiLocation className="text-gray-medium w-4 h-4 mr-3" />
              <span className="text-gray-dark-medium text-xs leading-5 font-medium">
                {location}
              </span>
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col justify-center items-start font-poppins max-sm:hidden">
          <span className="text-gray-dark text-sm leading-6 font-medium">
            {`R$ ${amount}`}
          </span>
          <span className="text-gray-dark-medium text-xs leading-5 font-medium">
            Gastos deste mês
          </span>
        </div>
        <Divider />
        <Button color="bg-orange-dark" label="Ir para aula" />
      </div>
    </div>
  );
};
