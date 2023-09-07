import React, { useState, useEffect } from 'react';

import { header } from '../data';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? 'lg:top-0 bg-[#ffffffa2] backdrop-blur-md shadow-2xl'
          : 'lg:top-[40px]'
      } py-6 lg:py-4 fixed w-full transition-all duration-200 ease-in-out z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" data-aos="fade-down" data-aos-delay="700">
          <img src={logo} alt="logo" />
        </a>
        <div
          className="hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <Nav />
        </div>
        {/* cta button */}
        <button
          className="btn btn-sm btn-outline hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="900"
        >
          {btnText}
        </button>
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-accent" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-accent" />
          )}
        </button>
        {/* mobile nav */}
        <div
          className={`${
            mobileNav ? 'left-0' : 'left-[-100%]'
          } fixed top-0 bottom-0 bg-pink-400 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
