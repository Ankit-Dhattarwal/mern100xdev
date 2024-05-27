// import { useEffect, useState } from "react";
// import "./App.css";
// import { FunctionEvents } from "./LifeCycleEvents/FunctionEvents";
// import { ClassCompEvent } from "./LifeCycleEvents/ClassComponentEvents";

// function App() {
//   const [render, setRender] = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setRender(false);
//   //   }, 1000);
//   // }, []);
//   useEffect(() => {
//     setInterval(() => {
//       setRender((r) => !r);
//     }, 10000);
//   }, []);
//   return (
//     <>
//       {render ? <FunctionEvents /> : <div></div>}
//       <ClassCompEvent />
//     </>
//   );
// }
// /// Function base component

// // function MyComponent() {
// //   const [count, setCount] = useState(0);

// //   const incrementCount = () => {
// //     setCount(count + 1);
// //   };

// //   return (
// //     <div>
// //       <p>{count}</p>
// //       <button onClick={incrementCount}>Increment</button>
// //     </div>
// //   );
// // }

// /// Class base component
// // class MyComponent extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { count: 0 };
// //   }

// //   incrementCount = () => {
// //     this.setState({ count: this.state.count + 1 });
// //   };

// //   render() {
// //     return (
// //       <div>
// //         <p>{this.state.count}</p>
// //         <button onClick={this.incrementCount}>Increment</button>
// //       </div>
// //     );
// //   }
// // }

// export default App;

/////////----Custom Hooks Data Fetching Hooks--//////////////////

import { useEffect, useState } from "react";
import axios from "axios";

/// using the setInterval is not perfect but now is good if we not use the clearInterval()

function useToods(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    /// cleanup logic
    return () => {
      clearInterval(value);
    };
  }, [n]);
  return { todos, loading };
}

function App() {
  const { todos, loading } = useToods();

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
