import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import userAvatar from "../../assets/images/mock_user.png";
import { MyClassesList } from "../../components/my-classes-list/MyClassesList";
import { NextClasses } from "../../components/next-classes/NextClasses";
import { SubHeader } from "../../components/sub-header/SubHeader";
import { Views } from "../../components/views/Views";
import { fetchMyClasses } from "../../reducers/my-classes/my-classes.actions";
import {
  selectClasses,
  selectViews,
} from "../../reducers/my-classes/my-classes.selectors";
import { fetchSchedules } from "../../reducers/schedules/schedules.actions";
import { selectSchedules } from "../../reducers/schedules/schedules.selectors";

interface MyClassesProps {}

export const MyClasses: React.FC<MyClassesProps> = () => {
  const dispach = useAppDispatch();
  const classes = useSelector(selectClasses);
  const schedules = useSelector(selectSchedules);
  const views = useSelector(selectViews);

  useEffect(() => {
    dispach(fetchMyClasses());
    dispach(fetchSchedules());
  }, [dispach]);

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
      <div className="col-span-3 [&>*:not(:last-child)]:mb-[10px]">
        <Views />
        <NextClasses schedules={schedules} />
      </div>
    </div>
  );
};
