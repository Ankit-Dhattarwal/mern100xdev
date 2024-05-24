import { atom, atomFamily, selector } from "recoil";
import { TODOS } from "../../todos";

/// How to define the atom-Fmaily
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});

////////----- How to define the atom
// const todosAtomFamily = function () {
//   return atom({});
// };
