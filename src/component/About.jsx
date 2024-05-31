import { motion } from 'framer-motion'
import React from 'react'

function About() {
  return (
    <div className=' w-full p-28 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[3.5vw] leading-[4.2vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to <span className='w-full border-b-[3px] border-[#424b1f]'>raise funds</span> , <span className='w-full border-b-[3px] border-[#424b1f]'>sell products</span>, <span className='w-full border-b-[3px] border-[#424b1f]'>explain complex ideas</span>, and <span className='w-full border-b-[3px] border-[#424b1f]'>hire great people</span>.</h1>
        <div className='w-full flex item-centre border-t-[1px] border-[#8ea343] mt-16 pt-10'>
          <div className='w-1/2'>
              <h1 className="text-6xl font-['Neue_Montreal']">Our approach:</h1>
              <button className='px-10 py-6 bg-zinc-900 hover:bg-zinc-950 rounded-full gap-10 flex items-center mt-10 text-white'>Read More <motion.div whileHover={{scale:4}} className='w-2 h-2 rounded-full bg-white'></motion.div></button>
          </div>
          <div className='w-1/2 rounded-3xl bg-[#afce3f] h-[70vh]'></div>
        </div>
    </div>
  )
}

export default About