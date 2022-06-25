// Pages //
import Home from "./Pages/Home/Home";
import Stepper from "./Pages/Stepper/Stepper";
import CreateAccount1 from "./Pages/CreateAccount1/CreateAccount1";
import CreateAccount2 from "./Pages/CreateAccount2/CreateAccount2";
import CreateAccount3 from "./Pages/CreateAccount3/CreateAccount3";
import CreateAccount4 from "./Pages/CreateAccount4/CreateAccount4";
import CreateAccount5 from "./Pages/CreateAccount5/CreateAccount5";
import CreateAccount6 from "./Pages/CreateAccount6/CreateAccount6";
import CreateAccount7 from "./Pages/CreateAccount7/CreateAccount7";


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
            path="/stepper"
            element={
              <MotionDiv>
                <Stepper />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/createAccount1"
            element={
              <MotionDiv>
                <CreateAccount1 />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/createAccount2"
            element={
              <MotionDiv>
                <CreateAccount2 />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/createAccount3"
            element={
              <MotionDiv>
                <CreateAccount3 />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/createAccount4"
            element={
              <MotionDiv>
                <CreateAccount4 />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/createAccount5"
            element={
              <MotionDiv>
                <CreateAccount5 />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/createAccount6"
            element={
              <MotionDiv>
                <CreateAccount6 />
              </MotionDiv>
            }
          ></Route>
          <Route
            path="/createAccount7"
            element={
              <MotionDiv>
                <CreateAccount7 />
              </MotionDiv>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
