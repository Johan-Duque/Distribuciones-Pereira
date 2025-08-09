import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Home } from "./Pages";
import { ScrollToTop, Loading } from "./Components";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { SeekerProvider } from "./Context/SeekerContext";

const About = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Products"));
const Contact = lazy(() => import("./Pages/Contact"));

function AppRouter() {
  const basename = import.meta.env.PROD ? "/Distribuciones-Pereira/" : "/";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/inicio" replace />} />
          <Route
            path="inicio"
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />
          <Route
            path="sobre_nosotros"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="productos"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <SeekerProvider>
                    <Products />
                  </SeekerProvider>
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="contacto"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
