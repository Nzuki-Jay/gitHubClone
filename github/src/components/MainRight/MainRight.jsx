import React from "react";
import './MainRight.scss';
import { FaGithub} from 'react-icons/fa';
import { Link } from "react-router-dom";

const MainRight = () => {

    return (
        <>
            <div className="mainRight">
                <div className="wrapper">
                    <div className="mainRightHeader">
                        <span>Following</span>
                        <span>For you</span>
                    </div>

                    <hr></hr>

                    <div className="mainRightDashboard">
                        <h1>Welcome... This is GitHub clone with
                             React.js Sass and React-Router. </h1>
                        <p>Follow me on <a href="https://www.linkedin.com/in/nzuki-mbula-901668236/" rel="noreferrer"  target="_blank" >Linkedin</a>,  
                        <a href="https://github.com/" rel="noreferrer"  target="_blank">GitHub</a> and  <a href="https://www.instagram.com/_.nzuki_" rel="noreferrer"  target="_blank">Instagram</a> </p>
                        <Link to="/profile">
                            <span className="dashLink">GitHub Clone</span>
                        </Link> 
                    </div>

                    <div className="mainRightInfo">
                        <p>I am a fullstack developer, proficient in <span>Javascript</span> and <span>Python</span>. 
                            I code with <span>Django</span>, <span>ReactJs with Sass</span> and plain <span>html,css & Js</span>...
                        </p>

                        <p>Checkout my github for my projects</p>

                    </div>

                    <div className="mainRightFooter">
                        <div className="logo">
                            <FaGithub className="icon"/>
                            <span>GitHub Clone</span>
                        </div>

                        <div className="footerLinks">
                            <div className="links">
                                <a href="/">Blog</a>
                                <a href="/">About</a>
                                <a href="/">Shop</a>
                                <a href="/">GitHub Clone</a>
                                <a href="/">Pricing</a>
                            </div>

                            <div className="links">
                                <a href="/">API</a>
                                <a href="/">Training</a>
                                <a href="/">Status</a>
                                <a href="/">Security</a>                            
                            </div>

                            <div className="links">
                                <a href="/">Terms</a>
                                <a href="/">Privacy</a>
                                <a href="/">Docs</a>
                            </div>

                        </div>
                    </div>

                    <hr></hr>

                </div>
            </div>
        </>
    )
}

export default MainRight