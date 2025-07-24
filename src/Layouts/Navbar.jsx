import React, { useState } from 'react'
import logo from '/images/Logo.png'
import { navitems } from '../assets/source/data'
import { AllComponentSize } from '../components/AllComponentSize'
import { Button } from '../components/Button'
import { Link } from 'react-router'
console.log(navitems)

window.addEventListener('scroll',function(){
    const x = this.scrollY;
    if(x>100){
       
    }
})
const Navbar = () => {
    const [bgcolor,setbgcolor] = useState(true)
  return (
    <AllComponentSize className={`py-5 z-50  `}>
         <nav>
        <div className='flex justify-between items-center'>
            {/* logo */}
            <div>
                <Link to='/'><img src={logo} className='w-[177px] h-[60px]' alt="" /></Link>
            </div>
            {/* nav item */}
            <ul className='list-none flex gap-7 items-center '>
                <Link to="/" className='text-secondary font-primary hover:text-primary transition-all duration-200 cursor-pointer bg-[#262626] px-[28px] py-[14px] rounded-8px'>Home</Link>
                {navitems.flatMap((x)=>(
                    
                    <Link to={x.href} key={x.id} className='text-secondary font-primary hover:text-primary transition-all duration-200 cursor-pointer animationItem'>
                        {x.items}
                    </Link>
                ))}
            </ul>
            

            {/* button */}
            <div>
                <Button className="text-black">Contact Us</Button>
            </div>
        </div>

    </nav>

    </AllComponentSize>
   
  )
}

export default Navbar