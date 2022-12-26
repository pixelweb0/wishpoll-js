import React from "react";
import Sidebar from "../../../sidebarmenu/Sidebar";
import Dateprofile from "../../../Dateprofile";
import {Link} from "react-router-dom";

function WaitingList(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <h1>대기중 리스트</h1>
            </div>
        </>
    )
}

export default WaitingList;