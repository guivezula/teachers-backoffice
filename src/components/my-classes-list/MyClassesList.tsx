import React from "react";
import { MyClass } from "../../models/my-class.models";
import { Button } from "../button/Button";
import { ClassItem } from "../class-item/ClassItem";

interface MyClassesListProps {
  classes: MyClass[];
}
export const MyClassesList: React.FC<MyClassesListProps> = ({ classes }) => {
  return (
    <div className="p-8 bg-white border-[0.5px] border-gray-stroke rounded-3xl shadow-3xl mt-12">
      <h1 className="font-poppins no-italic font-semibold text-base leading-6 text-gray-dark mb-8">
        Minhas aulas já preparadas
      </h1>
      <div>
        {classes.map((myClass, key) => (
          <ClassItem key={key} myClass={myClass} />
        ))}
      </div>
      <Button label="Criar uma nova Aula" color="bg-blue-dark" expand={true} />
    </div>
  );
};
