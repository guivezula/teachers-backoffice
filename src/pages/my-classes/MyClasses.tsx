import React from "react";
import userAvatar from "../../assets/images/mock_user.png";
import { SubHeader } from "../../components/sub-header/SubHeader";

interface MyClassesProps {}

export const MyClasses: React.FC<MyClassesProps> = () => {
  return (
    <div className="grid grid-cols-12 h-[100%] gap-10 mt-12">
      <div className="col-span-9">
        <SubHeader
          classStartIn={15}
          user={{
            avatarUrl: userAvatar,
            location: "Curitiba, PR",
            name: "Annette Black",
          }}
        />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};
