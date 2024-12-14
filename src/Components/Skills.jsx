import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";



const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [skilllist,setSkillList]=useState([{
    id:1,
    project_Name:'HTML',
    icon:<IoCodeSlashSharp></IoCodeSlashSharp>,
    discription:'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.',
    
  },
  {
    id:2,
    project_Name:'CSS',
    icon:<FaCss3Alt></FaCss3Alt>,
    discription:'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language.',
    
  },{
    id:3,
    project_Name:'JavaScript',
    icon:<FaJsSquare></FaJsSquare>,
    discription:'Js is the most powerful web programming language used for making the websites interactive,helps us add features like animations and dynamic content to web pages.',
    
  },{
    id:4,
    project_Name:'React.js',
    icon:<FaReact></FaReact>,
    discription:'React.js is a free and open-source front-end JavaScript library for building user interfaces based on components.it can be used to develop single-page ,mobile and desktop applications',
    
  },{
    id:5,
    project_Name:'Bootstrap',
    icon:<FaBootstrap></FaBootstrap>,
    discription:'Bootstrap is the most popular  HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.',
    
  },{
    id:6,
    project_Name:'Tailwind CSS',
    icon:<RiTailwindCssFill></RiTailwindCssFill>,
    discription:'Tailwind CSS is a utility-first CSS framework that simplifies web development by providing a set of pre-designed utility classes. .',
    
  }
  ])
  return (
    <div>
     <section className='section-project' >
<div className="container" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  >
<h2 className="section-common-heading" id='skills'>Technical skills</h2>
<p className="section-common-subheading">Use  There Technology  in Our project</p>
</div>
<div className="container grid grid-three--cols" 

>
  {
    skilllist.map((item)=>{
return <div className="project-div" data-aos="flip-down" data-aos-delay='800'
>
    
<div className="icon" key={item.id} >
 <span className="fa-brands">{item.icon}</span>
<h3 className='section-common--title title' 

>{item.project_Name}</h3>
<p className='discription'>{item.discription} </p>
 </div>

</div>
    })
  }

  
  </div>

</section>
    </div>
  )
}

export default Skills
