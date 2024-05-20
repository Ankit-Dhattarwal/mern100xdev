// import { useState } from "react";
// import axios from "axios";
// import "./App.css";
// import { useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos").then(function (res) {
//         setTodos(res.data.todos);
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }

// export default App;

/// Second exmaple of use Effect

// import { useState } from "react";
// import axios from "axios";
// import "./App.css";
// import { useEffect } from "react";

// function App() {
//   return (
//     <div>
//       <Todo id={3} />
//     </div>
//   );
// }
// function Todo({ id }) {
//   const [todos, setTodos] = useState({});

//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todos?id=" + id)
//       .then(function (res) {
//         setTodos(res.data.todos);
//       });
//   }, []);

// return (
//   <div>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
// );

//   // return (
//   //   <div>
//   //     <h1>{title}</h1>
//   //     <h4>{description}</h4>
//   //   </div>
//   // );
// }

// export default App;

/// One more example of useEffect

// import { useState } from "react";
// import axios from "axios";
// import "./App.css";
// import { useEffect } from "react";

// function App() {
//   const [selectedId, setSelectedId] = useState(1);
//   return (
//     <div>
//       <button
//         onClick={function () {
//           setSelectedId(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(3);
//         }}
//       >
//         3
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(4);
//         }}
//       >
//         4
//       </button>
//       <Todo id={selectedId} />
//     </div>
//   );
// }
// function Todo({ id }) {
//   const [todos, setTodos] = useState({});

//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`).then((res) => {
//       setTodos(res.data.todos);
//     });
//   }, [id]);

//   // return (
//   //   <div>
//   //     {todos.map((todo) => (
//   //       <Todo key={todo.id} title={todo.title} description={todo.description} />
//   //     ))}
//   //   </div>
//   // );

//   return (
//     <div>
//       id: {id}
//       <h1>{todos.title}</h1>
//       <h4>{todos.description}</h4>
//     </div>
//   );
// }

// export default App;

///----------------------------------USE MEMO HOOK------------------------------------------

import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find the sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is: {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
