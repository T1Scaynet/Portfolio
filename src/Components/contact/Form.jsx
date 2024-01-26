import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];

    if (name.trim() === "") {
      errors.push("Por favor, escriba su nombre.");
    }
    if (email.trim() === "") {
      errors.push("Por favor, introduzca su dirección de correo electrónico.");
    }
    if (phone.trim() === "") {
      errors.push("Por favor, introduzca su número de teléfono.");
    }
    if (subject.trim() === "") {
      errors.push("Por favor ingrese un asunto.");
    }
    if (message.trim() === "") {
      errors.push("Por favor ingrese un mensaje.");
    }

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("subject", subject);
    formData.append("message", message);


    try {
      await axios.post(import.meta.env.PUBLIC_FORMSPREE_API_KEY, formData);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubject("");
      setErrors([]);
      toast.success('Correo electrónico enviado con éxito!')
    } catch (error) {
      console.error(error);
      toast.error('No se pudo enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.')
    }
  };

  return (
    <div data-aos-delay="600" className="col-lg-7 contact-input">
      <div className="contact-form-wrapper">
        <Toaster/>
        {errors.length > 0 && (
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <div className="introduce">
          <form className="rnt-contact-form row" onSubmit={handleSubmit}>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="contact-name">Su Nombre</label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="contact-phone">Número de teléfono</label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  className="form-control form-control-sm"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input className="form-control form-control-sm" type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)} />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="contact-message">TU MENSAJE</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>

            <div className="col-lg-12">
              <button
                // type="submit"
                className="rn-btn"
              >
                <span>ENVIAR MENSAJE</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
