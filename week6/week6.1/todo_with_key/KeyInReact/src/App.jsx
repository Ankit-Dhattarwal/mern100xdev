// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// let globalValue = 4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "go to gym today",
//     },
//     {
//       id: 2,
//       title: "go to collge",
//       description: "go to collge today",
//     },
//     {
//       id: 3,
//       title: "go to class",
//       description: "go to gym class",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: globalValue++,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map((todo) => (
//         <Todo
//           key={todo.id}
//           title={todo.title}
//           description={todo.description}
//         ></Todo>
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h5>{description}</h5>
//     </div>
//   );
// }

// export default App;

/// What is wrapper

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent />} />
//     </div>
//   );
// }

// function CardWrapper(props) {
//   // Create a div which has a border (hint: the way to create a border is border: "2px solid black")
//   // and inside the div , renders the props

//   return (
//     <div style={{ border: "2px solid black" }}>{props.innerComponent}</div>
//   );
// }

// function TextComponent() {
//   return <div>Hii ankit dhattarwal</div>;
// }

// export default App;

// real use wrapper in real world the syntax is:
// this below is right way to write wrapper

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <CardWrapper>hi there</CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  // Create a div which has a border (hint: the way to create a border is border: "2px solid black")
  // and inside the div , renders the props

  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default App;
