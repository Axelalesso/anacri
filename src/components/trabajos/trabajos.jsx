import React, { useState, useRef } from "react";
import "./trabajos.css";

const trabajos = [
  {
    id: 1,
    titulo: "complejo de viviendas",
    imagenes: [
      "/img/foto1-anacri.jpeg",
      "/img/foto4-anacri.jpeg",
      "/img/foto5-anacri.jpeg",
      "/img/foto6-anacri.jpeg",
      "/img/foto2-anacri.jpeg"
    ]
  },
  {
    id: 2,
    titulo: "E.P.A Nº708",
    imagenes: [
      "/img/foto7-anacri.jpeg",
      "/img/foto8-anacri.jpeg",
      "/img/foto9-anacri.jpeg",
      "/img/foto10-anacri.jpeg",
      "/img/foto11-ancri.jpeg"
    ]
  },
  {
    id: 3,
    titulo: "E.P.A Nº14",
    imagenes: [
      "/img/foto12-anacri.jpeg",
      "/img/foto13-anacri.jpeg",
      "/img/foto14-anacri.jpeg",
      "/img/foto15-anacri.jpeg",
      "/img/foto16-anacri.jpeg",
      "/img/foto17-anacri.jpeg"
    ]
  }
];

const Trabajos = () => {
  const [lightbox, setLightbox] = useState(false);
  const [imagenes, setImagenes] = useState([]);
  const [index, setIndex] = useState(0);

  const touchStartX = useRef(0);

  const abrirGaleria = (imgs) => {
    setImagenes(imgs);
    setIndex(0);
    setLightbox(true);
  };

  const cerrarGaleria = () => setLightbox(false);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  // SWIPE (mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;

    if (delta > 50) siguiente();
    if (delta < -50) anterior();
  };

  return (
    <section className="trabajos">
      <h2 id="trabajos" >Trabajos Realizados</h2>
      <p className="subtitulo">Proyectos reales de nuestros clientes</p>

      <div className="grid">
        {trabajos.map((trabajo) => (
          <div
            className="card"
            key={trabajo.id}
            onClick={() => abrirGaleria(trabajo.imagenes)}
          >
            <img src={trabajo.imagenes[0]} alt={trabajo.titulo} />
            <div className="overlay">
              <h3>{trabajo.titulo}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={cerrarGaleria}>
          <div
            className="lightbox-content fade"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <span className="cerrar" onClick={cerrarGaleria}>
              ✕
            </span>

            <img
              src={imagenes[index]}
              alt="galeria"
              className="lightbox-img"
            />

            <div className="contador">
              {index + 1} / {imagenes.length}
            </div>

            <button className="prev" onClick={anterior}>
              ❮
            </button>

            <button className="next" onClick={siguiente}>
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trabajos;