import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contacto.css";

const Contacto = () => {
  const form = useRef();
  const [estado, setEstado] = useState("");
  const [archivo, setArchivo] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setArchivo(e.target.files[0]);
    }
  };

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rqy5k9l",
      "template_1ic5gd9",
      form.current,
      "ArkkobcWLLSOz2BFn"
    )
    .then(() => {
      setEstado("success");
      form.current.reset();
      setArchivo(null);
      setTimeout(() => setEstado(""), 3000);
    })
    .catch(() => {
      setEstado("error");
      setTimeout(() => setEstado(""), 3000);
    });
  };

  return (
    <section className="form-container">
      <h2 className="form-title">Solicitá tu presupuesto</h2>
      <p className="form-subtitle">Completá los detalles de tu obra y te contactaremos a la brevedad.</p>
      <p className="form-subtitle">Trabajamos en Zona Norte y Oeste.</p>

      <form ref={form} onSubmit={enviarEmail} className="contact-form">
        
        <div className="input-group">
          <label>NOMBRE COMPLETO</label>
          <input type="text" name="user_name" placeholder="Ej: Juan Pérez" required />
        </div>

        <div className="input-group-row">
          <div className="input-group">
            <label>EMAIL</label>
            <input type="email" name="user_email" placeholder="correo@empresa.com" required />
          </div>
          <div className="input-group">
            <label>TELÉFONO</label>
            <input type="tel" name="user_phone" placeholder="11 5031 4600" />
          </div>
        </div>

        <div className="input-group-row">
          <div className="input-group">
            <label>METROS CUADRADOS (m²)</label>
            <input type="number" name="metros" placeholder="Ej: 150" required />
          </div>
          <div className="input-group">
            <label>ZONA DE LA OBRA</label>
            <input type="text" name="zona" placeholder="Ej: Palermo, CABA" required />
          </div>
        </div>

        <div className="input-group">
          <label>¿TIENE PLANOS?</label>
          <select name="planos" required>
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí, cuento con planos</option>
            <option value="No">No, necesito asesoramiento</option>
          </select>
        </div>


        <div className="input-group">
          <label>MENSAJE O REQUERIMIENTO</label>
          <textarea name="message" placeholder="Describa brevemente su necesidad..." rows="2" required></textarea>
        </div>

        <button type="submit" className="submit-button">
          ENVIAR SOLICITUD
        </button>
      </form>
      {estado === "success" && <div className="toast success">✅ Enviado con éxito</div>}
      {estado === "error" && <div className="toast error">❌ Error al enviar</div>}
    </section>
  );
};

export default Contacto;