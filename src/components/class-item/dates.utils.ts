const months = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const addZero = (n: number): string => {
  if (n <= 9) return `0${n}`;
  else return n.toFixed(0);
};

const diffDays = (date: Date) => {
  const today = new Date();
  const timeDiff = date.getTime() - today.getTime();
  return Math.abs(Math.ceil(timeDiff / (1000 * 3600 * 24)));
};

const getDate = (date: Date) => {
  return `${addZero(date.getDate())} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
};

const formatedDate = (originDate: string) => {
  const splited = originDate.split("-").map((n) => Number(n));
  const date = new Date(splited[0], splited[1] - 1, splited[2]);
  const diff = diffDays(date);

  if (diff === 0) {
    return "hoje";
  }

  if (diff === 1) {
    return "ontém";
  }

  if (diff > 1 && diff <= 3) {
    return `${diff} dias atrás`;
  }

  return getDate(date);
};

export const DateUtils = {
  formatedDate,
};
