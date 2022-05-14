import "./App.scss";
import React, { Suspense } from "react";
import Header from "./Components/MainHeader/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

import Home from "./pages/Home";

const Crew = React.lazy(() => import("./pages/Crew"));
const Destination = React.lazy(() => import("./pages/Destination"));
const Technology = React.lazy(() => import("./pages/Technology"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense
        fallback={
          <div className="loader">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
