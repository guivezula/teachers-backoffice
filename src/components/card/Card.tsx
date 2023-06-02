import { FC } from "react";
import { Button } from "../button/Button";

interface CardProps {
  title: string;
  buttonLabel: string;
  children: JSX.Element;
}

export const Card: FC<CardProps> = ({ title, buttonLabel, children }) => {
  return (
    <div className="p-8 bg-white border-[0.5px] border-gray-stroke rounded-3xl shadow-3xl">
      <h1 className="font-poppins no-italic font-semibold text-base leading-6 text-gray-dark mb-8">
        {title}
      </h1>
      {children}
      <Button label={buttonLabel} color="bg-blue-dark" expand={true} />
    </div>
  );
};
