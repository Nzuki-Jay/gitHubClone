import React, { useState } from "react";
import { FaGithub, FaBell, FaPlus } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import Nimage from "../../assets/images.jpeg";
import './Navbar.scss';
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className="navbar">
                {/* Left */}

                <div className="navLeft">
                    <Link to="/">
                        <FaGithub className="logo" />
                    </Link>
                     
                    <div>
                        <input type="text" placeholder="Search...."/>
                    </div>       
                </div>

                {/* Center */}

                <div className="navCenter">
                    <span>Pulls</span>
                    <span>Issues</span>
                    <span>Marketplace</span>
                    <span>Explore</span>
                </div>

                {/* Right */}
                
                <div className="navRight">
                    <FaBell className="icons"/>
                    <div className="navRightIcons"> 
                        <FaPlus className="icons"/>
                        <IoMdArrowDropdown className="icons"/>   
                    </div>
                    <div onClick={() => {setOpenMenu(!openMenu)}} className="navRightIcons">
                        <img src={Nimage} alt=""/>
                        <IoMdArrowDropdown className="icons"/> 
                    </div>
                </div>

                <Menu openMenu={openMenu}/>
            </nav>        
        </>
    )
}

export default Navbar