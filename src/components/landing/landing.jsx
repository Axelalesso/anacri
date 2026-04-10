import React from "react";
import { Link } from "react-router-dom";
import "./landing.css"
import HeroSlider from "../heroslider/heroslider";
import Servicios from "../servicios/servicios"
import Trabajos from "../trabajos/trabajos";
import { FaWhatsapp } from "react-icons/fa";


export default function Landing() {
  return (

    <div>
      <a
        href="https://wa.me/5491150947040"
        className="whatsapp-float"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
      <HeroSlider/>
      <div className="divider"></div>
      <Servicios/>
      <div className="divider"></div>
      <Trabajos/>
      <div className="divider"></div>
      <img className="logo-extendido" src="/img/logo-extendido.png" alt="anacri Construcciones Logo Extendido"/>
      <section className="sobre-nosotros" id="nosotros">
  <div className="contenedor-nosotros">
    <div className="texto-nosotros">
      <div>
        <h2 className="caja-nosotros">Nosotros</h2>
      </div>
      <p className="nosotros-text" >
          Somos una empresa constructora que en 2027 cumplirá 40 años de historia. 
          Con base de operaciones en San Fernando, provincia de Buenos Aires, 
          hemos ejecutado y entregado más de 200 obras a lo largo de nuestra historia. 
          Nos dedicamos tanto a la obra pública como a la obra privada, con la intención a corto plazo de expandirnos 
          ofreciendo nuestros servicios también dentro de industrias.
      </p>

      <p className="nosotros-text" >
        Nuestra expertise está en la refacción, remodelación o ampliación de edificios, hospitales, polideportivos,
        plazas y demás estructuras de 1.000 m2 y superiores. En los últimos 5 años hemos ejectuado de forma 
        satisfactoria también proyectos de construcción de viviendas y complejos de triplex, duplex y 2 ambientes. 
        En este caso, los proyectos que tomamos son de 100m2 y superiores. El 80% de nuestros proyectos realizados, 
        suceden en GBA norte: Tigre, San Fernando, San Isidro y Vicente López. El siguiente 15% suceden en GBA oeste: 
        Morón, Ituzaingó, Ramos Mejía y San Justo. El 80% de nuestros proyectos realizados, suceden en GBA norte: Tigre,
        San Fernando, San Isidro y Vicente López. El siguiente 15% suceden en GBA oeste: Morón, Ituzaingó, Ramos Mejía y 
        San Justo.
      </p>

      <p className="nosotros-text" >
        Ejecutamos nuestras obras resguardando la calidad y apego a los tiempos comprometidos de cada proyecto. 
        No somos estudio de arquitectura. No diseñamos, pero si ejecutamos bien lo que otros han diseñado bien. 
        Disfrutamos de poder ejecutar aquellos proyectos que desde el vamos fueron bien diseñados. 
        En ese sentido somos selectivos de aquellos nuevos proyectos que aceptamos y sugerimos mejoras en los planos en 
        caso de considerarlo necesario.
      </p>

      <p className="nosotros-text" >
        Estamos a disposición para vos. Tenés un proyecto de construcción/refacción que necesitás evaluar? 
        Contactanos y lo presupuestamos sin compromiso. No tenés el proyecto, pero si una idea de lo que querés hacer: 
        te ponemos en contacto con estudios de arquitectura de nivel. 
        
      </p>
      <Link to="/contacto" className="boton-nosotros">
          Contactate con nosotros
      </Link>
    </div>

    <div className="imagen-nosotros">
      <img src="/img/foto18-anacri.jpeg" alt="anacri empresa constructora" />
    </div>

  </div>
</section>
    </div>
    
  );
}