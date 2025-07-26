import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Products, Form} from "./Pages";
import App from "./App";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/home" replace/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/form" element={<Form/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
