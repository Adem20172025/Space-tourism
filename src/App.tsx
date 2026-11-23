import { Navbar } from "./Space-tourism-components/Navbars";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Outlet />
    </main>
  );
}
