import "./servicios.css";
import { FaBuilding, FaTools, FaHome, FaCity, FaDraftingCompass, FaLayerGroup } from "react-icons/fa";

const servicios = [
  {
    icon: <FaTools />,
    title: "Refacción y Remodelación",
    desc: "Intervención y modernización de estructuras existentes con enfoque en calidad.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Ampliaciones",
    desc: "Expansión de superficies integradas a construcciones ya existentes.",
  },
  {
    icon: <FaCity />,
    title: "Obra Pública y Privada",
    desc: "Hospitales, polideportivos y espacios urbanos de gran escala.",
  },
  {
    icon: <FaHome />,
    title: "Construcción de Viviendas",
    desc: "Casas particulares y desarrollos desde 100m².",
  },
  {
    icon: <FaBuilding />,
    title: "Desarrollos Residenciales",
    desc: "Triplex, dúplex y complejos habitacionales.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Ejecución de Proyectos",
    desc: "Construcción a partir de planos con cumplimiento de tiempos y calidad.",
  },
];

export default function Servicios() {
  return (
    <section className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div className="card" key={index}>
            <div className="icon">{servicio.icon}</div>
            <h3>{servicio.title}</h3>
            <p>{servicio.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}