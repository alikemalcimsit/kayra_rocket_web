import React from 'react'
import contact from '../../assets/contact.png'
import { Contactdata } from './Contactdata'

export default function Contact() {
  return (
    <div className='h-[100vh]' id='contact'>

    <div className='md:mx-40 items-center justify-center   '>
    <h1 className='md:text-5xl text-3xl mb-7 font-bold flex  mt-20 items-center justify-center text-[#0053A1] '>Contact Us</h1>
  
    <div className='md:flex items-center justify-around  ' >
   
    <ul className=' md:w1/2 items-center' >

        {Contactdata.map(data=>(
            <div key={data.id-1}>
        <li className='flex gap-3 justify-center p-3 '  key={data.id}>
        <span key={data.icon}>{data.icon}</span>
        <h1 key={data.name} className=' text-base ' >{data.name}:</h1>
        <h1 key={data.value} className='font-medium text-[#89253E]'>{data.value}</h1>
    </li>
   
    </div>
        ))}
        
    </ul>
  
  <img  alt='' className='md:scale-125 md:w1/2 ' src={contact}></img>
  
    </div>
   
    </div>
  
  </div>
  
  
  )
}
