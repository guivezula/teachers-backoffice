import { FC } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Button } from "../button/Button";

interface CardProps {
  title: string;
  buttonLabel?: string;
  children: JSX.Element;
  info?: boolean;
}

export const Card: FC<CardProps> = ({
  title,
  buttonLabel,
  children,
  info = false,
}) => {
  return (
    <div className="p-8 bg-white border-[0.5px] border-gray-stroke rounded-3xl shadow-3xl">
      <h1 className="font-poppins no-italic font-semibold text-base leading-6 text-gray-dark mb-8 flex justify-between items-center">
        {title}
        {info && <AiOutlineInfoCircle className="w-4 h-4 text-gray-medium" />}
      </h1>
      {children}
      {buttonLabel && (
        <Button label={buttonLabel} color="bg-blue-dark" expand={true} />
      )}
    </div>
  );
};
