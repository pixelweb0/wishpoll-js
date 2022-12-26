import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

const SidebarData = [
    {
        title:"기본 관리",
        icon: <MdIcons.MdOutlineSettings size="22"/>,
        path:"/dashboard",
        childrens:[
            {
                id: 1,
                title:"사이트 기본 정보",
                path:"/site-basics"
            },
            {
                id: 2,
                title:"팝업/리스트 관리",
                path:"/popup-list"
            },
            {
                id: 3,
                title:"푸시 알림 관리",
                path:"/push-notification"
            },
            {
                id: 4,
                title:"공지사항/이벤트",
                path:"/notice-event"
            },
            {
                id: 5,
                title:"금지어 관리",
                path:"/forbidden-words"
            }
        ]
    },
    {
        title:"회원 관리",
        icon: <RiIcons.RiUserLine size="22"/>,
        childrens:[
            {
                id: 1,
                title:"전체 회원 정보",
                path:"/member"
            },
            {
                id: 2,
                title:"포인트 관리",
                path:"/point"
            },
            {
                id: 3,
                title:"출금 신청 관리",
                path:"/withdrawal"
            },
            {
                id: 4,
                title:"로그 관리",
                path:"/log"
            },
            {
                id: 5,
                title:"탈퇴 회원 관리",
                path:"/withdrawal-member"
            }
        ]
    },
    {
        title:"1차 폴",
        icon: <AiIcons.AiOutlineUnorderedList size="22"/>,
        path:"/poll-totallist",
        childrens:[
            {
                id: 1,
                title:"전체 리스트",
                path:"/full-list1"
            },
            {
                id: 2,
                title:"대기중 리스트",
                path:"/waiting-list1"
            },
            {
                id: 3,
                title:"진행중 리스트",
                path:"/ing-list1"
            },
            {
                id: 4,
                title:"종료된 리스트",
                path:"/closed-list1"
            },
            {
                id: 5,
                title:"신청 리스트",
                path:"/application-list1"
            }
        ]
    },
    {
        title:"2차 폴",
        icon: <BsIcons.BsListCheck size="22"/>,
        childrens:[
            {
                id: 1,
                title:"전체 리스트",
                path:"/full-list2"
            },
            { 
                id: 2,
                title:"대기중 리스트",
                path:"/waiting-list2"
            },
            {
                id: 3,
                title:"진행중 리스트",
                path:"/ing-list2"
            },
            {
                id: 4,
                title:"종료된 리스트",
                path:"/closed-list2"
            }
        ]
    },
    
]

export default SidebarData;