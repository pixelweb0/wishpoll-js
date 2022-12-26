import React from "react";
import Dateprofile from "../../../Dateprofile";
import Sidebar from "../../../sidebarmenu/Sidebar";
import {Link} from "react-router-dom";
import PushData from "./PushData";


function push(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <PushData/>
            </div>
        </>
    )
}

export default push;