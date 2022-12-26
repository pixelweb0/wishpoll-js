import React from "react";
import "./Dashboard.css";
import Dateprofile from "../../Dateprofile";
import Info from "./Info";
import Sidebar from "../../sidebarmenu/Sidebar";
import { Link } from "react-router-dom";

function Dashboard(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <Info />
            </div>
        </>
    )
}

export default Dashboard;