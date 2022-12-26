import React, {useState} from "react";
import "./CreateNewPoint.css";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';

function CreateNewPointData(){
    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

    const [popup1, setPopup1] = useState(false);


    return (
        <>
            <div className="contents">
                <h3 className="create-point_h">포인트 신규 내역 생성</h3>

                <section id="create-point_write">
                    <div className="item">
                        <p className="title">지급 일자</p>
                        <div className="desc">
                            <div className="input-group">
                                <input
									type="date"
									className="form-control start-date date"
									format="yyyy-MM-dd"
									locale={ko}
									min={new Date().toISOString().slice(0, 10)}
									onChange={(e) => setStart_Date(e.target.value)}
									name="datepicker"
									value={Start_Date || ''}
									placehoder="폴 시작일"
								/>

                                {/* <DatePicker
                                    className="w180 form-control start-date date"
                                    selected={Start_Date}
                                    onChange={date => setStart_Date(date)}
                                    selectsStart
                                    startDate={Start_Date}
                                    endDate={End_Date}
                                    locale={ko}
                                    dateFormat="yyyy년 MM월 dd일 (eee)"
                                    minDate={new Date()}
                                    closeOnScroll={true}
                                    placeholderText="폴 시작일"
                                /> */}
                                {/* <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <span className="txt">시</span>
                                <select>
                                    <option value="00">00</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                    <option value="60">60</option>
                                </select>
                                <span className="txt">분</span> */}
                                <span className="aa">~</span>
                                <input
									type="date"
									className="form-control end-date date"
									format="yyyy-MM-dd"
									name="datepicker"
									min={new Date().toISOString().slice(0, 10)}
									value={End_Date || ''}
									placehoder="폴 종료일"
									locale={ko}
									onChange={(e) => setEnd_Date(e.target.value)}
								/>

                                {/* <DatePicker
									className="form-control end-date date"
									selected={End_Date}
									onChange={date => setEnd_Date(date)}
									selectsEnd
									startDate={Start_Date}
									endDate={End_Date}
									minDate={Start_Date}
									locale={ko}
									dateFormat="yyyy년 MM월 dd일 (eee)"
									closeOnScroll={true}
                                    placeholderText="폴 종료일"
								/> */}
                                {/* <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <span className="txt">시</span>
                                <select>
                                    <option value="00">00</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                    <option value="60">60</option>
                                </select>
                                <span className="txt">분</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="title">거래유형</p>
                        <div className="desc">
                            <div><input type="text" value="출금" disabled /></div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="title">내역</p>
                        <div className="desc">
                            <div><input type="text" placeholder="내역" /></div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="title">거래 포인트</p>
                        <div className="desc">
                            <div><input type="text" placeholder="1,000" /></div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="title">수령인 선택</p>
                        <div className="desc"><label className="bnt user-pop" onClick={() => setPopup1(!popup1)}>회원 선택</label></div>
                    </div>
                    <div className="item">
                        <p className="title">수령인 정보 (총 <em>30</em>명)</p>
                        <div className="desc">
                            <table>
                                <colgroup>
                                    <col className="num" />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>

                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <input type="checkbox" id="chk-all"/><label htmlFor="chk-all" className="chk-all1"></label>
                                        </th>
                                        <th scope="col">NO.</th>
                                        <th scope="col">아이디</th>
                                        <th scope="col">이름</th>
                                        <th scope="col">닉네임</th>
                                        <th scope="col">연락처</th>
                                        <th scope="col">보유 포인트</th>
                                        <th scope="col">관리</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="num"><input type="checkbox" id="chk1" name="chk" /><label htmlFor="chk1"></label></td>
                                        <td>04</td>
                                        <td>wish_poll</td>
                                        <td>홍길동</td>
                                        <td>김뽕뽕</td>
                                        <td>010-1234-5678</td>
                                        <td>3,000</td>
                                        <td><a className="btn btnL">삭제</a></td>
                                    </tr>
                                    <tr>
                                        <td className="num"><input type="checkbox" id="chk2" name="chk" /><label htmlFor="chk2"></label></td>
                                        <td>03</td>
                                        <td>wish_poll</td>
                                        <td>홍길동</td>
                                        <td>김뽕뽕</td>
                                        <td>010-1234-5678</td>
                                        <td>3,000</td>
                                        <td><a className="btn btnL">삭제</a></td>
                                    </tr>
                                    <tr>
                                        <td className="num"><input type="checkbox" id="chk3" name="chk" /><label htmlFor="chk3"></label></td>
                                        <td>02</td>
                                        <td>wish_poll</td>
                                        <td>홍길동</td>
                                        <td>김뽕뽕</td>
                                        <td>010-1234-5678</td>
                                        <td>3,000</td>
                                        <td><a className="btn btnL">삭제</a></td>
                                    </tr>
                                    <tr>
                                        <td className="num"><input type="checkbox" id="chk4" name="chk" /><label htmlFor="chk4"></label></td>
                                        <td>01</td>
                                        <td>wish_poll</td>
                                        <td>홍길동</td>
                                        <td>김뽕뽕</td>
                                        <td>010-1234-5678</td>
                                        <td>3,000</td>
                                        <td><a className="btn btnL">삭제</a></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </section>

                <section id="create-point_btn-wrap">
                    <a href="#" className="btn btnL">목록보기</a>
                    <a href="#" className="btn btnCF">저장</a>
                </section>
            </div>

            <div id="create-point_popup" className={!popup1 ? "create-point_pop1" : "create-point_pop1 on"}>
                <div>
                    <h1>회원 선택</h1>

                    <div className="cont">
                        <div className="sch-pop">
                            <select>
                                <option value="선택">선택</option>
                                <option value="이름">제목</option>
                                <option value="닉네임">내용</option>
                                <option value="연락처">연락처</option>
                            </select>
                            <input type="text" className="search-val" placeholder="검색어를 입력해주세요." />
                            <p>선택 회원: wish, wishpoll 외 5명</p>
                        </div>

                        <table>
                            <colgroup>
                                <col />
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
                                    <th scope="col">닉네임</th>
                                    <th scope="col">연락처</th>
                                    <th scope="col">보유 포인트</th>
                                    <th scope="col">선택</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>06</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>미니</td>
                                    <td>010-1234-5678</td>
                                    <td>1,000</td>
                                    <td><input type="checkbox" id="chk1" name="chk" /><label htmlFor="chk1"></label></td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>미니</td>
                                    <td>010-1234-5678</td>
                                    <td>1,000</td>
                                    <td><input type="checkbox" id="chk2" name="chk" /><label htmlFor="chk2"></label></td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>미니</td>
                                    <td>010-1234-5678</td>
                                    <td>1,000</td>
                                    <td><input type="checkbox" id="chk3" name="chk" /><label htmlFor="chk3"></label></td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>미니</td>
                                    <td>010-1234-5678</td>
                                    <td>1,000</td>
                                    <td><input type="checkbox" id="chk4" name="chk" /><label htmlFor="chk4"></label></td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>미니</td>
                                    <td>010-1234-5678</td>
                                    <td>1,000</td>
                                    <td><input type="checkbox" id="chk5" name="chk" /><label htmlFor="chk5"></label></td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>wish</td>
                                    <td>김미미</td>
                                    <td>미니</td>
                                    <td>010-1234-5678</td>
                                    <td>1,000</td>
                                    <td><input type="checkbox" id="chk6" name="chk" /><label htmlFor="chk6"></label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button className="colse_pop" onClick={() => setPopup1(!popup1)}>닫기</button>
                </div>
            </div>
        </>
    )
}

export default CreateNewPointData;