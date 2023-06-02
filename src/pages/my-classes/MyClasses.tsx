import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import userAvatar from "../../assets/images/mock_user.png";
import { MyClassesList } from "../../components/my-classes-list/MyClassesList";
import { SubHeader } from "../../components/sub-header/SubHeader";
import { fetchMyClasses } from "../../reducers/my-classes/my-classes.actions";
import { selectClasses } from "../../reducers/my-classes/my-classes.selectors";

interface MyClassesProps {}

export const MyClasses: React.FC<MyClassesProps> = () => {
  const dispach = useAppDispatch();
  const classes = useSelector(selectClasses);

  useEffect(() => {
    dispach(fetchMyClasses());
  }, []);

  return (
    <div className="grid grid-cols-12 h-[100%] gap-10 mt-12">
      <div className="col-span-9">
        <SubHeader
          classStartIn={15}
          amount={1000}
          user={{
            avatarUrl: userAvatar,
            location: "Curitiba, PR",
            name: "Annette Black",
          }}
        />
        <MyClassesList classes={classes} />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};
