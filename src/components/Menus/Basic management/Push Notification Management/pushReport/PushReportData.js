import React, { useState } from "react";
import "./PushReport.css";

function PushReportData(){
    const [popup1, setPopup1] = useState(false);
    const [popup2, setPopup2] = useState(false);

    return (
        <>
            <div className="contents">
                <h3 className="push-report_h">푸시 메시지 리포트
                    <p className="push-report_total">
                        <span>No. 123</span>
                        <span>발송수: 1,579건</span>
                    </p>
                </h3>

                <section id="push-report_write">
                    <div className="left">
                        <div className="item type2">
                            <p className="title">기본정보</p>
                            <div className="desc">
                                <ol>
                                    <li><span>유형</span>TEXT/RICH</li>
                                    <li><span>제목</span>제목</li>
                                    <li><span>링크</span>Key / Value<br />- 링크: abcdefg/hijk/lmn</li>
                                </ol>
                            </div>
                        </div>
                        <div className="item type2">
                            <p className="title">메시지 발송 내역</p>
                            <div className="desc">
                                <ol>
                                    <li><span>발송 범위</span>TEXT/RICH</li>
                                    <li><span>발송 디바이스</span>Android / iOS / Android+iOS</li>
                                    <li><span>발송 대상</span>전체 사용자/인구통계 타겟/특정 그룹<br />- 인구통계 타겟 or 특정 그룹 조건</li>
                                    <li><span>발송 기간</span>yyyy-mm-dd hh:mm</li>
                                    <li><span>발송 대상 수</span>N,nnn 명</li>
                                </ol>
                            </div>
                        </div>
                        <div className="item type2">
                            <p className="title">메시지 상세 통계</p>
                            <div className="desc">
                                <ol>
                                    <li><span>발송 수</span>1,234</li>
                                    <li><span>클릭 수</span>1,030</li>
                                    <li><span>실패 수</span>10</li>
                                </ol>
                            </div>
                        </div>
                        <div className="item type2">
                            <p className="title">메시지 상세 통계</p>
                            <div className="desc">
                                <ol>
                                    <li><span>발송 수</span>1,234<a className="pop_send" onClick={() => setPopup1(!popup1)}>목록보기</a></li>
                                    <li><span>클릭 수</span>1,030</li>
                                    <li><span>실패 수</span>10<a className="pop_fail" onClick={() => setPopup2(!popup2)}>목록보기</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="right preview">
                        <h4>푸시 메시지 내용 보기</h4>
                        <div className="phone">
                            <div className="desc"></div>
                        </div>
                    </div>
                </section>
            </div>

            
            <div id="push-report_popup" className={popup1 ? "push-report_pop1 on" : "push-report_pop1"}>
                <div>
                    <h1>발송 대상자 리스트</h1>

                    <div className="cont">
                        <table>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>

                            <thead>
                                <tr>
                                    <th scope="col">NO.</th>
                                    <th scope="col">아이디</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">나이</th>
                                    <th scope="col">성별</th>
                                    <th scope="col">관심분야</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>09</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>08</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>23</td>
                                    <td>여자</td>
                                    <td>뷰티</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button className="colse_pop" onClick={() => setPopup1(!popup1)}>닫기</button>
                </div>
            </div>


            <div id="push-report_popup" className={popup2 ? "push-report_pop2 on" : "push-report_pop2"}>
                <div>
                    <h1>발송 실패 리스트</h1>

                    <div className="cont">
                        <table>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>

                            <thead>
                                <tr>
                                    <th scope="col">NO.</th>
                                    <th scope="col">아이디</th>
                                    <th scope="col">에러메시지</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>09</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>08</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>07</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>wish</td>
                                    <td>오류로 인해 발송이 실패 되었습니다.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button className="colse_pop" onClick={() => setPopup2(!popup2)}>닫기</button>
                </div>
            </div>
        </>
    )
}

export default PushReportData;