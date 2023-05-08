import { useState } from "react";
// import sgMail from "@sendgrid/mail";
import axios from "axios";

// sgMail.setApiKey(import.meta.env.PUBLIC_SENDGRID_API_KEY);

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
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

    const msg = {
      to: email, // correo electrónico del destinatario
      from: "gustavochura94@gmail.com", // correo electrónico del remitente
      subject: subject, // asunto del correo electrónico
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `, // contenido del correo electrónico
    };

    try {
      await axios.post('https://api.sendgrid.com/v3/mail/send', msg, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.PUBLIC_SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors([]);
    } catch (error) {
      console.error(error);
      setErrors(["Failed to send email. Please try again later."]);
    }
  };

  return (
    <div data-aos-delay="600" className="col-lg-7 contact-input">
      <div className="contact-form-wrapper">
        {success && <p>Email sent successfully!</p>}
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
