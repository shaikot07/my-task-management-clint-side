import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaGlobe, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
      return (
            <footer className="footer items-center p-4 bg-[#2A3347]  text-white ">
                  <aside className="items-center grid-flow-col">
                        <h1 className='text-3xl text-[#A855F7]'>My Task</h1>
                        <br />
                        <p>Copyright © 2023 - All right reserved</p>
                  </aside>
                  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                   <Link to="https://github.com/shaikot07"><FaGithubSquare className='text-2xl' /></Link>
                   <Link to="https://saiful-islam-shaikot-protfolio.netlify.app/"><FaGlobe className='text-2xl'/></Link>
                   <Link to="www.linkedin.com/in/saiful-islam-shaikot-8839ba181"><FaLinkedin className='text-2xl' /></Link>
                  </nav>
            </footer>
      );
};

export default Footer;