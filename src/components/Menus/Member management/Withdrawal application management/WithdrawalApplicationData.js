import React, { useEffect, useState } from "react";
import client from "../../../client";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import "./WithdrawalApplication.css"
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

function WithdrawalApplicationData(){
    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

	const [value, setValue] = useState("거래유형별보기");

	const [select, setSelect] = useState("선택");

	const [search, setSearch] = useState("");

	const handleSearch = () => {
        console.log("입력한 값:", search)
        console.log("회원유형별보기:", value)
        console.log('게시 시작일:', moment(Start_Date).format('YYYY/MM/DD'), '게시 종료일:', moment(End_Date).format("YYYY/MM/DD"))
        console.log("선택:", select)
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    }


	
	const [outlist , setoutlist] = useState([]);
	useEffect(() => {
		async function listData() {
			const response = await client.get("/point/outlist")
			setoutlist(response.data)
			}
			listData()
		},[])

	console.log(outlist);
	console.log("콘솔확인하고 데이터 넣어주세요 : ) ");

	const navigate = useNavigate();
	

    return (
        <div className="contents">
			<section id="application_search">
				<div className="search-form">
					<ul>
						<li>
							<select onChange={e => setValue(e.target.value)}>
								<option value="상태별보기">상태별보기</option>
								<option value="대기">대기</option>
								<option value="완료">완료</option>
							</select>

							<div>
								<h4>날짜</h4>
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
					<select onChange={e => setSelect(e.target.value)}>
						<option value="선택">선택</option>
						<option value="아이디">아이디</option>
						<option value="이름">이름</option>
						<option value="포인트">포인트</option>
						<option value="신청 유형">신청 유형</option>
					</select>
					<input type="text" className="search-val" placeholder="검색어를 입력해주세요." onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
				</div>
			</section>

			<section id="application_list">
				<div className="search-result">
					<div className="sel-tpye">
						<p>전체:<span>3,543</span>건</p>
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
						<col className="state" />
						<col />
						<col className="state" />
						<col className="date" />
						<col className="state" />
						<col className="state" />
						<col className="management" />
					</colgroup>

					<thead>
						<tr>
							<th scope="col">NO.</th>
							<th scope="col">신청 유형</th>
							<th scope="col">아이디</th>
							<th scope="col">이름</th>
							<th scope="col">날짜</th>
							<th scope="col">포인트</th>
							<th scope="col">상태</th>
							<th scope="col">관리</th>
						</tr>
					</thead>

					<tbody>

						{outlist.map((pdata, Point_Idx) => (
							<tr key={Point_Idx} onClick={() => {
								navigate("/withdrawal/withdrawal-management", {
									state: {
										data: pdata.Point_Idx
									}
								})
							}}>
								<td className="num">{pdata.Point_Idx}</td>
								<td className="state"><span className={pdata.Point_Name === "제휴 포인트 전환" ? "state ongoing" : pdata.Point_Name === "리워드 출금" && "state complete"}>{pdata.Point_Name}</span></td>
								<td>{pdata.Nickname}</td>
								<td className="state">일단 공란</td>
								<td className="state">{moment(pdata.Submit_Date).format("YYYY-MM-DD HH:mm:ss")}</td>
								<td className="state">{pdata.Point_Reward}</td>
								<td className="state"><span className={pdata.Point_State === 0 ? "state writ" : pdata.Point_State === 1 && "state ongoing"}>{pdata.Point_State === 0 ? "대기" : pdata.Point_State === 1 && "완료"}</span></td>
								<td className="management">
									<a href="#" className="btn btnCF">보기</a>
									<a href="#" className="btn btnL">삭제</a>
								</td>
							</tr>
						))}




						<tr>
							<td className="num">03</td>
							<td className="state"><span className="state ongoing">포인트 전환(네이버페이)</span></td>
							<td>wish_poll@naver.com</td>
							<td className="state">홍길동</td>
							<td className="state">2022-10-01 09:12:35</td>
							<td className="state">2,000</td>
							<td className="state"><span className="state writ">대기</span></td>
							<td className="management">
								<Link to="/withdrawal/withdrawal-management" className="btn btnCF">보기</Link>
								<a href="#" className="btn btnL">삭제</a>
							</td>
						</tr>
						<tr>
							<td className="num">02</td>
							<td className="state"><span className="state complete">포인트 출금(계좌 출금)</span></td>
							<td>wish_poll@naver.com</td>
							<td className="state">홍길동</td>
							<td className="state">2022-10-01 09:12:35</td>
							<td className="state">2,000</td>
							<td className="state"><span className="state ongoing">완료</span></td>
							<td className="management">
								<a href="#" className="btn btnCF">보기</a>
								<a href="#" className="btn btnL">삭제</a>
							</td>
						</tr>
						<tr>
							<td className="num">01</td>
							<td className="state"><span className="state ongoing">포인트 전환(네이버페이)</span></td>
							<td>wish_poll@naver.com</td>
							<td className="state">홍길동</td>
							<td className="state">2022-10-01 09:12:35</td>
							<td className="state">2,000</td>
							<td className="state"><span className="state writ">대기</span></td>
							<td className="management">
								<a href="#" className="btn btnCF">보기</a>
								<a href="#" className="btn btnL">삭제</a>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
    )
}

export default WithdrawalApplicationData;