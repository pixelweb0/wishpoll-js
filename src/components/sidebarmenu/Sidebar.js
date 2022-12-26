import React from "react";
import SidebarData from "./SidebarData";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

function Sidebar(){
    return(
        <ul className="menu">
            {SidebarData.map(item => <SidebarItem key={item.title} item={item}/>)} 
        </ul>
    )
}

export default Sidebar;