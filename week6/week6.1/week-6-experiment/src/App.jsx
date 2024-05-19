import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
// import { MyHeader } from "./component/Header";

// /// here this method is wrong to update and all items are re-rendering
// function App() {
//   const [title, setTitle] = useState("My name is Ankit");

//   function titleUpdateHandler() {
//     setTitle("my name is " + Math.random());
//   }
//   return (
//     // React Returns
//     <>
//       <button onClick={titleUpdateHandler}>Update the title</button>
//       <MyHeader title={title}></MyHeader>
//       <MyHeader title="Amit Dhattarwal"></MyHeader>
//     </>
//   );
// }

// export default App;

// // How to minimize the re-rendering on the above code
// //  No. 1 solution is push state down

// function App() {
//   return (
//     // React Returns
//     <>
//       <HeaderWithButton />
//       <MyHeader title="Amit Dhattarwal"></MyHeader>
//       <MyHeader title="Amit Dhattarwal"></MyHeader>
//       <MyHeader title="Amit Dhattarwal"></MyHeader>
//     </>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My name is Ankit");

//   function titleUpdateHandler() {
//     setTitle("my name is " + Math.random());
//   }
//   return (
//     <div>
//       <button onClick={titleUpdateHandler}>Update the title</button>
//       <MyHeader title={title}></MyHeader>
//     </div>
//   );
// }

// function MyHeader({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

/// No.2 is use the React.Memo

function App() {
  const [title, setTitle] = useState("My name is Ankit");

  function titleUpdateHandler() {
    setTitle("my name is " + Math.random());
  }
  return (
    // React Returns
    <div>
      <button onClick={titleUpdateHandler}>Update the title</button>
      <MyHeader title={title}></MyHeader>
      <MyHeader title="Amit Dhattarwal"></MyHeader>
      <MyHeader title="Amit Dhattarwal"></MyHeader>
      <MyHeader title="Amit Dhattarwal"></MyHeader>
      <MyHeader title="Amit Dhattarwal"></MyHeader>
      <MyHeader title="Amit Dhattarwal"></MyHeader>
      <MyHeader title="Amit Dhattarwal"></MyHeader>
      <MyHeader title="Amit Dhattarwal"></MyHeader>
    </div>
  );
}

const MyHeader = React.memo(function MyHeader({ title }) {
  return <div>{title}</div>;
});

export default App;
