// Pages //
import Home from "./Pages/Home/Home";
import Stepper1 from "./Pages/Stepper1/Stepper1";
import Stepper2 from "./Pages/Stepper2/Stepper2";
// React Router DOM
import { Route, Routes, useLocation } from "react-router-dom";
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
            path="/stepper1"
            element={
              <MotionDiv>
                <Stepper1 />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/stepper2"
            element={
              <MotionDiv>
                <Stepper2 />
              </MotionDiv>
            }
          ></Route>          
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
