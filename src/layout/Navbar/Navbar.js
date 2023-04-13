import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll"; 


function Navbar() {
 const ref = useRef()

 const [active, setActive] = useState(1);




useEffect(()=>{
  
  const activeTab =()=>{
    let navbarItems = ref.current.querySelectorAll("li")
if(active===1){
  navbarItems[0].classList.add('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
  navbarItems[1].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
  navbarItems[2].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
  navbarItems[3].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')



}
else if(active===2){
    navbarItems[1].classList.add('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
    navbarItems[0].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
  navbarItems[2].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
  navbarItems[3].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')

  }
 else if(active===3){
    navbarItems[2].classList.add('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
    navbarItems[1].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
    navbarItems[0].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
    navbarItems[3].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
  

  }
  else if(active===4){
    navbarItems[3].classList.add('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
    navbarItems[1].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
    navbarItems[2].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
    navbarItems[0].classList.remove('bg-gradient-to-r','from-[#832743]', 'to-[#194C8E]','text-white')
  
  }
  }

  activeTab()
},[active])

  return (

 <div className=" md:visible invisible flex w-full h-20 justify-center items-center md:fixed md:z-20  md:bg-gray-400 ">
    <ul ref={ref}  className="flex md:gap-x-20 justify-center md:text-white   items-center   cursor-pointer   ">


      <Link  to="/" spy={true} smooth={true} offset={-150} duration={700} ><li className="rounded-3xl p-2 hover:shadow-xl transition-shadow  " onClick={()=>setActive(1) }>Home</li> </Link>  
       <Link to="about" spy={true} smooth={true} offset={-100} duration={700}><li className="rounded-3xl p-2 hover:shadow-xl transition-shadow  " onClick={()=>setActive(2) }>About</li></Link> 
       <Link to="members" spy={true} smooth={true} offset={-100} duration={700}><li className="rounded-3xl p-2 hover:shadow-xl transition-shadow " onClick={()=>setActive(3)}>Members</li></Link> 
        <Link to="contact" spy={true} smooth={true} offset={-150} duration={700}><li className="rounded-3xl p-2 hover:shadow-xl transition-shadow " onClick={()=>setActive(4) }>Contact</li></Link>
    </ul>
 </div>
  );
}
 

export default Navbar;
