import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilStateLoadable,
} from "recoil";
import { todosAtomFamily } from "./components/atoms/atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      {/* <UpdateComponent /> */}
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
  const [currentTodo, setCurrentTodo] = useRecoilStateLoadable(
    todosAtomFamily(id)
  );

  if (currentTodo.state === "loading") {
    return <div>loading...</div>;
  } else if (currentTodo.state === "hasValue") {
    return (
      <>
        {currentTodo.contents.title}
        {currentTodo.contents.description}
        <br></br>
      </>
    );
  } else if (currentTodo.state === "hasError") {
    return (
      <div>
        <h3>Error while getting data from backend.</h3>
      </div>
    );
  }
}

export default App;
