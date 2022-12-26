import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

const SidebarMenu = [
    {
        title:"기본 관리",
        icon: <MdIcons.MdOutlineSettings/>,
    },
    {
        title:"회원 관리",
        icon: <RiIcons.RiUserLine/>,
    },
    {
        title:"1차 폴",
        icon: <AiIcons.AiOutlineUnorderedList/>,
    },
    {
        title:"2차 폴",
        icon: <BsIcons.BsListCheck/>,
    },
    
]

export default SidebarMenu;