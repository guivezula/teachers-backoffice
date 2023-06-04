import React, { useMemo } from "react";
import { MyClass } from "../../models/my-class.models";
import { Card } from "../card/Card";
import { ClassItem } from "../class-item/ClassItem";

interface MyClassesListProps {
  classes: MyClass[];
}
export const MyClassesList: React.FC<MyClassesListProps> = ({ classes }) => {
  const memoList = useMemo(
    () =>
      classes.map((myClass, key) => <ClassItem key={key} myClass={myClass} />),
    [classes]
  );

  return (
    <Card buttonLabel="Criar uma nova Aula" title="Minhas aulas já preparadas">
      <div data-testid="list-section">{memoList}</div>
    </Card>
  );
};
