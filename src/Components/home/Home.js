import React from 'react'
import './home.css'
import { RiLinkedinBoxLine } from 'react-icons/ri';
import {RxResume} from 'react-icons/rx';
import {SiGithub} from 'react-icons/si';
import {HiOutlineMail} from 'react-icons/hi'
import { CgChevronDown } from 'react-icons/cg';

export default function Home() {
  return (
    <section id="home">
    <div>
        <div className="cont">
            <div className="home-container">
                <div className="socials">
                    <ul className="socials-links">
                        <li><a><RiLinkedinBoxLine size={35} className="icons"/></a></li>
                        <li><a><SiGithub size={30} className="icons"/></a></li>
                        <li><a><HiOutlineMail size={35} className="icons"/></a></li>
                    </ul>  
                </div>

                <div className="main-text">
                    <div className="main-text-left">
                        <h1>Hey! <br/>I'm <span style={{fontWeight:400}}>Carl</span>,</h1>
                        <h5>Aspiring Software Developer</h5>
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
    </div>
    </section>
  )
}
