import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Alerts from "../Alert/Alert";

const Contact = () => {
  const [alert, setAlert] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_81t2y0k",
        "template_e7qldft",
        e.target,
        "gKHmbaPasEQfTpuzM"
      );

      setAlert(
        <Alerts severity="success" text="Message sent successfully" />
      );
      e.target.reset();
      return result;
    } catch (error) {
      setAlert(
        <Alerts
          severity="error"
          text="Some error occurred. Please try again later." />
      );
      console.log(error);
    }
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>
      <div className="c-left">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <input
            type="message"
            name="message"
            className="message"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="button-submit" />
          {alert}
        </form>
      </div>
    </div>
  );
};

export default Contact;
