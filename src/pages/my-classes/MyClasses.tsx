import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import userAvatar from "../../assets/images/mock_user.png";
import { MyClassesList } from "../../components/my-classes-list/MyClassesList";
import { NextClasses } from "../../components/next-classes/NextClasses";
import { SubHeader } from "../../components/sub-header/SubHeader";
import { Views } from "../../components/views/Views";
import { fetchMyClasses } from "../../reducers/my-classes/my-classes.actions";
import { selectClasses } from "../../reducers/my-classes/my-classes.selectors";
import { fetchSchedules } from "../../reducers/schedules/schedules.actions";
import { selectSchedules } from "../../reducers/schedules/schedules.selectors";

interface MyClassesProps {}

export const MyClasses: React.FC<MyClassesProps> = () => {
  const dispach = useAppDispatch();
  const classes = useSelector(selectClasses);
  const schedules = useSelector(selectSchedules);

  useEffect(() => {
    dispach(fetchMyClasses());
    dispach(fetchSchedules());
  }, [dispach]);

  return (
    <div
      data-testid="my-classes-page"
      className="grid grid-cols-12 h-[100%] gap-10 mt-12 max-sm:mt-8 max-sm:gap-0"
    >
      <div className="col-span-9 max-sm:col-span-12">
        <SubHeader
          classStartIn={15}
          amount={1000}
          user={{
            avatarUrl: userAvatar,
            location: "Curitiba, PR",
            name: "Annette Black",
          }}
        />
        <div className="max-sm:hidden">
          <MyClassesList classes={classes} />
        </div>
      </div>
      <div className="col-span-3 max-sm:col-span-12 [&>*:not(:last-child)]:mb-[10px] max-sm:[&>*:not(:last-child)]:mb-8">
        <Views />
        <NextClasses schedules={schedules} />
        <div className="sm:hidden">
          <MyClassesList classes={classes} />
        </div>
      </div>
    </div>
  );
};
