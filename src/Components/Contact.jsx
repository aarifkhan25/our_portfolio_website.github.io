import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import Navbar from './Navbar';
import Footer from './Footer';
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
     
      <section className='section-contact' >
<div className="container"  data-aos="fade-down"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine">
<h2 className="section-common-heading" id='skills'>Contact Us</h2>
<p className="section-common-subheading">Use  There Technology  in Our project</p>
</div>
<div className="container grid grid-two--cols" >
  
      <div className="contact-content"> 
        <form action="https://formspree.io/f/xeoqeqkb"
  method="POST">
          <div className="grid grid-two--cols mb-3"  data-aos="fade-left"
    data-aos-delay='800'>
            <div>
              <label htmlFor="username">UserName</label>
              <input type="text" name='username' id='username' required autoComplete='off' placeholder='Enter Your Name' />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' required autoComplete='off' placeholder='Enter Your email' />
            </div>

          </div>
          <div className="mb-3" data-aos="fade-right"
    data-aos-delay='1200'>
            <label htmlFor="subject">Subject</label>
            <input type="text" required id='subject' autoComplete='off' name='subject' placeholder='Your Main Title'/>
          </div>

          <div className="mb-3"  data-aos="fade-right"
    data-aos-delay='1200'>
            <label htmlFor="message">message</label>
            <textarea type="text" required autoComplete='off' rows='5' cols='' id='message' name='message' placeholder='Your Message'></textarea>
          </div>

          <button type='submit' className='btn bt-submit'  data-aos="fade-down"
    data-aos-delay='1500'>Send message</button>
        </form>
      </div>
      <div className='contact-map'  data-aos="flip-down"
    data-aos-delay='1000'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14800.529242120914!2d76.6855619374221!3d21.9678844788275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7e46503cf5e9d%3A0x207f5f1a9f0ef64d!2sNew%20Harsud%2C%20Harsud%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1729931771452!5m2!1sen!2sin" 
              
              style={{ border: 0 }} 
              width='100%'
              height='300'
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
  
  </div>

</section>
{/* <Footer/> */}
    </div>
  )
}

export default Contact;
