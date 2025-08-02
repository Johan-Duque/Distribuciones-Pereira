import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Home } from "./Pages";
import { ScrollToTop, Loading } from "./Components";
import App from "./App";

const About = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Products"));
const Contact = lazy(() => import("./Pages/Contact"));

function AppRouter() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/inicio" replace />} />
          <Route path="inicio" element={<Home />} />
          <Route
            path="sobre_nosotros"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="productos"
            element={
              <Suspense fallback={<Loading />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="contacto"
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export { AppRouter };
