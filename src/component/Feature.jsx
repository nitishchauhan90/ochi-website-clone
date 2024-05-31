import { motion } from 'framer-motion'
import React, { useState } from 'react' 

function Feature() {
    const [isHoveringfyde, sethoveringfyde]=useState(false);
    const [isHoveringvise, sethoveringvise]=useState(false);
    
  return (
    <div className='w-full py-10'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured projects </h1>
            
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-20'>
                <div onMouseEnter={()=>sethoveringfyde(true)} onMouseLeave={()=>sethoveringfyde(false)} className="cardcontainer w-1/2 h-[75vh] relative ">
                    <h1 className='absolute flex  left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-["Neue_Montreal"] leading-none tracking-tight font-bold text-[#ceef53] overflow-hidden'>
                        {"FYDE".split('').map((item,index)=>(
                            <motion.span initial={{y:"100%"}} animate={isHoveringfyde ? ({y: "0%"}) : ({y: "100%"})} transition={{ease:[0.22,1,0.36,1] ,delay:index*.06}} className=' inline-block '>{item}</motion.span>
                        ))}
                    </h1>
                    <div className='w-full h-full rounded-xl  overflow-hidden'>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'></img>
                    </div>
                </div>
                <div onMouseEnter={()=>sethoveringvise(true)} onMouseLeave={()=>sethoveringvise(false)} className="cardcontainer w-1/2 h-[75vh]  relative ">
                    <h1 className='absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-["Neue_Montreal"] leading-none tracking-tight font-bold text-[#ceef53] overflow-hidden'>
                        {"VISE".split('').map((item,index)=>(
                            <motion.span initial={{y:"100%"}} animate={isHoveringvise ? ({y: "0%"}) : ({y: "100%"})} transition={{ease:[0.22,1,0.36,1] ,delay:index*.06}} className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                    <div className='w-full h-full rounded-xl  overflow-hidden'>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg'></img>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Feature
