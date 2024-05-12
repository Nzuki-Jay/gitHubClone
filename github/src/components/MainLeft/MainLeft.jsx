import React from "react";
import './MainLeft.scss';
import Nimage from '../../assets/images.jpeg';
import repoData from '../../lists.json';

const MainLeft = () => {

    return (
        <>
            <div className="mainLeft">
                <div className="wrapper">
                    <div className="mainLeftHeader">
                        <img src={Nimage} alt=""/>
                        <span>Nzuki Code</span>
                    </div>

                    <hr></hr>

                    <div className="createRepo">
                        <span>Recent Repositories</span>
                        <button>New</button>
                    </div>

                    <div className="repoInput">
                        <input type="text" placeholder="Find a repository.."/>
                    </div>

                    <ul className="repoList">
                        {repoData.map((repo, index) => (
                            <li className="repo" key={index}>
                                <img src={Nimage} alt="" />
                                <span>{repo.name}/{repo.repo}</span>
                            </li>
                        ))} 

                        <small>Show More</small>
 
                    </ul>

                    <hr></hr>

                    <div className="activities">
                        <span>Recent Activities</span>
                        <p>
                            Portfilio Projects
                        </p>
                    </div>

                    <hr></hr>

                    <div className="teams">
                        <span>Your Teams</span>
                        <input type="text" placeholder="Find a team..." />
                    </div> 

                </div>

            </div>
        </>
    )
}

export default MainLeft