import React from "react";

interface NavLinksProps {
  links: string[];
  activeLink?: string;
  onSelect?: (link: string) => void;
}

export const NavLink: React.FC<NavLinksProps> = ({
  links,
  activeLink,
  onSelect,
}) => {
  const isActive = (link: string) => link === activeLink;
  return (
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
  );
};
