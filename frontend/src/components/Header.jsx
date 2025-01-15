import { useEffect, useState } from 'react'
import React from 'react'
import ModicoLogo from '../assets/ModicoLogo.png'
import ModicoLogoBig from '../assets/ModicoLogoBig.png'
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sticky top-0 z-50'>
      <nav className='top-0 flex justify-between items-center p-5 w-full bg-white shadow-md rounded-xl z-50'>
    <div className='flex items-center'>
      <img src={isScrolled ? ModicoLogo : ModicoLogoBig } alt="Modico Logo" className={`transition-all ${isScrolled ? 'w-15 h-10' : 'w-30 h-10'} mr-4`} />
    </div>
    <div>
      <Link to={'/'} className='transition-all mx-5 my-5 hover:text-secondary-100 hover:text-lg hover:font-semibold'>Home</Link>
      <Link to={'/products'} className='transition-all  mx-5 my-5 hover:text-secondary-100 hover:text-lg hover:font-semibold'>Products</Link>
      <Link to={'/services'} className='transition-all mx-5 my-5 hover:text-secondary-100 hover:text-lg hover:font-semibold'>Services</Link>
      <Link to={'/about'} className='transition-all mx-5 my-5 hover:text-secondary-100 hover:text-lg hover:font-semibold'>About</Link>
    </div>
  </nav>
    </div>
  
  )
}
