import React from "react";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import Dateprofile from "../../../../Dateprofile";
import {Link} from "react-router-dom";
import PopupRegistrationData from "./PopupRegistrationData";

function PopupRegistration(){
    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <PopupRegistrationData />
            </div>
        </>
    )
}

export default PopupRegistration;