import React, { useState,useEffect } from 'react'
import AOS from 'aos';

const Career = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const[list,setList]=useState([{
    id:1,
    name:"Education",
    icon:'/images/edu.png',
    discription:'Current pursuing B-tech Final Year from Shree Dadaji institute technology and Science Khandwa in Data Science Stream.'
  },{
    id:2,
    name:"Interships",
    icon:'/images/internship.png',
    discription:' Complete 6 Month Internship training from Ypsilon IT Solutions,Indore.'
  },
  {
    id:3,
    name:"Technical Skills",
    icon:'/images/techskills.png',
    discription:`Good experience web development using HTML,CSS,Java Script.`,
    secontDis:' framworks and Library like: Bootstrap, Tailwind CSS and React.js.'
  }
])
  return (
    <div>
       <section className='section-about' id='career'>
<div className="container" data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine" >
<h2 className="section-common-heading" > career objective</h2>
<p className="section-common-subheading">Aspiring to join a reputable organization to leverage my skills and ideas for personal growth and contribute <br /> effectively to the company’s success in a dynamic and collaborative environment.</p>
</div>

<div className="container grid grid-three--cols" data-aos="fade-up" data-aos-delay='600'>
  {
    list.map((item)=>{
      return <div className="about-div" key={item.id}>
    <div className="icon">
<img src={item.icon} alt="heeloo" />
<h3 className='section-common--title'>{item.name}</h3>
<p>{item.discription} <br />{item.secontDis}</p>
    </div>
  </div>
      
    })
  }
</div>
</section>
    </div>
  )
}

export default Career
