import React from "react";

interface ButtonProps {
  label: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  color = "bg-blue-dark",
}) => {
  return (
    <button
      className={`${color} px-6 py-[14px] gap-2 rounded-xl border-0 font-poppins not-italic font-medium text-xs text-white leading-5`}
    >
      {label}
    </button>
  );
};
