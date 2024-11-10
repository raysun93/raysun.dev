// src/components/Layout/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={
        isScrolled
          ? 'fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50'
          : 'fixed top-0 left-0 right-0 bg-transparent z-50'
      }
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <a
            href="#home"
            onClick={e => handleClick(e, 'home')}
            className="text-xl font-bold text-gray-800"
          >
            Ray Sun
          </a>

          <div className="hidden md:flex space-x-8">
            <a
              href="#skills"
              onClick={e => handleClick(e, 'skills')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={e => handleClick(e, 'experience')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={e => handleClick(e, 'projects')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
