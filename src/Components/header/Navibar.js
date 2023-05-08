import React from 'react';
import './navibar.css';

export default function Navibar() {
  return (
    <section>
      <header>

        <span>CARL HEINRICH ONG</span>
        
        <div className="header-right">
            <ul class="nav-links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Qualifications</a></li>
                <li><a href="#">Techstack</a></li>
                <li><a href="#">Contact me</a></li>
            </ul>
        </div>        
      </header>
    </section>
    
  )
}
