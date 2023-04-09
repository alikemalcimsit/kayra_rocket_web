import React from 'react'


import { AiFillLinkedin,AiFillInstagram ,AiFillFacebook} from "react-icons/ai";
import { cardDatas } from './data';
export default function Card() {
  return (
    
         <div className=''>
    
    
     <div className='justify-center items-center   flex flex-wrap gap-16' >

       {cardDatas.map(data=>(
  <div key={data.id}   className= {data.id%2===0 ?  'bg-[#244886] rounded-lg text-white pt-8 w-[350px] max-w-full text-center' :  'bg-[#89253E] rounded-lg text-white pt-8 relative w-[350px] max-w-full text-center' }>
 <div className='justify-center items-center flex'>
 <img  className='border-2 rounded-full p-2  ' src={data.photoUrl} alt="user" />
   </div>
 
  <h3 className='my-3 text-2xl'>{data.name}</h3>
  <h6 className='my-1 uppercase' >{data.city}</h6>
  <p className='mb-2 text-white text-sm '>{data.description1} <br/> {data.description2}</p>

 <div className='flex  justify-center'>

  <a className='m-4 text-white'  href={data.fbUrl} >
   <AiFillFacebook  size={30}></AiFillFacebook>
    </a>
    <a className='m-4 text-white' href={data.IgUrl} >
    <AiFillInstagram size={30}></AiFillInstagram>
    </a>
    <a className='m-4 text-white'  href={data.LknUrl}   >
    <AiFillLinkedin size={30}></AiFillLinkedin>
    </a>
    </div>

  <div  className='bg-[#010101c2] text-left p-4 mt-7'>
        <h6 className='mb-2'>Skills</h6>
    <ul className='flex flex-wrap gap-3 '>

 {data.skills.map(skill=>(
 
        <li key={skill} className='border p-1 border-gray-500 '>{skill}</li>
 ))}


   
    </ul>
  </div>
 </div>



       ))}
       </div>
     </div>
  )
}
