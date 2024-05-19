import { useState } from "react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   // function changeValue() {
//   //   setCount(count + 1);
//   // }

//   return (
//     <>
//       {/* <div>
//         <button onClick={changeValue}>Counter {count}</button>
//       </div> */}
//       <div>
//         <CustomButton count={count} setCount={setCount}></CustomButton>
//       </div>
//     </>
//   );
// }

// //component
// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

// export default App;

//// React todo application
// todo
// {
//  todos: [{title: "todo1", description: "First todo", completed: false}]
// }

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Go to gym 10-12",
      completed: false,
    },
    {
      title: "Go to College",
      description: "Go to college 9-5",
      completed: true,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new todos",
        description: " new description of new todo",
      },
    ]);
  }
  return (
    <>
      <button onClick={addTodo}>Add new todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}

      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </>
  );
}
// todos app,
//  {
//  title,
//  description
//   }

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
