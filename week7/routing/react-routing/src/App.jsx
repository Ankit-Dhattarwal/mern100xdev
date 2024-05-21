// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import "./App.css";
// import React from "react";
// import { Suspense } from "react";

// const Dashboard = React.lazy(() => import("./component/Dashboard"));
// const Landing = React.lazy(() => import("./component/Landing"));

// // const Dashboard = React.lazy(() => import("./component/Dashboard"));

// function App() {
//   // const navigate = useNavigate(); /// This is not use here its show error and only use inside the <BrowserRouter/>

//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           // window.location.href = "/";
//           navigate("/");
//         }}
//       >
//         Landing Page
//       </button>
//       <button
//         onClick={() => {
//           // window.location.href = "/dashboard";  /// By this our page reload
//           navigate("/dashboard");
//         }}
//       >
//         Dashboard Page
//       </button>
//     </div>
//   );
// }

// export default App;

///------------prop drilling------------------------------

// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Count count={count} />
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Count({ count }) {
//   return <div>{count}</div>;
// }

// function Buttons({ count, setCount }) {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default App;

////------Props drilling so use Context API----------------

import "./App.css";
import { useContext, useState } from "react";
import { CountContext } from "./component/Context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <Countrender />
      <Buttons setCount={setCount} />
    </div>
  );
}

function Countrender() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
