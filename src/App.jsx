import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Contacto from "./components/contacto/contacto";


function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}




function App() {
  return (
    <Router>
      <ScrollToSection /> {/* 👈 CLAVE */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer /> {/* <--- VA AQUÍ, al final de todo */}
    </Router>
  );
}

export default App;