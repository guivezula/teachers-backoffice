import React from "react";

interface MyClassesProps {}

export const MyClasses: React.FC<MyClassesProps> = () => {
  return (
    <div className="grid grid-cols-12 h-[100%] gap-10 mt-12">
      <div className="col-span-9">My classes</div>
      <div className="col-span-3"></div>
    </div>
  );
};
