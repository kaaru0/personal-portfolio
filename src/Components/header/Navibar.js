import React from 'react';
import './navibar.css';

export default function Navibar() {
  return (
    <div className="head-nav">
      <header>
        <span>CARL HEINRICH ONG</span>
        <div className="header-right">
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Qualifications</a></li>
                <li><a href="#">Techstack</a></li>
                <li><a href="#">Contact me</a></li>
            </ul>
        </div>        
      </header>
    </div>
    
  )
}
