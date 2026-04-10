import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Contacto from "./components/contacto/contacto";

function App() {
  return (
    <Router>
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