import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Tabmenu2.css";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import Dateprofile from "../../../../Dateprofile";

import ABTest from "../../games/AB test/AB Test";
import Survey from "../../games/Survey/Survey";
import MediaUpload from "../../games/MediaUpload/MediaUpload";
import TagData from "../../games/Data Tag/Data Tag";

function Tabmenu2(){
    const [tabmenu, setTabmenu] = useState(0);

    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />
                <ul className="tab-menu">
                    <li className={parseInt(tabmenu) === 0 ? "on":""} onClick={() => setTabmenu(parseInt(0))}><a>A/B테스트 모음</a></li>
                    <li className={parseInt(tabmenu) === 1 ? "on":""} onClick={() => setTabmenu(parseInt(1))}><a>간단 설문</a></li>
                    <li className={parseInt(tabmenu) === 2 ? "on":""} onClick={() => setTabmenu(parseInt(2))}><a>미디어 업로드</a></li>
                    <li className={parseInt(tabmenu) === 3 ? "on":""} onClick={() => setTabmenu(parseInt(3))}><a>데이터 태그</a></li>
                </ul>

                {tabmenu === 0 ? <ABTest/> : tabmenu === 1 ? <Survey/> : tabmenu === 2 ? <MediaUpload/> : tabmenu === 3 && <TagData/>}
            </div>
        </>
    )
}

export default Tabmenu2;