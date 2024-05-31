import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function Landingpage() {
  const [hoverall,sethoverall] = useState(false);
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-screen text-white pt-1'>
      <div className='textstructure  mt-44 px-20'>
        {["We create","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
          return  <div className='masker'>
                      <div className='w-fit flex items-center overflow-hidden pt-4'>
                          {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className=' mr-[1vw] rounded-md w-[9vw] h-[5.6vw] bg-green-600 relative -top-[1.6vw]'></motion.div>)}
                          <h1 className='uppercase text-9xl font-["Founders_Grotesk_X-Condensed"] leading-[7vw] font-bold'>{item}</h1>
                      </div>
                  </div>
        })}
      <div className='border-t-[1px] border-zinc-800  mt-28 flex justify-between items-center'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none mt-5'>{item}</p>
        ))}
        <div className='start mt-5 flex  gap-2 items-center'>
            <div  className='px-5 py-2 border-[2px] hover:bg-white hover:text-zinc-900  border-zinc-500 rounded-full font-light text-sm capitalize'>START THE PROJECT</div>
            <div  className='w-10 h-10 hover:bg-white rounded-full hover:text-zinc-900 border-[2px]  border-zinc-500 flex items-center justify-center '>
                <span  className=' rotate-[45deg]'>
                    <FaArrowUpLong/>
                </span>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Landingpage
