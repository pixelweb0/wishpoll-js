import React, { useEffect, useState } from "react";
import client from "../../../client";
import "./Poll1TotalList.css";
import { Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import { useNavigate } from "react-router-dom";

function Poll1TotalList(){
	const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

	const [value, setValue] = useState('진행상태');

	const [select, setSelect] = useState("선택");

	const [search, setSearch] = useState('');

	const [type, setType] = useState('')

	const handleSearch = () => {
		console.log('진행상태:', value)
        console.log("입력한 값:", search)
        console.log('게시 시작일:', moment(Start_Date).format('YYYY/MM/DD'), '게시 종료일:', moment(End_Date).format("YYYY/MM/DD"))
		console.log('선택:', select)
		console.log('유형:', type)
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    }

	const [polllist, setPolllist] = useState([]);
	useEffect(() => {
		client.get("primary-poll/list")
		.then(({data}) => setPolllist(data))
	}, [])

	const navigate = useNavigate();

    return (
        <div className="contents">
			<section id="poll1_search">
				<div className="search-form">
					<ul>
						<li>
							<select onChange={e => setValue(e.target.value)}>
								<option value="진행상태">진행상태</option>
								<option value="작성중">작성중</option>
								<option value="예약 대기">예약 대기</option>
								<option value="진행중">진행중</option>
								<option value="완료">완료</option>
							</select>

							<div>
								<h4>검색 기간</h4>
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
									placeholderText="폴 시작일"
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
									placeholderText="폴 종료일"
									closeOnScroll={true}
								/> */}
							</div>
						</li>

						<li>
							<h4>유형</h4>
							<div className="chk-radio-box">
								<span><input type="radio" id="chk-radio1" name="sch-type" /><label htmlFor="chk-radio1" onClick={e => setType(e.target.innerText)}>밸런스 게임</label></span>
								<span><input type="radio" id="chk-radio2" name="sch-type" /><label htmlFor="chk-radio2" onClick={e => setType(e.target.innerText)}>UP&DOWN</label></span>
								<span><input type="radio" id="chk-radio3" name="sch-type" /><label htmlFor="chk-radio3" onClick={e => setType(e.target.innerText)}>객관식 선택</label></span>
								<span><input type="radio" id="chk-radio4" name="sch-type" /><label htmlFor="chk-radio4" onClick={e => setType(e.target.innerText)}>별점 리뷰</label></span>
								<span><input type="radio" id="chk-radio5" name="sch-type" /><label htmlFor="chk-radio5" onClick={e => setType(e.target.innerText)}>점수 선택</label></span>
								<span><input type="radio" id="chk-radio6" name="sch-type" /><label htmlFor="chk-radio6" onClick={e => setType(e.target.innerText)}>A/B테스트 모음</label></span>
								<span><input type="radio" id="chk-radio7" name="sch-type" /><label htmlFor="chk-radio7" onClick={e => setType(e.target.innerText)}>간편 설문</label></span>
								<span><input type="radio" id="chk-radio8" name="sch-type" /><label htmlFor="chk-radio8" onClick={e => setType(e.target.innerText)}>스티커 퀘스트</label></span>
								<span><input type="radio" id="chk-radio9" name="sch-type" /><label htmlFor="chk-radio9" onClick={e => setType(e.target.innerText)}>미디어 업로드</label></span>
								<span><input type="radio" id="chk-radio10" name="sch-type" /><label htmlFor="chk-radio10" onClick={e => setType(e.target.innerText)}>리크루트</label></span>
							</div>
						</li>
					</ul>
				</div>

				<div className="search-box">
					<select onChange={e => setSelect(e.target.value)}>
						<option value="선택">선택</option>
						<option value="제목">제목</option>
						<option value="질문">질문</option>
					</select>
					<input type="text" className="search-val" placeholder="검색어를 입력해주세요." onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
				</div>
			</section>

			<section id="poll1_list">
				<div className="search-result">
					<div className="sel-tpye">
						<select>
							<option value="유영 구분">유영 구분</option>
							<option value="(1차기능) 폴">(1차기능) 폴</option>
							<option value="(2차기능) 폴">(2차기능) 폴</option>
						</select>
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
					<thead>
						<tr>
							<th scope="col">NO.</th>
							<th scope="col">진행 상태</th>
							<th scope="col">폴 제목</th>
							<th scope="col">폴 유형</th>
							<th scope="col">기간</th>
							<th scope="col">리워드</th>
							<th scope="col">참여인원수</th>
							<th scope="col">관리</th>
						</tr>
					</thead>

					<tbody>
						{polllist.map((qdata, Q_Idx)=>(
							<tr key={Q_Idx} name={Q_Idx} onClick={() => {
								navigate("/poll-totallist/poll-correct", {
									state: {
										data: qdata.Q_Idx
									}
								})
							}}>
								<td className="num">{qdata.Q_Idx}</td>
								<td className="state"><span className={qdata.State === 0 ? "state state" : qdata.State === 1 ? "state ongoing" : "state complete"}>{qdata.State === 0 ? "작성중" : qdata.State === 1 ? "진행중" : "완료"}</span></td>
								<td>{qdata.Title}</td>
								<td className="type">{qdata.Type === 0 ? "밸런스 게임" : qdata.Type === 1 ? "업다운 게임" : qdata.Type === 2 ? "점수 선택" : qdata.Type === 3 ? "객관식 복수" : qdata.Type === 4 ? "객관식 단일" : qdata.Type === 5 ? "객관식 순차" : qdata.Type === 6 && "별점 리뷰"}</td>
								<td className="date">{moment(qdata.Start_Date).format("YYYY/MM/DD")} ~ {moment(qdata.End_Date).format("YYYY/MM/DD")}</td>
								<td className="reward">{qdata.Rewards}</td>
								<td className="people"><span className="member">3명<em>{qdata.Max_Personnel}명</em></span></td>
								<td className="management">
									<a href="#" className="btn btnCL">결과</a>
									<a href="#" className="btn btnCF">수정</a>
									<a href="#" className="btn btnL">삭제</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section id="poll1_btn-wrap">
				<Link to='poll-gamelist' className="btn btnCF">1차 폴 생성</Link>
				<a href="#" className="btn btnCF">2차 폴 생성</a>
			</section>
		</div>
    )

}

export default Poll1TotalList;