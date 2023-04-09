
import { BsFillRocketFill } from "react-icons/bs";

import Navbar from '../../layout/Navbar/Navbar';

export default function HomePage() {

  return (

   
<div className='md:h-[100vh]' id='/' >
<Navbar></Navbar>
<div className=' md:mx-28 md:mt-0 items-center justify-center mt-36'>
<div className='flex text-transparent md:w-fit md:translate-x-72  bg-clip-text   justify-center items-center   bg-gradient-to-r   text-center   from-[#0053A1] to-[#89253E]' >
<h6 className=' md:text-8xl text-5xl   font-bold  flex  md:mt-40 '>KAYRA ROCKET</h6>
</div>
 <h2  className='md:m-40 md:mt-24 md:text-xl   px-4  mb-50  mt-14'>of the printing and typeLorem Ipsum is simply dummy text of the prin ting and typeLorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and typeLorem Ipsum is simply dummy tf typeLorem Ipsum is simply dummy</h2>

 <span   className=' items-center justify-center flex mb-6 mt-28 motion-safe:animate-bounce duration-700 '><BsFillRocketFill  className='rotate-180 '  color='gray' size="90px"></BsFillRocketFill></span>
 
</div>

</div>

  )
}
