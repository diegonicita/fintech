// Pages //
import Stepper from "./Pages/Stepper/Stepper";
// React Router DOM
import { Route, Routes, useLocation } from "react-router-dom";
// Framer Motion
import { AnimatePresence } from "framer-motion";
// import MotionDiv from "./components/MotionDiv";

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
              // <MotionDiv>
                <Stepper />
              // </MotionDiv>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
