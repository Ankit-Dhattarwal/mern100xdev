import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { todosAtomFamily } from "./components/atoms/atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <UpdateComponent />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={1} />
    </RecoilRoot>
  );
}
function UpdateComponent() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "why you update",
        description: " to see its create new todo or use same when id is same ",
      });
    }, 5000);
  }, []);
  return <div></div>;
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br></br>
    </>
  );
}

export default App;
