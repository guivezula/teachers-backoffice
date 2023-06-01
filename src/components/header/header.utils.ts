enum HeaderLinkEnum {
  "/dashboard" = "Dashboard",
  "/minhas-aulas" = "Minhas Aulas",
  "/minha-agenda" = "Minha Agenda",
  "/alunos" = "Alunos",
  "/suporte" = "Suporte",
}

const getLink = (path: string) => {
  const indexOf = Object.keys(HeaderLinkEnum).indexOf(path);
  return Object.values(HeaderLinkEnum)[indexOf];
};

const getAllLinks = () => Object.values(HeaderLinkEnum);

export const HeaderUtils = {
  HeaderLinkEnum,
  getLink,
  getAllLinks,
};
