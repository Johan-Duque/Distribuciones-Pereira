import { Outlet } from "react-router-dom";
import { Menu, Footer } from "./Components";

function App() {
  return (
    <>
      <Menu />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
