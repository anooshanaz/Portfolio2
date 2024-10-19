import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-5'>
                <h2 className='text-5xl text-cyan-600'>Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                    Drop me a line,give me a call and send me a message by submittig the form.
                </p>
                <div className='flex gap-3 items-center'>
                <FaMailBulk size={30}/> anoosha571@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                    <FaGithub size={30} />https://github.com/anooshanaz
                </div>
                <div className='flex gap-3 items-center'>
                    <FaLinkedin  size={30} />https://www.linkdin.com/posts/anoosha-naz
                </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='h-[40px] bg-transparent border border-purple-700' id='name' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email:</label>
                        <input type="text" className='h-[40px] bg-transparent border border-purple-700' id='email' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="msg">Message:</label>
                        <textarea className='h-[40px] bg-transparent border border-purple-700' id='msg' rows={8}>
                        </textarea>
                    </div>
                    <button className='bg-cyan-600 text-white w-32 border border-r-zinc-300'>Submit</button>
                </div>
            </div>
        </div>

  )
}

export default Contact
