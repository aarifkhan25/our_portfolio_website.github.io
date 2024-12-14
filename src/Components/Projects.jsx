import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import { RiContactsLine } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
import { FaCartShopping } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [projectlist1,setProjectList1]=useState([{
    id:1,
    project_Name:'Our Portfolio Website',
    icon:<RiContactsLine></RiContactsLine>,
    discription:'collection of our best work, showcasing our skills and creativity. We focus on delivering high-quality projects that meet your needs. Take a look around and see what we can do!',
    secdiscription:"Using React.js and React Icons"
  },
  {
  id:2,
    project_Name:'E-Commerce Website',
    icon:<FaCartShopping></FaCartShopping>,
    discription:'	A website that allows people to buy and sell physical goods,services,and digital products over the internet rather than at brick-and mortar location.',
    secdiscription:'Using-React.js,Node.js,Express.js,MongoDB'
  },
  
  {
    id:3,
    project_Name:'Mini Projects',
    icon:<FaCalculator></FaCalculator>,
    discription:'Calculator, Random OTP generator and OTP validation' ,secdiscription:'Using React.js'
  }
  ])
  
  const [projectlist2,setProjectList2]=useState([
    {
      id:4,
      project_Name:'Youtube Clone',
      icon: <TfiYoutube/>,
      discription:'collection of our best work, showcasing our skills and creativity. We focus on delivering high-quality projects that meet your needs. Take a look around and see what we can do!',
      secdiscription:"Using React.js and Rapid API"
    },
    {
      id:5,
      project_Name:'Basic HTML & CSS compiler',
      icon:<FaLaptopCode></FaLaptopCode>,
      discription:'	Provides a space for beginners to write HTML and Inline CSS code. It displays a real-time preview of the page as the code is being written and allows beginners to immediately see the effects of their code changes.',
      secdiscription:'Using-HTML,CSS,JavaScript'
    },
    {
      id:6,
      project_Name:'project',
      icon:<FaLaptopCode></FaLaptopCode>,
      discription:'	Provides a space for beginners to write HTML and Inline CSS code. It displays a real-time preview of the page as the code is being written and allows beginners to immediately see the effects of their code changes.',
      secdiscription:'Using-HTML,CSS,JavaScript'
    },
  
  ])
  return (
    <div>
     <section className='section-why-choose' >
<div className="container"  data-aos="fade-down"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine" >
<h2 className="section-common-heading" id='project' > Explore our Projects</h2>
<p className="section-common-subheading"></p>
</div>
<div className='container grid grid-three--cols'>
  <div className="choose-left--div text-align--right">
   {
    projectlist1.map((item,index)=>{
      return  <div className='why--choose-div' data-aos="fade-left"
      data-aos-delay="1000"
   >
      <p className="common-text--highlight">{item.id}</p>
      <h3 className='section-common--title'>{item.project_Name}</h3>
<p className='section-common--subheading' > {item.discription} <br /> *{item.secdiscription}
</p>
    </div>
    })
   }
   
  </div>

{/* center part of image */}
<div className="choose-center--div" data-aos="fade-up" data-aos-delay='600' >
  <figure>
    <img src="./images/mobile2.jpg" alt="our image" />
  </figure>
</div>
{/* right side content */}
<div className="choose-right--div text-align--left">
   {
    projectlist2.map((item,index)=>{
      return  <div className='why--choose-div' key={index} data-aos="fade-right"
      data-aos-delay="1000"
       >
      <p className="common-text--highlight">{item.id}</p>
      <h3 className='section-common--title'>{item.project_Name}</h3>
<p className='section-common--subheading'>{item.discription} <br />{item.secdiscription}

</p>
    </div>
    })
   }
    
  </div>

</div>

     </section>
    </div>
  )
}

export default Projects
