import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data=[
    {
        id:11,
        title:"Simple Contact Form",
        desc: "A html and css base contact page",
        img: "/pic12.png",
        tag:["HTML, CSS, Typescript,Node"]
    },  
    {
        id:2,
        title:"Home Page",
        desc: "A html css base home page",
        img: "/pic2.png",
        tag:["HTML, CSS, Typescript,Next.js,React"]
},
{
    id:3,
    title:"Portfolio page",
    desc: "A html and css base portfolio page",
    img: "/pic3.png",
    tag:["HTML, CSS, Typescript,Node,React"]
},
{
    id:4,
    title:"Simple card",
    desc: "A html and css base card",
    img: "/pic4.png",
    tag:["HTML, CSS, Typescript,Node"]
},
{
    id:16,
    title:"Dynamic Website",
    desc: "Create a dynamic website",
    img: "/pic16.png",
    tag:["HTML, CSS, Typescript,Node"]
},     

{
    id:5,
    title:"Student card",
    desc: "A next.js base student id card",
    img: "/pic5.png",
    tag:["HTML, CSS, Typescript,Node,Next.js"]
},  
{
    id:7,
    title:"Simple html working",
    desc: "A simple html base work",
    img: "/pic7.png",
    tag:["HTML, CSS, Typescript,Node"]
},   



{
    id:8,
    title:"Todo list",
    desc: "Typescript  and CLI base project",
    img: "/pic8.png",
    tag:["HTML, CSS, Typescript,Node"]
},  
{
    id:9,
    title:"Currency Convertor",
    desc: "Typescript  and CLI base project",
    img: "/pic9.png",
    tag:["HTML, CSS, Typescript,Node"]
},  
{
    id:10,
    title:"Student Application Form",
    desc: "Typescript  and CLI base project",
    img: "/pic10.png",
    tag:["HTML, CSS, Typescript,Node"]
},  

{
    id:12,
    title:"MCQues",
    desc: "Typescript  and CLI base project",
    img: "/pic11.png",
    tag:["HTML, CSS, Typescript,Node"]
}, 
{
    id:13,
    title:"Static Resume",
    desc: "Create a static resume",
    img: "/pic13.png",
    tag:["HTML, CSS, Typescript,Node"]
}, 
{
    id:14,
    title:"Dynamic Resume",
    desc: "Create a dynamic resume",
    img: "/pic14.png",
    tag:["HTML, CSS, Typescript,Node"]
},  
{
    id:6,
    title:"Simple html working",
    desc: "A simple html base work",
    img: "/pic6.png",
    tag:["HTML, CSS, Typescript,Node"]
},
{
    id:1,
    title:"Periodic Table",
    desc: "A html and css base periodic table",
    img: "/pic1.png",
    tag:["HTML, CSS, Typescript,Node,React"]
},
{
    id:15,
    title:"Editable Resume",
    desc: "Create a editable resume",
    img: "/pic15.png",
    tag:["HTML, CSS, Typescript,Node"]
}, 
{
    id:17,
    title:"Quiz App",
    desc: "Create a quiz app",
    img: "/pic17.png",
    tag:["HTML, CSS, Typescript,Node"]
},       

]
    
const Project = () => {
  return (
    <div id='project' className='container pt-32  text-cyan-600'>
        <Heading  title='My Project' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2  lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id} title={el.title} desc={el.desc} img={el.img} tags={el.tag}/>))}
        </div>

    </div>
  )
}

export default Project
