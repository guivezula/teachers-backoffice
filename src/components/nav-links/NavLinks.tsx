import React from "react";

interface NavLinksProps {
  links: string[];
  activeLink?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ links, activeLink }) => {
  const isActive = (link: string) => link === activeLink;
  return (
    <div
      data-testid="link-section-list"
      className="flex flex-row justify-start items-center font-poppins col-start-2 col-end-5 max-sm:hidden"
    >
      {links.map((link, key) => (
        <a
          href="/"
          key={key}
          data-testid={`link-item-${key}`}
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
