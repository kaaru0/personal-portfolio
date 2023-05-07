import React from 'react';
import './navibar.css';

export default function Navibar() {
  return (
    <section>
      <header>

        <span>CARL HEINRICH ONG</span>

        <ul class="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Qualifications</a></li>
        </ul>
        
        <div className="header-right">
            <a href="#">Resume</a>
        </div>

      </header>
    </section>
    
  )
}
