import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import "./Notice.css";
import { Link } from "react-router-dom";
import client from "../../../client";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function NoticeData(){
	const navigate = useNavigate();

    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

	const [value, setValue] = useState("분류");

	const [select, setSelect] = useState("선택");

	const [search, setSearch] = useState("");

	const handleSearch = () => {
        console.log("입력한 값:", search)
        console.log("분류:", value)
        console.log('게시 시작일:', moment(Start_Date).format('YYYY/MM/DD'), '게시 종료일:', moment(End_Date).format("YYYY/MM/DD"))
        console.log("선택:", select)
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    }

	const [noticelist, setNoticelist] = useState([]);
	const [eventlist, setEventlist] = useState([]);
	useEffect(() => {
		client.get("event-board/list").then(({data}) => setEventlist(data));
		client.get("notice-board/list").then(({data}) => setNoticelist(data));

		// switch(value){
		// 	case '공지사항': client.get("event-board/list").then(({data}) => setEventlist(data));
		// 	break;
		// 	case '이벤트': client.get("notice-board/list").then(({data}) => setNoticelist(data));
		// 	break;
		// }
	}, [])

	const Relist = e => {
		setValue(e.target.value)
		console.log(e.target.value)
	}

    return (
        <div className="contents">
			<section id="notice_search">
				<div className="search-form">
					<ul>
						<li>
							<select onChange={Relist}>
								<option value="분류">분류</option>
								<option value="공지사항">공지사항</option>
								<option value="이벤트">이벤트</option>
							</select>

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
                                    className="w180 form-control start-date date"
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
					</ul>
				</div>

				<div className="search-box">
					<select onChange={e => setSelect(e.target.value)}>
						<option value="선택">선택</option>
						<option value="제목">제목</option>
						<option value="내용">내용</option>
						<option value="제목+내용">제목+내용</option>
					</select>
					<input type="text" className="search-val" placeholder="검색어를 입력해주세요." onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
				</div>
			</section>

			<section id="notice_list">
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
						<col className="state" />
						<col />
						<col className="state" />
						<col className="date" />
						<col className="date" />
						<col className="num" />
						<col className="management" />
						<col className="state" />
					</colgroup>

					<thead>
						<tr>
							<th scope="col">
								<input type="checkbox" id="chk-all"/><label htmlFor="chk-all"></label>
							</th>
							<th scope="col">NO.</th>
							<th scope="col">분류</th>
							<th scope="col">제목</th>
							<th scope="col">게시 상태</th>
							<th scope="col">게시일시</th>
							<th scope="col">등록일</th>
							<th scope="col">조회수</th>
							<th scope="col">관리</th>
							<th scope="col">링크 복사</th>
						</tr>
					</thead>

					<tbody>
						{value === "분류" || value === "이벤트" ? eventlist.map((edata, E_Idx) => (
							<tr key={E_Idx} onClick={() => {
								navigate("/notice-event/event-correct", {
									state: {
										data: edata.E_Idx
									}
								})
							}}>
								<td className="num"><input type="checkbox" id="chk1" name="chk"/><label htmlFor="chk1"></label></td>
								<td className="num">{edata.E_Idx}</td>
								<td className="state">이벤트</td>
								<td>{edata.Title}</td>
								<td className="state"><span className="state writ">-</span></td>
								<td className="date">{moment(edata.Start_Date).format('YYYY/MM/DD')}</td>
								<td className="date">{moment(edata.End_Date).format('YYYY/MM/DD')}</td>
								<td className="num">-</td>
								<td className="management">
									<a href="공지사항_이벤트_글쓰기.html" className="btn btnCF">수정</a>
									<a href="#" className="btn btnL">삭제</a>
								</td>
								<td className="state">
									<a className="btn btnCopy">복사</a>
								</td>
							</tr>
						)) : null}

						{value === "분류" || value === "공지사항" ? noticelist.map((ndata, N_Idx) => (
							<tr key={N_Idx} onClick={() => {
								navigate("/notice-event/notice-correct", {
									state: {
										data: ndata.N_Idx
									}
								})
							}}>
								<td className="num"><input type="checkbox" id="chk1" name="chk"/><label htmlFor="chk1"></label></td>
								<td className="num">{ndata.N_Idx}</td>
								<td className="state">공지사항</td>
								<td>{ndata.Title}</td>
								<td className="state"><span className="state writ">-</span></td>
								<td className="date">{moment(ndata.Start_Date).format('YYYY/MM/DD')}</td>
								<td className="date">{moment(ndata.End_Date).format('YYYY/MM/DD')}</td>
								<td className="num">-</td>
								<td className="management">
									<a href="공지사항_이벤트_글쓰기.html" className="btn btnCF">수정</a>
									<a href="#" className="btn btnL">삭제</a>
								</td>
								<td className="state">
									<a className="btn btnCopy">복사</a>
								</td>
							</tr>
						)) : null}
						

						






						{/* <tr>
							<td className="num"><input type="checkbox" id="chk1" name="chk"/><label htmlFor="chk1"></label></td>
							<td className="num">50</td>
							<td className="state">공지사항</td>
							<td>폴 제목 입니다.</td>
							<td className="state"><span className="state writ">게시 대기</span></td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="num">1,234</td>
							<td className="management">
								<a href="공지사항_이벤트_글쓰기.html" className="btn btnCF">수정</a>
								<a href="#" className="btn btnL">삭제</a>
							</td>
							<td className="state">
								<a className="btn btnCopy">복사</a>
							</td>
						</tr>
						<tr>
							<td className="num"><input type="checkbox" id="chk2" name="chk"/><label htmlFor="chk2"></label></td>
							<td className="num">49</td>
							<td className="state">공지사항</td>
							<td>폴 제목 입니다.</td>
							<td className="state"><span className="state ongoing">게시 중</span></td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="num">1,234</td>
							<td className="management">
								<a href="공지사항_이벤트_글쓰기.html" className="btn btnCF">수정</a>
								<a href="#" className="btn btnL">삭제</a>
							</td>
							<td className="state">
								<a className="btn btnCopy">복사</a>
							</td>
						</tr>
						<tr>
							<td className="num"><input type="checkbox" id="chk3" name="chk" /><label htmlFor="chk3"></label></td>
							<td className="num">48</td>
							<td className="state">이벤트</td>
							<td>폴 제목 입니다.</td>
							<td className="state"><span className="state complete">게시 중지</span></td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="num">1,234</td>
							<td className="management">
								<a href="공지사항_이벤트_글쓰기.html" className="btn btnCF">수정</a>
								<a href="#" className="btn btnL">삭제</a>
							</td>
							<td className="state">
								<a className="btn btnCopy">복사</a>
							</td>
						</tr>
						<tr>
							<td className="num"><input type="checkbox" id="chk4" name="chk" /><label htmlFor="chk4"></label></td>
							<td className="num">47</td>
							<td className="state">이벤트</td>
							<td>폴 제목 입니다.</td>
							<td className="state"><span className="state complete">게시 중지</span></td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="num">1,234</td>
							<td className="management">
								<a href="공지사항_이벤트_글쓰기.html" className="btn btnCF">수정</a>
								<a href="#" className="btn btnL">삭제</a>
							</td>
							<td className="state">
								<a className="btn btnCopy">복사</a>
							</td>
						</tr> */}
					</tbody>
				</table>

				<div className="grid-bottom">
					선택 항목을
					<a className="btn">리스트 상단에 고정</a>
					<a className="btn">리스트 상단 고정 해제</a>
				</div>
			</section>

			<section id="notice_btn-wrap">
				<Link to="/notice-event/notice-edit" className="btn btnCF">게시글 작성</Link>
			</section>
		</div>
    )
}

export default NoticeData;