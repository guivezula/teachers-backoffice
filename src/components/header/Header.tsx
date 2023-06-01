import * as React from "react";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/mock_user.png";

interface HeaderProps {
  links: string[];
  activeLink?: string;
}

export const Header: React.FC<HeaderProps> = ({ links, activeLink }) => {
  const isActive = (link: string) => link === activeLink;

  return (
    <div className="w-[100%] border-[0.5px] border-gray-stroke bg-white rounded-3xl shadow-3xl p-8 flex justify-between">
      <div className="flex justify-start items-center">
        <img className="w-32 h-12" src={logo} alt="logo" />
        <div className="h-8 w-0 border-[0.5px] border-r-gray-light mr-[30.5px] ml-[30.5px]" />
        <div className="flex flex-row justify-start items-center font-poppins col-start-2 col-end-5">
          {links.map((link, key) => (
            <a
              href="/"
              key={key}
              className={`${
                isActive(link) ? "text-blue-dark" : "text-gray-medium"
              } font-medium leading-6 not-italic text-sm mr-12`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-center">
          <IoIosNotificationsOutline className="w-5 h-6 text-gray-medium" />
        </div>
        <div className="flex items-center">
          <div className="h-8 w-0 border-[0.5px] border-r-gray-light mr-[30.5px] ml-[30.5px]" />
        </div>
        <div className="flex justify-start items-center">
          <img className="w-12 h-12" src={user} alt="user" />
          <span className="text-gray-dark leading-6 text-sm not-italic font-poppins font-medium ml-4 mr-4">
            Annette Black
          </span>
          <IoIosArrowDown className="text-gray-medium w-6 h-4" />
        </div>
      </div>
    </div>
  );
};
