import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Products, Contact } from "./Pages";
import { ScrollToTop } from "./Components";
import App from "./App";

function AppRouter() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/inicio" replace />} />
          <Route path="inicio" element={<Home />} />
          <Route path="sobre_nosotros" element={<About />} />
          <Route path="productos" element={<Products />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export { AppRouter };
