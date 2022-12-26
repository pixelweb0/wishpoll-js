import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Popup.css";
import client from "../../../client";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
// import Pop from "./pop&banner/Pop";
// import Banner from "./pop&banner/Banner";
import moment from "moment";

function PopupData(){
    const navigate = useNavigate();

    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

    const [value , setValue] = useState('분류');

    const [select, setSelect] = useState('제목')

    const [search, setSearch] = useState('');
    const handleSearch = () => {
        console.log("입력한 값:", search)
        console.log("분류:", value)
        console.log('게시 시작일:', moment(Start_Date).format('YYYY/MM/DD'), '게시 종료일:', moment(End_Date).format("YYYY/MM/DD"))
        console.log("제목:", select)
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            handleSearch()
        }
    }

    const [popup, setPopup] = useState(false);

    const [bannerlist, setBannerlist] = useState([]);
    
    useEffect(() => {
        client.get('banner/list')
        .then(({data}) => setBannerlist(data))
    }, [])

    return (
        <>
            <div className="contents">
                <section id="popup_search">
                    <div className="search-form">
                        <ul>
                            <li>
                                {/* <select onChange={(e) => setValue(e.target.value)}>
                                    <option value="분류">분류</option>
                                    <option value="팝업">팝업</option>
                                    <option value="배너">배너</option>
                                </select> */}

                                <div>
                                    <h4>게시일</h4>
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
                                        className="form-control start-date date"
                                        selected={Start_Date}
                                        onChange={date => setStart_Date(date)}
                                        selectsStart
                                        startDate={Start_Date}
                                        endDate={End_Date}
                                        locale={ko}
                                        dateFormat="yyyy년 MM월 dd일 (eee)"
                                        minDate={new Date()}
                                        closeOnScroll={true}
                                    /> */}
                                    <span>~</span>
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
                                    /> */}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="search-box">
                        <select>
                            <option value="제목" onChange={e => setSelect(e.target.value)}>제목</option>
                        </select>
                        <input type="text" className="search-val" placeholder="검색어를 입력해주세요." onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
                    </div>
                </section>

                {/* {value === "분류" || value === "팝업" ? <Pop/> : value === "배너" && <Banner/>} */}


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
                            {bannerlist.map((bdata, Banner_Idx) => (
                                <tr key={Banner_Idx} onClick={() => {
                                    navigate("/popup-list/popup-correct", {
                                        state: {
                                            data: bdata.Banner_Idx
                                        }
                                    })
                                }}>
                                    <td className="num">{bdata.Banner_Idx}</td>
                                    <td className="num">-</td>
                                    <td>{bdata.Title}</td>
                                    <td className="state"><span className="state">-</span></td>
                                    <td className="data">-</td>
                                    <td className="state">{moment(bdata.Create_Date).format('YYYY/MM/DD')}</td>
                                    <td className="management">
                                        <a href="#" className="btn btnCF">수정</a>
                                        <a href="#" className="btn btnL">삭제</a>
                                    </td>
                                </tr>
                            ))}



                        {/* <tr>    
                                <td className="num">04</td>
                                <td className="num">배너</td>
                                <td>배너 제목 입니다.</td>
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
                                <td className="num">배너</td>
                                <td>배너 제목 입니다.</td>
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
                                <td className="num">배너</td>
                                <td>배너 제목 입니다.</td>
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
                                <td className="num">배너</td>
                                <td>배너 제목 입니다.</td>
                                <td className="state"><span className="state complete">검수 중지</span></td>
                                <td className="date">2022.10.01 12:46</td>
                                <td className="state">2022.10.01</td>
                                <td className="management">
                                    <a href="#" className="btn btnCF">수정</a>
                                    <a href="#" className="btn btnL">삭제</a>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>

                    <div className="grid-bottom">
                        <a className="btn" onClick={() => setPopup(!popup)}>배너 순서 관리</a>
                    </div>
                </section>

                <section id="popup_btn-wrap">
                    <Link to="/popup-list/popup-registration" className="btn btnCF">배너 등록</Link>
                </section>


                <div id="popup_popup" className={!popup ? "popup_pop1" : "popup_pop1 on"}>
                    <div>
                        <h1>배너 순서 관리</h1>

                        <div className="cont">
                            <ul className="pop-list">
                                <li>
                                    <div className="desc">
                                        <p className="chk"><input type="checkbox" id="chk1" /><label htmlFor="chk1">1</label></p>
                                        <p className="title">배너 제목 입니다.</p>
                                    </div>
                                    <div className="thumb"><img src="./img/img_popup.jpg" /></div>
                                </li>
                                <li>
                                    <div className="desc">
                                        <p className="chk"><input type="checkbox" id="chk2" /><label htmlFor="chk2">2</label></p>
                                        <p className="title">배너 제목 입니다.</p>
                                    </div>
                                    <div className="thumb"><img src="./img/img_popup.jpg" /></div>
                                </li>
                                <li>
                                    <div className="desc">
                                        <p className="chk"><input type="checkbox" id="chk3" /><label htmlFor="chk3">3</label></p>
                                        <p className="title">배너 제목 입니다.</p>
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
            </div>
        </>
    )
}

export default PopupData;