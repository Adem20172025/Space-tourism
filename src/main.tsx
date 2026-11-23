import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Space-tourism-components/Home.tsx";
import { Destination } from "./Space-tourism-components/Destination.tsx";
import { Crew } from "./Space-tourism-components/Crew.tsx";
import { Technology } from "./Space-tourism-components/Technology.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
