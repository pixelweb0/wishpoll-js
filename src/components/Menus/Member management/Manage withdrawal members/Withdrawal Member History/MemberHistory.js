import React from "react";
import { Link } from "react-router-dom";
import Dateprofile from "../../../../Dateprofile";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import MemberHistoryData from "./MemberHistoryData";

function MemberHistory(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <MemberHistoryData/>
            </div>
        </>
    )
}

export default MemberHistory;