import { axiosMockAdapterInstance as mock } from "../src/lib/axios";
import { Schedule } from "../src/models/schedule.module";

mock.onGet("/schedules/today").reply(() => {
  const schedules: Schedule[] = [
    {
      time: "08:00",
      title: "Introdução a Lógica da programação"
    },
    {
      time: "09:00",
      title: "Condicionais"
    },
    {
      time: "11:00",
      title: "Do While"
    },
    {
      time: "11:00",
      title: "Foreach"
    }
  ];

  return [200, schedules];
});
