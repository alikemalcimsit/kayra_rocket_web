import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-scroll';
export default function SideBarCustom() {
    const { collapseSidebar } = useProSidebar();
const [active,setActive] = useState(1)

  return (
  
      
 <div  className='md:invisible fixed  z-20 '>
 <main>
        <button className=' m-9 relative' onClick={() =>{ collapseSidebar() ; setActive(0)} }><AiOutlineMenu size="34px"></AiOutlineMenu></button>
      </main>
      <Sidebar  collapsedWidth='0px '  defaultCollapsed="true" backgroundColor='bg-gray-400 ' color='black' className='  bg-gradient-to-r bg-gray-400  disabled:bg-black  text-center  absolute'>
        <Menu >
     <MenuItem component={ <Link  spy={true} smooth={true} offset={-150} duration={700}  to='/'></Link>} style={{background:"transparent"}}   onClick={()=>setActive(1)}  className={active ===1 ? 'bg-gradient-to-r  from-[#0053A1] to-[#89253E]  ' : null  }>Home</MenuItem>
         <MenuItem component={ <Link spy={true} smooth={true} offset={-70} duration={700} to='about'></Link>} style={{background:"transparent"}}  onClick={()=>setActive(2)} className={active===2 ?   'bg-gradient-to-r from-[#0053A1] to-[#89253E]' : null} >About</MenuItem>
        <MenuItem component={ <Link spy={true} smooth={true} offset={-60} duration={700} to='members'></Link>} style={{background:"transparent"}}  onClick={()=>setActive(3)} className={active===3 ? 'bg-gradient-to-r from-[#0053A1] to-[#89253E]' : null} >Members</MenuItem>
          <MenuItem component={ <Link spy={true} smooth={true} offset={-30} duration={700} to='contact'></Link>} style={{background:"transparent"}}  onClick={()=>setActive(4)} className={active===4 ? 'bg-gradient-to-r from-[#0053A1] to-[#89253E]' : null} >Contact</MenuItem>
        </Menu>
      </Sidebar>
      
    </div>
 
  )
}
