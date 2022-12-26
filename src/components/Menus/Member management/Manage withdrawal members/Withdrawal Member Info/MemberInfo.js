import React from "react";
import { Link } from "react-router-dom";
import Dateprofile from "../../../../Dateprofile";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import MemberInfoData from "./MemberInfoData";

function MemberInfo(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <MemberInfoData/>
            </div>
        </>
    )
}

export default MemberInfo;