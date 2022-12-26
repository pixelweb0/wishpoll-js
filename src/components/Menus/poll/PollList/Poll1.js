import React from "react";
import Poll1TotalList from "./Poll1TotalList";
import Sidebar from "../../../sidebarmenu/Sidebar";
import Dateprofile from "../../../Dateprofile";
import { Link } from "react-router-dom";

function Poll1(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <Poll1TotalList/>
            </div>
        </>
    )
}

export default Poll1;