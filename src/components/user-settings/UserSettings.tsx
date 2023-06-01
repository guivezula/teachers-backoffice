import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface UserSettingsProps {
  userName: string;
  userAvatar: string;
}

export const UserSettings: React.FC<UserSettingsProps> = ({
  userAvatar,
  userName,
}) => {
  return (
    <div className="flex justify-start items-center">
      <img className="w-12 h-12" src={userAvatar} alt="user" />
      <span className="text-gray-dark leading-6 text-sm not-italic font-poppins font-medium ml-4 mr-4">
        {userName}
      </span>
      <IoIosArrowDown className="text-gray-medium w-6 h-4" />
    </div>
  );
};
