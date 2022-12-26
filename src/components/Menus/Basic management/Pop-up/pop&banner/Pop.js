import React, {useState} from "react";
import {Link} from "react-router-dom";

function Pop(){
    const [popup, setPopup] = useState(false);

    return (
        <>
            <section id="popup_list">
                <div className="search-result">
                    <div className="sel-tpye">
                        <p>전체:<span>50</span>건</p>
                    </div>

                    <div className="sel-number">
                        <select>
                            <option value="10개씩 보기">10개씩 보기</option>
                            <option value="20개씩 보기">20개씩 보기</option>
                            <option value="50개씩 보기">50개씩 보기</option>
                            <option value="100개씩 보기">100개씩 보기</option>
                        </select>
                    </div>
                </div>

                <table>
                    <colgroup>
                        <col className="num" />
                        <col className="num" />
                        <col />
                        <col className="state" />
                        <col className="date" />
                        <col className="state" />
                        <col className="management" />
                    </colgroup>

                    <thead>
                        <tr>
                            <th scope="col">NO.</th>
                            <th scope="col">분류</th>
                            <th scope="col">제목</th>
                            <th scope="col">게시 상태</th>
                            <th scope="col">게시 시간</th>
                            <th scope="col">등록일</th>
                            <th scope="col">관리</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="num">04</td>
                            <td className="num">팝업</td>
                            <td>팝업 제목 입니다.</td>
                            <td className="state"><span className="state">검수 대기</span></td>
                            <td className="date">2022.10.01 12:46</td>
                            <td className="state">2022.10.01</td>
                            <td className="management">
                                <a href="#" className="btn btnCF">수정</a>
                                <a href="#" className="btn btnL">삭제</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="num">03</td>
                            <td className="num">팝업</td>
                            <td>팝업 제목 입니다.</td>
                            <td className="state"><span className="state ongoing">게시중</span></td>
                            <td className="date">2022.10.01 12:46</td>
                            <td className="state">2022.10.01</td>
                            <td className="management">
                                <a href="#" className="btn btnCF">수정</a>
                                <a href="#" className="btn btnL">삭제</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="num">02</td>
                            <td className="num">팝업</td>
                            <td>팝업 제목 입니다.</td>
                            <td className="state"><span className="state complete">검수 중지</span></td>
                            <td className="date">2022.10.01 12:46</td>
                            <td className="state">2022.10.01</td>
                            <td className="management">
                                <a href="#" className="btn btnCF">수정</a>
                                <a href="#" className="btn btnL">삭제</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="num">01</td>
                            <td className="num">팝업</td>
                            <td>팝업 제목 입니다.</td>
                            <td className="state"><span className="state complete">검수 중지</span></td>
                            <td className="date">2022.10.01 12:46</td>
                            <td className="state">2022.10.01</td>
                            <td className="management">
                                <a href="#" className="btn btnCF">수정</a>
                                <a href="#" className="btn btnL">삭제</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="grid-bottom">
                    <a className="btn" onClick={() => setPopup(!popup)}>팝업 순서 관리</a>
                </div>
            </section>

            <section id="popup_btn-wrap">
                <Link to="/popuplist/popupregistration" className="btn btnCF">팝업 등록</Link>
            </section>

            <div id="popup_popup" className={!popup ? "popup_pop1" : "popup_pop1 on"}>
                <div>
                    <h1>팝업 순서 관리</h1>

                    <div className="cont">
                        <ul className="pop-list">
                            <li>
                                <div className="desc">
                                    <p className="chk"><input type="checkbox" id="chk1"/><label htmlFor="chk1">1</label></p>
                                    <p className="title">팝업 제목 입니다.</p>
                                </div>
                                <div className="thumb"><img src="./img/img_popup.jpg" /></div>
                            </li>
                            <li>
                                <div className="desc">
                                    <p className="chk"><input type="checkbox" id="chk2" /><label htmlFor="chk2">2</label></p>
                                    <p className="title">팝업 제목 입니다.</p>
                                </div>
                                <div className="thumb"><img src="./img/img_popup.jpg" /></div>
                            </li>
                            <li>
                                <div className="desc">
                                    <p className="chk"><input type="checkbox" id="chk3"/><label htmlFor="chk3">3</label></p>
                                    <p className="title">팝업 제목 입니다.</p>
                                </div>
                                <div className="thumb"><img src="./img/img_popup.jpg" /></div>
                            </li>
                        </ul>
                    </div>

                    <div className="sequence">
                        <button type="button" className="btn-up">위로</button>
                        <button type="button" className="btn-down">아래로</button>
                        <button type="button" className="btn-top">가장 위로</button>
                        <button type="button" className="btn-bottom">가장 아래로</button>
                    </div>

                    <button className="colse_pop" onClick={() => setPopup(!popup)}>닫기</button>
                </div>
            </div>
        </>
    )
}

export default Pop;