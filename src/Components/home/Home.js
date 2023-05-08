import React from 'react'
import './home.css'
import { TfiLinkedin,TfiGithub } from 'react-icons/tfi';
import {RxResume} from 'react-icons/rx';
import { CgChevronDown } from 'react-icons/cg';

export default function Home() {
  return (
    <div id="home">
        <div className="home-container">
            <div className="socials">
                <ul className="socials-links">
                    <li><a><TfiLinkedin size={35} className="icons"/></a></li>
                    <li><a><TfiGithub size={35} className="icons"/></a></li>
                </ul>  
            </div>

            <div className="main-text">
                <div className="main-text-left">
                    <h1>Hey! I'm Carl,</h1>
                    <h5>ECE graduate</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
                    elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed a
                    </p>

                    <div className="cv">
                        <span>DONWLOAD CV <RxResume size={30} className="cv-icon"/></span>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
    
  )
}
