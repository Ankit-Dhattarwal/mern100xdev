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

// import { useEffect, useState } from "react";
// import axios from "axios";

// /// using the setInterval is not perfect but now is good if we not use the clearInterval()

// function useToods(n) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       });
//     }, n * 1000);

//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     });

//     /// cleanup logic
//     return () => {
//       clearInterval(value);
//     };
//   }, [n]);
//   return { todos, loading };
// }

// function App() {
//   const { todos, loading } = useToods();

//   if (loading) {
//     return <div>loading...</div>;
//   }

//   return (
//     <>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;

//////////--Browser Functionality hooks---//////////////////////

// import { useEffect, useState } from "react";

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setIsOnline(true);
//     });
//     window.addEventListener("offline", () => {
//       setIsOnline(false);
//     });
//   }, []);
//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline();
//   if (isOnline) {
//     return "You are online.";
//   }
//   return "You are offline, please check your connectivity";

//   // useEffect(() => {}, []);
//   // return (
//   //   <>
//   //     {todos.map((todo) => (
//   //       <Track todo={todo} />
//   //     ))}
//   //   </>
//   // );
// }

// export default App;

///////////////--Mouse hook--////////////////////////

// import { useEffect, useState } from "react";

// const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   );
// }

// export default App;

//////////////////----UseInterval ------------//////////////////////

// import { useEffect, useState } from "react";

// function useInterval(fn, timeout) {
//   useEffect(() => {
//     const int = setInterval(() => {
//       fn();
//     }, timeout);
//     /// clear the interval here
//     // return () => {
//     //   clearInterval(int);
//     // };
//   }, []);
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount((c) => c + 1);
//   }, 1000);
//   return <>Time is at {count}</>;
// }

// export default App;

////////////////----useDebounce----////////////////

import { useEffect, useState } from "react";

function useDebounce(val, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(val);
  useEffect(() => {
    let timoutNumber = setTimeout(() => {
      setDebouncedValue(val);
    }, timeout);

    return () => {
      clearTimeout(timoutNumber);
    };
  }, [val]);
  return debouncedValue;
}

function App() {
  const [val, setValue] = useState(0);
  const debouncedValue = useDebounce(val, 500);

  // Here can write logic of call api's by help useDebounce
  // IMP--
  /*
  useEffect( ()=> {
    fetch / axios 
  }, [debounceValue])
  */

  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default App;
