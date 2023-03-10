import React from "react";
import "./Info.css";

function Info(){
    return (
        <>
            <div className="contents">
                <h2>Dashboard</h2>

                <section className="m01">
                    <ul>
                        <li>
                            <dl>
                                <dt><span>INSTALL</span><span>NEW</span></dt>
                                <dd><span>12,345</span><span>123</span></dd>
                            </dl>
                            <span className="proportion up"><i><img src="/img/ico_proportion.svg" alt="" /></i>123</span>
                        </li>
                        <li>
                            <dl>
                                <dt><span>RE-INSTALL</span><span>NEW</span></dt>
                                <dd><span>123</span><span>2</span></dd>
                            </dl>
                            <span className="proportion down"><i><img src="/img/ico_proportion.svg" alt="" /></i>2</span>
                        </li>
                        <li>
                            <dl>
                                <dt><span>USER</span><span>NEW</span></dt>
                                <dd><span>1,234</span><span>34</span></dd>
                            </dl>
                            <span className="proportion up"><i><img src="/img/ico_proportion.svg" alt="" /></i>34</span>
                        </li>
                        <li>
                            <dl>
                                <dt><span>POINT</span></dt>
                                <dd><span>12,345</span></dd>
                            </dl>
                            <span className="proportion up"><i><img src="/img/ico_proportion.svg" alt="" /></i>123</span>
                        </li>
                    </ul>
                </section>

                <section className="m02">
                    <ul>
                        <li className="point-wrap">
                            <div className="title">
                                <span>POINT</span>
                                <p>?????? ????????????<strong>23</strong>???</p>
                                <a href="#" className="more">?????????</a>
                            </div>

                            <ul className="desc">
                                <li>?????????1<span className="result stand">??????</span></li>
                                <li>?????????2<span className="result complete">??????</span></li>
                                <li>?????????3<span className="result fail">??????</span></li>
                            </ul>
                        </li>

                        <li className="point-wrap">
                            <div className="title">
                                <span>PUSH</span>
                                <p>?????? ?????? ??????<strong>2</strong>???</p>
                                <a href="#" className="more">?????????</a>
                            </div>

                            <ul className="desc">
                                <li>?????? ?????? 1<span className="result stand">??????</span></li>
                                <li>?????? ?????? 2<span className="result complete">??????</span></li>
                                <li>?????? ?????? 3<span className="result fail">??????</span></li>
                            </ul>
                        </li>

                        <li className="graph-wrap">
                            <div className="title">DAU<span>(Daily)</span></div>
                            <div className="desc"></div>
                        </li>

                        <li className="graph-wrap ml0">
                            <div className="title">WAU<span>(Weekly)</span></div>
                            <div className="desc"></div>
                        </li>

                        <li className="graph-wrap">
                            <div className="title">MAU<span>(Monthly)</span></div>
                            <div className="desc"></div>
                        </li>

                        <li className="graph-wrap full">
                            <div className="title">FOLL ??????<strong>??? ??????<em>1,234</em>???</strong></div>
                            <div className="desc"></div>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Info;