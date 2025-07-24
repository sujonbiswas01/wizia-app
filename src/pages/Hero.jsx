import React from 'react'
import { AllComponentSize } from '../components/AllComponentSize'
import { heroTitle } from '../assets/source/data'
import { heroItems } from '../assets/source/data'
import { Button } from '../components/Button'
const Hero = () => {
  return (
    <AllComponentSize className='bg-[url(/images/herobg.png)] w-fit bg-cover brightness-130 bg-center bg-no-repeat min-h-100vh
    '>
        <div className=''>
            <h1 className='-mt-40 mb-10 text-center text-[68px] font-semibold text-white font-primary leading-tight'>{heroTitle}</h1>

            <div className='bg-[#191919] px-[40px] py-[24px] list-none flex gap-2.5 justify-center items-center text-secondary'>
                <li>For</li>
                {heroItems.flatMap((x)=>(
                    <li key={x.id} className='bg-[#262626] px-3.5 py-3 rounded-[8px]'>
                        {x.item}

                    </li>
                ))}
            </div>

            <div className='flex gap-3.5 justify-center py-12'>
                <Button className='bg-[#252525] border-2 border-black font-medium text-lg font-primary '>Our Works</Button>
                <Button className="bg-primary text-black">Contact Us</Button>
            </div>
        </div>
   
    </AllComponentSize>
  )
}

export default Hero