import React, { useState, useRef } from "react";
import "./Style.css";
import emailjs from "emailjs-com";
import { validateEmail } from "../../utils/Helper";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("A valid email address is required.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ojdnvzp",
        "template_pfny3q7",
        form.current,
        "sXBZoSzco5PV7qrW2"
      )

      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you. Your message has been sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormState({
      name: "",
      email: "",
      message: "",
    });
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact" id="Contact">
        <div className="c-text">
          <p>Have Questions?</p>
          <p style={{ color: "#b1aafe", marginTop: "0.5rem" }}>Contact Me</p>
        </div>
        <div className="c-form">
          <form>
            <input
              type="text"
              id="fName"
              className="c-user"
              placeholder="Your Full Name"
              required
              defaultValue={name}
              onBlur={handleChange}
            />
            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              className="c-user"
              placeholder="Your Email"
              required
              defaultValue={email}
              onBlur={handleChange}
            />
            <textarea
              id="textArea"
              rows="3"
              className="c-user"
              placeholder="Your Message"
              defaultValue={message}
              onBlur={handleChange}
              style={{ height: 80 }}
            ></textarea>

            <button type="submit">Send a Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
