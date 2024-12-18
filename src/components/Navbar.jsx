import React, { useEffect, useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// Memoized NavLink component to prevent unnecessary re-renders
const NavLink = memo(({ nav, active, onClick }) => (
  <li
    key={nav.id}
    className={`${
      active === nav.title ? "text-white" : "text-secondary"
    } hover:text-white text-[18px] font-medium cursor-pointer`}
    onClick={() => onClick(nav.title)}
  >
    <a href={`#${nav.id}`}>{nav.title}</a>
  </li>
));

// Memoized MobileNavLink component
const MobileNavLink = memo(({ nav, active, onClick }) => (
  <li
    key={nav.id}
    className={`font-poppins font-medium cursor-pointer text-[16px] ${
      active === nav.title ? "text-white" : "text-secondary"
    }`}
    onClick={() => onClick(nav.title)}
  >
    <a href={`#${nav.id}`}>{nav.title}</a>
  </li>
));

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoize scroll handler to prevent recreation on each render
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 100);
  }, []);

  useEffect(() => {
    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoize click handlers
  const handleLogoClick = useCallback(() => {
    setActive("");
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = useCallback((title) => {
    setActive(title);
  }, []);

  const handleMobileNavClick = useCallback((title) => {
    setToggle(false);
    setActive(title);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setToggle(prev => !prev);
  }, []);

  // Memoize nav classes
  const navClasses = `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
    scrolled ? "bg-primary" : "bg-transparent"
  }`;

  return (
    <nav className={navClasses}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={handleLogoClick}
        >
          <img 
            src={logo} 
            alt='logo' 
            className='w-9 h-9 object-contain'
            loading="lazy" // Add lazy loading for images
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Joey Faris &nbsp;
            <span className='sm:block hidden'>| Software Engineer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <NavLink
              key={nav.id}
              nav={nav}
              active={active}
              onClick={handleNavClick}
            />
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={handleMenuToggle}
            loading="lazy"
          />

          {toggle && (
            <div className='p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <MobileNavLink
                    key={nav.id}
                    nav={nav}
                    active={active}
                    onClick={handleMobileNavClick}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Memoize the entire Navbar component
export default memo(Navbar);