import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";

// layouts
import RootLayouts from "./Layouts/RootLayouts";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }
  const style = {
    darkModeBg: { backgroundColor: darkMode ? "black" : "white" },
  };

  return (
    <RouterProvider router={router} onClick={handleClick} darkMode={darkMode} />
  );
}
