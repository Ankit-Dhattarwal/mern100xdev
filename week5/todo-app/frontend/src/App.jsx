import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import "./App.css";
import { Todos } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  /// this is not a right way to do like this to fetch the data here.. else useEffect hook
  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });
  return (
    <>
      <div>
        <CreateTodo />
        <Todos
          todos={[
            {
              title: "ankit",
              description: "dhattarwal",
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
