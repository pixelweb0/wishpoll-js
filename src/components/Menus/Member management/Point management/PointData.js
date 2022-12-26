import React, { useEffect, useState } from "react";
import client from "../../../client";
import { useNavigate } from "react-router-dom";
import "./Point.css";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import { Link } from "react-router-dom";
import moment from "moment";

function PointData(){
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

	const [pointList, setpointList] = useState([]);
	useEffect(() => {
		async function listData() {
			  const response = await client.get("/point/list")
			  setpointList(response.data)
			  }
			  listData()
			},[])

	//페이지 이동을위해 사용 
	const navigate = useNavigate();

			console.log(pointList);

			// 여기도 해당 값들 정리해서 넣어주세요~ map 으로 만 돌리면됨 ! 


	// useEffect(() => {
	// 	client.get("point/list").then(({data}) =>
	// 	 setPolllist(data)
	// 	 )}, [])
		




    return (
        <div className="contents">
			<section id="point_search">
				<div className="search-form">
					<ul>
						<li>
							<select onChange={e => setValue(e.target.value)}>
								<option value="거래유형별보기">거래유형별보기</option>
								<option value="지급">지급</option>
								<option value="출금">출금</option>
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
						<option value="제목">제목</option>
						<option value="내용">내용</option>
						<option value="제목+내용">제목+내용</option>
					</select>
					<input type="text" className="search-val" name="" placeholder="검색어를 입력해주세요." onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
				</div>
			</section>

			<section id="point_list">
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
						<col className="state" />
						<col className="state" />
						<col />
						<col className="state" />
						<col />
						<col className="state" />
						<col className="management" />
					</colgroup>

					<thead>
						<tr>					
							<th scope="col">NO.</th>
							<th scope="col">날짜</th>
							<th scope="col">시간</th>
							<th scope="col">거래유형</th>
							<th scope="col">수령 아이디</th>
							<th scope="col">이름</th>
							<th scope="col">내역</th>
							<th scope="col">포인트</th>
							<th scope="col">관리</th>
						</tr>
					</thead>

					<tbody>
					
						{/* 페이징, 페이지네이션 처리 */}
						{pointList.map((pdata, Point_Idx)=>(
							
							<tr key={Point_Idx} onClick={() => {
									navigate("/point/history", {
										state: {
											data: pdata.Point_Idx
										}
									})
								}}>
	
								<td className="num">{pdata.Point_Idx}</td>
								<td className="state">{moment(pdata.Submit_Date).format("YYYY-MM-DD")}</td>
								<td className="state">{moment(pdata.Submit_Date).format("HH:mm:ss")}</td>
								<td className="state"><span className={pdata.Point_State === 0 ? "state ongoing" : "state complete"}>{pdata.Point_State === 0 ? "적립" : "출금"}</span></td>
								{/* 거래 종류 (0: 적립 / 1: 출금)   거래명 (적립(프로젝트 이름) / 출금(네이버) / 출금(현금))   DB 참조 !! */}
								<td>{pdata.Nickname}</td>
								<td className="state">일단 공란</td>
								<td>{pdata.Point_Name}</td>
								<td className="state">{pdata.Point_Reward}</td>
								<td className="management">
									<a className="btn btnCF">보기</a>
									<a href="#" className="btn btnL">삭제</a>
								</td>
							</tr>
						))}
						<tr>
							<td className="num">01</td>
							<td className="state">2022-10-10</td>
							<td className="state">09:11:12</td>
							<td className="state"><span className="state ongoing">포인트 전환(네이버페이)</span></td>
							<td>wish_poll@naver.com</td>
							<td className="state">홍길동</td>
							<td>테스트 제목</td>
							<td className="state">2,000</td>
							<td className="management">
								<a href="#" className="btn btnCF">보기</a>
								<a href="#" className="btn btnL">삭제</a>
							</td>
						</tr>


					</tbody>
				</table>
			</section>

			<section id="point_btn-wrap">
				<Link to="/point/create-newpoint" className="btn btnCF">신규 내역 생성</Link>
			</section>
		</div>
    )
}

export default PointData;