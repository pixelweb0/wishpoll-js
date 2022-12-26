import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Tabmenu.css";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import Dateprofile from "../../../../Dateprofile";
import BalanceGame from "../../games/BalanceGame/BalanceGame";
import UpDown from "../../games/Up&Down/UpDown";
import MulitpleChoice from "../../games/Multiple choice/MultipleChoice"
import Scope from "../../games/Scope/Scope";
import ChooseScore from "../../games/ChooseScore/ChooseScore";

function Tabmenu(){
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
                    <li className={parseInt(tabmenu) === 0 ? "on":""} onClick={() => setTabmenu(parseInt(0))}><a>밸런스 게임</a></li>
                    <li className={parseInt(tabmenu) === 1 ? "on":""} onClick={() => setTabmenu(parseInt(1))}><a>UP&DOWN</a></li>
                    <li className={parseInt(tabmenu) === 2 ? "on":""} onClick={() => setTabmenu(parseInt(2))}><a>객관식 선택</a></li>
                    <li className={parseInt(tabmenu) === 3 ? "on":""} onClick={() => setTabmenu(parseInt(3))}><a>별점 리뷰</a></li>
                    <li className={parseInt(tabmenu) === 4 ? "on":""} onClick={() => setTabmenu(parseInt(4))}><a>점수 선택</a></li>
                </ul>

                {tabmenu === 0 ? <BalanceGame/> : tabmenu === 1 ? <UpDown/> : tabmenu === 2 ? <MulitpleChoice/> : tabmenu === 3 ? <Scope/> : tabmenu === 4 && <ChooseScore/>}
            </div>
        </>
    )
}

export default Tabmenu;