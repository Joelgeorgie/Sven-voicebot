import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {

  const [nav,setNav]=useState(false);
  
  const handleNav= () =>{
    setNav(!nav);
  }

  const maincol='#2685bd';
  return (
    <div className=" flex justify-between text-white max-w-[1240px] mx-auto h-24 p-5">
        <h1 className={`w-full text-3xl font-bold text-[${maincol}] `}>
            ./REMAIL
        </h1>

        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Compose</li>
            <li className='p-4'>Random</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            { !nav ? <AiOutlineClose size={23}/>: <AiOutlineMenu size={23}/> }
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-700': 'fixed left-[-100%]'}>
        <h1 className={`w-full text-3xl font-bold text-[${maincol}] m-5 `}>
            ./REMAIL
        </h1>
        <ul className=' uppercase p-4' >
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Compose</li>
            <li className='p-4 border-b border-gray-600'>Random</li>
            <li className='p-4 '>Contact</li>
        </ul>
        </div>

    </div>
  )
}

export default Navbar