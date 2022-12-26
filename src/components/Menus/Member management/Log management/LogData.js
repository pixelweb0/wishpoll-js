import React, {useState} from "react";
import "./Log.css";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import moment from "moment";

function LogData(){
    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

	const [select, setSelect] = useState("선택");

	const [search, setSearch] = useState("");

	const handleSearch = () => {
        console.log("입력한 값:", search)
        console.log('게시 시작일:', moment(Start_Date).format('YYYY/MM/DD'), '게시 종료일:', moment(End_Date).format("YYYY/MM/DD"))
        console.log("선택:", select)
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    }


    return (
        <div className="contents">
			<section id="Log_search">
				<div className="search-form">
					<ul>
						<li>
							<div>
								<h4>접속 날짜</h4>
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
						<option value="IP">IP</option>
					</select>
					<input type="text" className="search-val" name="" placeholder="검색어를 입력해주세요." onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
				</div>
			</section>

			<section id="Log_list">
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
						<col />
						<col className="state" />
						<col className="date" />
						<col className="state" />
						<col className="management" />
					</colgroup>

					<thead>
						<tr>
							<th scope="col">NO.</th>
							<th scope="col">아이디</th>
							<th scope="col">이름</th>
							<th scope="col">최근 접속일</th>
							<th scope="col">IP</th>
							<th scope="col">관리</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="num">03</td>
							<td>wish_poll@naver.com</td>
							<td className="state">홍길동</td>
							<td className="date">2022-10-01 09:12:35</td>
							<td className="state"><span className="state writ">대기</span></td>
							<td className="management"><a href="#" className="btn btnL">삭제</a></td>
						</tr>
						<tr>
							<td className="num">02</td>
							<td>wish_poll@naver.com</td>
							<td className="state">홍길동</td>
							<td className="date">2022-10-01 09:12:35</td>
							<td className="state"><span className="state writ">대기</span></td>
							<td className="management"><a href="#" className="btn btnL">삭제</a></td>
						</tr>
						<tr>
							<td className="num">01</td>
							<td>wish_poll@naver.com</td>
							<td className="state">홍길동</td>
							<td className="date">2022-10-01 09:12:35</td>
							<td className="state"><span className="state writ">대기</span></td>
							<td className="management"><a href="#" className="btn btnL">삭제</a></td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
    )
}

export default LogData;