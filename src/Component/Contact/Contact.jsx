import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81t2y0k', 'template_e7qldft', form.current, 'gKHmbaPasEQfTpuzM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>

                </div>
            </div>
            <div className="c-left">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email"/>
                    <input type="message" name="user" className="message" placeholder="Message"/>
                    <input type="submit" value="Send" className="button-submit"/>
                </form>
            </div>





        </div>


    )
}

export default Contact