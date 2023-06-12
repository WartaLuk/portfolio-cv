import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Common/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Skills from "./components/Pages/Skills/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
