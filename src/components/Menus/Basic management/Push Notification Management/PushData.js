import React, {useState} from "react";
import "./Push.css";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import { Link } from "react-router-dom";
import moment from "moment";

function PushData(){
    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

    const [Start_Date2, setStart_Date2] = useState(null);
	const [End_Date2, setEnd_Date2] = useState(null);

    const [as, setAs] = useState(false);

	const [value, setValue] = useState('발송 상태');

	const [select, setSelect] = useState("선택");

	const [search, setSearch] = useState('');

	const [phone, setPhone] = useState('')

	const handleSearch = () => {
		console.log("입력한 값:", search)
        console.log("발송 상태:", value)
        console.log('게시 시작일:', moment(Start_Date).format('YYYY/MM/DD'), '게시 종료일:', moment(End_Date).format("YYYY/MM/DD"))
        console.log("선택:", select)
		if(as === true){
			console.log('게시 시작일2:', moment(Start_Date2).format('YYYY/MM/DD'), '게시 종료일2:', moment(End_Date2).format("YYYY/MM/DD"))
			console.log('폰 기종:', phone)
		}
    }
	const handleKeyPress = e => {
        if(e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="contents">
			<section id="push_search">
				<div className="search-form">
					<ul>
						<li>
							<select onChange={(e) => setValue(e.target.value)}>
								<option value="발송 상태">발송 상태</option>
								<option value="작성중">작성중</option>
								<option value="발송 예약">발송 예약</option>
								<option value="발송 완료">발송 완료</option>
							</select>

							<div>
								<h4>발송일</h4>
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
					<input type="text" className="search-val" name="" placeholder="검색어를 입력해주세요." onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyPress}/>
					<a className="btn-schAll" onClick={() => setAs(!as)}>상세 검색</a>
				</div>

				<div className={as ? "sch-all" : "sch-all no"}>
					<div>
						<h4>등록일</h4>
						<input
							type="date"
							className="form-control start-date date"
							format="yyyy-MM-dd"
							locale={ko}
							min={new Date().toISOString().slice(0, 10)}
							onChange={(e) => setStart_Date(e.target.value)}
							name="datepicker"
							value={Start_Date}
							placehoder="폴 시작일"
						/>

						{/* <DatePicker
                            className="w180 form-control start-date date"
                            selected={Start_Date2}
                            onChange={date => setStart_Date2(date)}
                            selectsStart
                            startDate={Start_Date2}
                            endDate={End_Date2}
                            locale={ko}
                            dateFormat="yyyy년 MM월 dd일 (eee)"
                            minDate={new Date()}
                            closeOnScroll={true}
                            placeholderText="폴 시작일"
                        /> */}
						<span>~</span>
						<input
							type="date"
							className="form-control end-date date"
							format="yyyy-MM-dd"
							name="datepicker"
							min={new Date().toISOString().slice(0, 10)}
							value={End_Date}
							placehoder="폴 종료일"
							locale={ko}
							onChange={(e) => setEnd_Date(e.target.value)}
						/>

						{/* <DatePicker
                            className="form-control end-date date"
                            selected={End_Date2}
                            onChange={date => setEnd_Date2(date)}
                            selectsEnd
                            startDate={Start_Date2}
                            endDate={End_Date2}
                            minDate={Start_Date2}
                            locale={ko}
                            dateFormat="yyyy년 MM월 dd일 (eee)"
                            closeOnScroll={true}
                            placeholderText="폴 종료일"
                        /> */}
					</div>
					<div>
						<h4>플랫폼</h4>
						<div className="platform-box">
							<span><input type="radio" id="platform-and" name="platform"/><label htmlFor="platform-and" onClick={e => setPhone(e.target.innerText)}>안드로이드</label></span>
							<span><input type="radio" id="platform-ios" name="platform"/><label htmlFor="platform-ios" onClick={e => setPhone(e.target.innerText)}>IOS</label></span>
						</div>
					</div>
				</div>
			</section>

			<section id="push_list">
				<div className="search-result">
					<div className="sel-tpye">
						<p>전체:<span>50</span>건</p>
					</div>

					<ul className="view-icon">
						<li className="ico-report">리포트</li>
						<li className="ico-copy">복사</li>
						<li className="ico-del">삭제</li>
					</ul>

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
						<col className="date" />
						<col className="num" />
						<col className="date" />
						<col className="date" />
						<col className="state" />
						<col className="num" />
						<col className="num" />
						<col className="num" />
						<col className="management" />
					</colgroup>

					<thead>
						<tr>
							<th scope="col">NO.</th>
							<th scope="col">제목</th>
							<th scope="col">등록일</th>
							<th scope="col">발송 상태</th>
							<th scope="col">발송 일시</th>
							<th scope="col">예약 일시</th>
							<th scope="col">플랫폼</th>
							<th scope="col">발송 수</th>
							<th scope="col">클릭 수</th>
							<th scope="col">실패 수</th>
							<th scope="col">관리</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="num">50</td>
							<td>푸시 메시지 제목</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="num"><span className="num send-finish">발송 완료</span></td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="state">
								<span className="platform and">안드로이드</span>
								<span className="platform ios">iOS</span>
							</td>
							<td className="num">123</td>
							<td className="num">700</td>
							<td className="num">-</td>
							<td className="management">
								<Link to="/push-notification/push-report" className="btn btnReport">리포트</Link>
								<a href="#" className="btn btnCopy2">복사</a>
								<a href="#" className="btn btnDel">삭제</a>
							</td>
						</tr>
						<tr>
							<td className="num">49</td>
							<td>푸시 메시지 제목</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="num"><span className="num send-ing">발송 예약</span></td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="state">
								<span className="platform and">안드로이드</span>
							</td>
							<td className="num">-</td>
							<td className="num">-</td>
							<td className="num">-</td>
							<td className="management">
								<a href="#" className="btn btnReport">리포트</a>
								<a href="#" className="btn btnCopy2">복사</a>
								<a href="#" className="btn btnDel">삭제</a>
							</td>
						</tr>
						<tr>
							<td className="num">48</td>
							<td>푸시 메시지 제목</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="num"><span className="num send-reserve">작성중</span></td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="date">2022.10.01 09:00:00</td>
							<td className="state">
								<span className="platform ios">iOS</span>
							</td>
							<td className="num">123</td>
							<td className="num">700</td>
							<td className="num">3</td>
							<td className="management">
								<a href="#" className="btn btnReport">리포트</a>
								<a href="#" className="btn btnCopy2">복사</a>
								<a href="#" className="btn btnDel">삭제</a>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section id="push_btn-wrap">
				<Link to="/push-notification/push-sending" className="btn btnCF">푸시발송 생성</Link>
			</section>
		</div>
    )
}

export default PushData;