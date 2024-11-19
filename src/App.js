import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Context from "./componnets/Context";
import Pageloading from "./componnets/Loading/Pageloading";
import { AnimatePresence, motion } from "framer-motion";
// import Nm from "./componnets/Nav&main/Nm";

// Lazy-loaded components
const Homemain = lazy(() => import("./componnets/Homemain"));
const Contacthomex = lazy(() => import("./componnets/Contact/Contacthomex"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      {/* AnimatePresence requires Routes to have a unique key, so use `location.pathname` */}
      <Routes location={location} key={location.pathname}>
        {/* Wrap Suspense around each individual route element */}
        <Route
          path="/"
          element={
            <Suspense fallback={<Pageloading />}>
              <PageWrappers>
                <Homemain />
              </PageWrappers>
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Pageloading />}>
              <PageWrapper>
                <Contacthomex />
              </PageWrapper>
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Animation wrapper for page transitions
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
function PageWrappers({ children }) {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Context>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </Context>
  );
}

export default App;
