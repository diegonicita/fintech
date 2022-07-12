// Pages //
import StepperUnico from "./Pages/Stepper/Stepper";
import Home from "./Pages/Home/Home";
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
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
