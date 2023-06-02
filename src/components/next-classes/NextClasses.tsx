import React, { useMemo } from "react";
import { Schedule } from "../../models/schedule.models";
import { Card } from "../card/Card";
import { ScheduleItem } from "../schedule-item/ScheduleItem";

interface NextClassesProps {
  schedules: Schedule[];
}

export const NextClasses: React.FC<NextClassesProps> = ({ schedules }) => {
  const memoList = useMemo(
    () =>
      schedules.map((schedule, key) => (
        <ScheduleItem key={key} schedule={schedule} />
      )),
    [schedules]
  );
  return (
    <Card
      title="Suas próximas aulas virtuais"
      buttonLabel="Visualizar toda Agenda"
    >
      <>
        <h2 className="font-poppins no-italic font-semibold text-base leading-5 text-back mb-8">
          Hoje
        </h2>
        <div>{memoList}</div>
      </>
    </Card>
  );
};
