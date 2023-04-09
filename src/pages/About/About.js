import React from 'react'
import about from "../../assets/about.png"
export default function About() {
  return (


<div className="md:h-[100vh]" id='about'>

  <div className='items-center justify-center md:mx-40 mt-20 '>
    <div  className='flex text-transparent md:w-fit md:translate-x-72  bg-clip-text   justify-center items-center   bg-gradient-to-r   text-center   from-[#0053A1] to-[#89253E]' >


    </div>
  <h1 className='md:text-5xl text-3xl mb-7 font-bold flex  mt-9 items-center justify-center text-[#0053A1] '>About</h1>
  <div className='md:flex' >
 

  <p className='md:w-1/2  text-base px-4 items-center flex justify-center ' >Lorem Ipsum is simply dummy text of the printing and typeLorem Ipsum is simp ly dummy text of the printing and typeLorem Ipsum is simply dummy text of the printing and typeL orem Ipsum is simply dummy text of the printing and typeLorem Ipsum is simply dummy text of the printing a nd typeLorem Ipsum is simply dummy text of the printing and typeLorem Ipsum is simply dummy text of the pr inting and typeLorem Ipsum is simply dummy </p>

<div>
<img  alt='' className='md:h-[400px]   mb-36' src={about}></img>

</div>

  </div>
 
  </div>

</div>


  )
}
