import { axiosMockAdapterInstance as mock } from "../src/lib/axios";
import { MyClass } from "../src/models/my-class.module";

mock.onGet("/my-classes").reply(() => {
  const myClasses: MyClass[] = [
    {
      title: "Introdução a lógica da programação",
      views: 1000,
      date: "2023-02-23",
      category: "Lógica",
    },
    {
      title: "Condicionais",
      views: 1000,
      date: "2023-02-23",
      category: "Lógica",
    },
    {
      title: "Switch cases",
      views: 1000,
      date: "2023-02-23",
      category: "Lógica",
    },
    {
      title: "Laços",
      views: 1000,
      date: "2023-02-23",
      category: "Lógica",
    },
  ];

  return [200, myClasses];
});

