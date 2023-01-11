import React, { useState } from "react";
import "./css/Dateprofile.css";

function Dateprofile(){
    const date = new Date();

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '-' + month + '-' + day;

    return (
        <div className="hd-top">
            <button id="btn-nav">메뉴</button>
            <span className="time">{dateStr}</span>
            <div className="tnb">
                <ul>
                    <li><a href="#" class="bell on">알람</a></li>
                    <li><a href="#" class="user-info"><img src="../img/photo_user.jpg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Dateprofile;