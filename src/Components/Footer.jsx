import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { MdAttachEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
const Footer = () => {
  return (
    <div>
        
     
     <footer class="footer" >
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
    <li class="social-icon__item"><a  target='blank' class="social-icon__link" href="https://www.linkedin.com/in/aarif-khan-046619270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin name="logo-linkedin"></FaLinkedin>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" target='blank' href="https://github.com/aarifkhan25">
          <VscGithub name="logo-github"></VscGithub>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link"  target='blank' href="mailto:aarif69khan@gmail.com">
          <MdAttachEmail name="logo-email"></MdAttachEmail>
        </a></li>
      
      
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#home">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#career">Career Objective</a></li>
      <li class="menu__item"><a class="menu__link" href="#project">Projects</a></li>
      <li class="menu__item"><a class="menu__link" href="#skills">Skills</a></li>
      <li class="menu__item"><a class="menu__link" href="#home">Contact Us</a></li>

    </ul>
    <p>Address:Indore |+91 78692 62239 </p>
  </footer>
     
    </div>
  )
}

export default Footer
