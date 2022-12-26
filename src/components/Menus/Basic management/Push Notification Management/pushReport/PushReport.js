import React from "react";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import Dateprofile from "../../../../Dateprofile";
import {Link} from "react-router-dom";
import PushReportData from "./PushReportData";

function PushReport(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <PushReportData />
            </div>
        </>
    )
}

export default PushReport;