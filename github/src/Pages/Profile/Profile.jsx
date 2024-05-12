import { IoBookOutline } from "react-icons/io5";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { LuPackageSearch } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Nimage from '../../assets/images.jpeg';
import './Profile.scss';
import RepoData from '../../lists.json'
import Repo from "../../components/Repo/Repo";


const Profile = () => {
    return <>
        <div className="profileContainer">
            <div className="profileTop">
                <div className="item">
                    <IoBookOutline className="icon" />
                    <span>Overview</span>
                </div>
                <div className="item">
                    <RiGitRepositoryLine className="icon" />
                    <span>Repositories</span>
                </div>
                <div className="item">
                    <GrProjects className="icon" />
                    <span>Projects</span>
                </div>
                <div className="item">
                    <LuPackageSearch className="icon" />
                    <span>Packages</span>
                </div>
                <div className="item">
                    <FaRegStar className="icon" />
                    <span>Stars</span>
                </div>
            </div>

            <hr></hr>

            <div className="profileBottom">
                <div className="profileBottomLeft">
                    <div className="profileImage">
                        <img src={Nimage} alt="" /> 
                        <div>
                            <MdOutlineEmojiEmotions className="icon" />
                        </div>
                        
                    </div>

                    <div className="profileDetails">
                        <span>Universe Code</span>
                        <button>Edit Profile</button>
                    </div>

                </div>
                <div className="profileBottomRight">
                    
                    <div className="profileBottomRightTop">
                        <div className="header">
                            <span>
                                Nzuki Code / README.md
                            </span>
                            <h2>
                                Hi Im Nzuki, Nzuki Code.
                            </h2>
                        </div>

                        <hr></hr>

                        <div className="details">
                            <span>A Developer & Poet</span>
                            <p>I love coding with Html, Css, Js, React, Python Django, Boostrap and others</p>
                            <p>I'm imporving my Backend and Machine learning skills on the side.</p>
                            <p>Follow me on Linkedin, Instagram and GitHub</p>
                        </div>
                    </div>

                    <div className="profileBottomRightBottom">
                        <span>Popular Repositories</span>

                        <div className="popularRepositories">
                            {RepoData.map((repo, index) => (
                                <Repo repo={repo}/>
                            ))}
                        </div>

                    </div>
                    
                </div>
            </div>


        </div>
    </>
}

export default Profile