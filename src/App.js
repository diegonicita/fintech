// Styles //
import "./App.css";
// Pages //
import Home from "./Pages/Home/Home";
import Page1 from "./Pages/Page1/Page1";
// React Router DOM
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// Framer Motion
import { AnimatePresence } from "framer-motion";
import MotionDiv from "./components/MotionDiv";

function App() {
  // Hooks //
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MotionDiv>
                <Home />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/page1"
            element={
              <MotionDiv>
                <Page1 />
              </MotionDiv>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
