import React from "react";
import './Main.scss';
import MainLeft from "../../components/MainLeft/MainLeft";
import MainRight from "../../components/MainRight/MainRight";

const Main = () => {

    return (
        <>
            <div className="main">
                <MainLeft/>
                <MainRight/>
            </div>
        </>
    )
}

export default Main