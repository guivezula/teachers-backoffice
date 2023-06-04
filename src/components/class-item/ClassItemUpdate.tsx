import { AiOutlineCheck } from "react-icons/ai";
interface UpdateProps {
  smHidden?: boolean;
}

export const ClassItemUpdate: React.FC<UpdateProps> = ({
  smHidden = false,
}) => {
  return (
    <div
      className={`${
        smHidden ? "max-sm:hidden" : "sm:hidden"
      } col-span-1 font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center`}
    >
      <AiOutlineCheck className="w-5 h-4 mr-3" />
      Editar
    </div>
  );
};
