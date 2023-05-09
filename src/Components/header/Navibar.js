import React, { useState, useEffect } from 'react';
import './navibar.css';


export default function Navibar() {
  const [activeLink, setActiveLink] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-links a");
  
      sections.forEach((section, index) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActiveLink(section.id);
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div className="head-nav">
      <header>
        <span className="title-name">CARL HEINRICH ONG</span>
        <div className="header-right">
            <ul class="nav-links">
                <li><a href="#home" className={activeLink === "home" ? "active" : "inactive"}>Home</a></li>
                <li><a href="#about" className={activeLink === "about" ? "active" : "inactive"}>About</a></li>
                <li><a href="#projects" className={activeLink === "projects" ? "active" : "inactive"}>Projects</a></li>
                <li><a href="#qualification" className={activeLink === "qualification" ? "active" : "inactive"}>Qualifications</a></li>
                <li><a href="#techstack" className={activeLink === "techstack" ? "active" : "inactive"}>Techstack</a></li>
                <li><a href="#contact" className={activeLink === "contact" ? "active" : "inactive"}>Contact me</a></li>
            </ul>
        </div>        
      </header>
    </div>
    
  )
}
