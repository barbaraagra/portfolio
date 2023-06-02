import React from 'react';
import './contact.css';
import { FiMail } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0dit30e', 'template_x9eh9rb', form.current, 'glOL9755I5za3DuO6')

            .then(function (response) {
                console.log('SUCCESS! THE EMAIL WAS SENT!', response.status, response.text);
            }, function (error) {
                console.log('FAILED TO SEND. TRY AGAIN!', error);
            });

        e.target.reset()

    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <FiMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>babs.agra@gmail.com</h5>
                        <a href="mailto:babs.agra@gmail.com">Send an email</a>
                    </article>

                    <article className='contact__option'>
                        <BsPhone className='contact__option-icon' />
                        <h4>Phone</h4>
                        <h5>+351 912592474</h5>
                        <a href="https://wa.me/+351912592474" target='_blank' rel='noreferrer'>Send a message</a>
                    </article>
                </div>
                {/*  END OF CONTACT */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
