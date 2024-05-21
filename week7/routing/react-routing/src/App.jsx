import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import React from "react";
import { Suspense } from "react";

const Dashboard = React.lazy(() => import("./component/Dashboard"));
const Landing = React.lazy(() => import("./component/Landing"));

// const Dashboard = React.lazy(() => import("./component/Dashboard"));

function App() {
  // const navigate = useNavigate(); /// This is not use here its show error and only use inside the <BrowserRouter/>

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          // window.location.href = "/";
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          // window.location.href = "/dashboard";  /// By this our page reload
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
}

export default App;
