// Shared category registry for project filtering + badges.
// Add a new category here, then reference its key from a project's
// `category` field in the projects array.
export const PROJECT_CATEGORIES = {
  client: {
    label: { en: "Client Work", pt: "Trabalho para Cliente" },
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  personal: {
    label: { en: "Personal Project", pt: "Projeto Pessoal" },
    className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  opensource: {
    label: { en: "Open Source", pt: "Código Aberto" },
    className: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  academic: {
    label: { en: "Academic Project", pt: "Projeto Acadêmico" },
    className: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
};
