import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/mock_user.png";
import { Divider } from "../divider/Divider";
import { NavLink } from "../nav-links/NavLinks";
import { UserSettings } from "../user-settings/UserSettings";
import { HeaderUtils } from "./header.utils";

export const Header: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | undefined>();

  useEffect(() => {
    const link = HeaderUtils.getLink(location.pathname);
    setActiveLink(link);
  }, [location.pathname]);

  return (
    <div className="w-[100%] border-[0.5px] border-gray-stroke bg-white rounded-3xl shadow-3xl p-8 flex justify-between">
      <div className="flex justify-start items-center">
        <img className="w-32 h-12" src={logo} alt="logo" />
        <Divider />
        <NavLink activeLink={activeLink} links={HeaderUtils.getAllLinks()} />
      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-center">
          <IoIosNotificationsOutline className="w-5 h-6 text-gray-medium" />
        </div>
        <div className="flex items-center">
          <Divider />
        </div>
        <UserSettings userAvatar={user} userName="Annette Black" />
      </div>
    </div>
  );
};
