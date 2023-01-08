import React from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import "./components/css/total.css";
import ScrollToTop from "./ScrollToTop";
import Login from "./components/Login";
import Dashboard from "./components/Menus/Basic management/Dashboard";
import Site from "./components/Menus/Basic management/Site Basic Information/Site";
import Popup from "./components/Menus/Basic management/Pop-up/Popup";
import Push from "./components/Menus/Basic management/Push Notification Management/Push";
import Notice from "./components/Menus/Basic management/Notice Event/Notice";
import ForbiddenWords from "./components/Menus/Basic management/forbidden word management/ForbiddenWords";
import Poll1 from "./components/Menus/poll/PollList/Poll1";
import Fullmember from "./components/Menus/Member management/Full member information/Fullmember";
import Log from "./components/Menus/Member management/Log management/Log";
import WithdrawalMembers from "./components/Menus/Member management/Manage withdrawal members/WithdrawalMembers";
import Point from "./components/Menus/Member management/Point management/Point";
import WithdrawalApplication from "./components/Menus/Member management/Withdrawal application management/WithdrawalApplication";
import ApplicationList from "./components/Menus/poll/application list/ApplicationList";
import ClosedList from "./components/Menus/poll/closed list/ClosedList";
import FullList from "./components/Menus/poll/full list/FullList";
import ProgressingList from "./components/Menus/poll/list in progress/ProgressingList";
import WaitingList from "./components/Menus/poll/waiting list/WaitingList";
import ClosedList2 from "./components/Menus/poll2/closed list2/ClosedList2";
import FullList2 from "./components/Menus/poll2/full list2/FullList2";
import ProgressingList2 from "./components/Menus/poll2/list in progress2/ProgressingList2";
import WaitingList2 from "./components/Menus/poll2/waiting list2/WaitingList2";
import NoticeEdit from "./components/Menus/Basic management/Notice Event/Notice Edit/NoticeEdit";
import PushReport from "./components/Menus/Basic management/Push Notification Management/pushReport/PushReport";
import CreateNewPoint from "./components/Menus/Member management/Point management/create new point/CreateNewPoint";
import History from "./components/Menus/Member management/Point management/Point history management/History";
import PushSending from "./components/Menus/Basic management/Push Notification Management/push sending/PushSending";
import Tabmenu from "./components/Menus/poll/PollList/TabMenu/Tabmenu";
import PopupRegistration from "./components/Menus/Basic management/Pop-up/popup registration/PopupRegistration";
import MemberInformation from "./components/Menus/Member management/Full member information/Member information management/MemberInformation";
import HistoryMangement from "./components/Menus/Member management/Withdrawal application management/Withdrawal request history/HistoryManagement";
import MemberInfo from "./components/Menus/Member management/Manage withdrawal members/Withdrawal Member Info/MemberInfo";
import MemberHistory from "./components/Menus/Member management/Manage withdrawal members/Withdrawal Member History/MemberHistory";
import Correct from "./components/Menus/poll/PollList/Correct/Correct";
import ECorrect from "./components/Menus/Basic management/Notice Event/Notice Edit/Correct/ECorrect";
import NCorrect from "./components/Menus/Basic management/Notice Event/Notice Edit/Correct/NCorrect";
import PopupCorrect from "./components/Menus/Basic management/Pop-up/Correct.js/PopupCorrect";

import Poll2 from "./components/Menus/poll2/PollList2/Poll2";
import Tabmenu2 from "./components/Menus/poll2/PollList2/TabMenu2/Tabmenu2";

function App(){
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Login />}/>
                
                {/* 기본 관리 */}
                <Route path="dashboard" element={<Dashboard />}/>
                    <Route path="site-basics" element={<Site/>}/>
                    <Route path="popup-list" element={<Popup/>}/>
                        <Route path="popup-list/popup-registration" element={<PopupRegistration/>}/>
                        <Route path="popup-list/popup-correct" element={<PopupCorrect/>}/>

                    <Route path="push-notification" element={<Push/>}/>
                        <Route path="push-notification/push-report" element={<PushReport/>}/>
                        <Route path="push-notification/push-sending" element={<PushSending/>}/>

                    <Route path="notice-event" element={<Notice/>}/>
                        <Route path="notice-event/notice-edit" element={<NoticeEdit/>}/>
                        <Route path="notice-event/event-correct" element={<ECorrect/>}/>
                        <Route path="notice-event/notice-correct" element={<NCorrect/>}/>

                    <Route path="forbidden-words" element={<ForbiddenWords/>}/>

                {/* 회원 관리*/}
                <Route path="member" element={<Fullmember/>}/>
                    <Route path="member/member-information" element={<MemberInformation/>}/>
                    <Route path="point" element={<Point/>}/>
                        <Route path="point/create-newpoint" element={<CreateNewPoint/>}/>
                        <Route path="point/history" element={<History/>}/>

                    <Route path="withdrawal" element={<WithdrawalApplication/>}/>
                        <Route path="withdrawal/withdrawal-management" element={<HistoryMangement/>}/>
                    <Route path="log" element={<Log/>}/>
                    <Route path="withdrawal-member" element={<WithdrawalMembers/>}/>
                        <Route path="withdrawal-member/member-information" element={<MemberInfo/>}/>
                        <Route path="withdrawal-member/member-information/member-history" element={<MemberHistory/>}/>

                {/* 1차 폴 */}
                <Route path="poll-totallist" element={<Poll1/>}/>
                    <Route path="poll-totallist/poll-gamelist" element={<Tabmenu/>}/>
                    <Route path="poll-totallist/poll-correct" element={<Correct/>}/>

                <Route path="full-list1" element={<FullList/>}/>
                <Route path="waiting-list1" element={<WaitingList/>}/>
                <Route path="ing-list1" element={<ProgressingList/>}/>
                <Route path="closed-list1" element={<ClosedList/>}/>
                <Route path="application-list1" element={<ApplicationList/>}/>

                {/* 2차 폴 */}
                <Route path="poll-totallist2" element={<Poll2/>}/>
                    <Route path="poll-totallist2/poll-gamelist2" element={<Tabmenu2/>}/>

                <Route path="full-list2" element={<FullList2/>}/>
                <Route path="waiting-list2" element={<WaitingList2/>}/>
                <Route path="ing-list2" element={<ProgressingList2/>}/>
                <Route path="closed-list2" element={<ClosedList2/>}/>

                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>}/>
            </Routes>
        </BrowserRouter>
    )
        
}

export default App;