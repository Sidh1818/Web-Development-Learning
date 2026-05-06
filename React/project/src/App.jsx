import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Parent from "./pages/Parent";
import Counter1 from "./Counter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/counter" element={<Counter1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
