import React, { useState } from "react";
import "./navbar.css";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../Images/navbarimages/Meubel House_Logos-05.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo" style={{display:"flex" , alignItems:"center"}}>
         <img src={logo} style={{marginBottom:"4%"}} alt=""></img>
         <p style={{fontFamily:'Montserrat', fontWeight:'700', fontSize:'34px'}}>Furniro</p>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              Home
            </li>
            <li>
              Shop
            </li>
            <li>
             About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <TbUserExclamation style={{ color: 'black' }} /> 
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FiSearch style={{ color: 'black' }}/>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaRegHeart style={{ color: 'black' }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <AiOutlineShoppingCart style={{ color: 'black' }} />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#ss" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{color:'black'}}/>
            </a>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Navbar;