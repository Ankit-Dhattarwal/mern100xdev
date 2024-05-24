import { atom, atomFamily, selectorFamily } from "recoil";
import { TODOS } from "../../todos";
import axios from "axios";

/// How to define the atom-Fmaily
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: ":todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        await new Promise((r) => setTimeout(r, 5000));
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});

////////----- How to define the atom
// const todosAtomFamily = function () {
//   return atom({});
// };
