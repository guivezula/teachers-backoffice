import { FC } from "react";
import { MyClass } from "../../models/my-class.models";

interface ClassItemProps {
  myClass: MyClass;
}

export const ClassItem: FC<ClassItemProps> = ({ myClass }) => {
  return <div>{JSON.stringify(myClass)}</div>;
};
