import { RxEyeClosed } from "react-icons/rx";

interface ViewProps {
  smHidden?: boolean;
  views: number;
}

export const ClassItemView: React.FC<ViewProps> = ({ views, smHidden }) => (
  <div
    data-testid="view-item"
    className={`col-span-1 font-roboto not-italic font-normal text-[13px] leading-[21px] text-gray-dark-light flex items-center ${
      smHidden ? "max-sm:hidden" : "sm:hidden"
    }`}
  >
    <RxEyeClosed className="text-black w-4 h-4 mr-2" />
    {views}
  </div>
);
