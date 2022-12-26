import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import client from "../../../../client";
import "./HistoryManagement.css";

function HistoryMangementData(){
	const location = useLocation();
	const listnum = location.state.data;


	const [Pointlist, setPointlist] = useState([])
	useEffect(() => {
		client.get(`/point/list/${listnum}`)
		.then(({data}) => {
			console.log(data)
			setPointlist(data)
		})
	}, [])

    return (
        <div className="contents">
			<h3 className="history-m_h">출금신청 내역 관리</h3>

			{Pointlist.map((pdata, Point_Idx) => (
				<section id="history-m_write" key={Point_Idx}>
					<div className="item">
						<p className="title">상태</p>
						<div className="desc">{pdata.Point_State === 0 ? "대기" : pdata.Point_State === 1 && "완료"}</div>
					</div>
					<div className="item">
						<p className="title">신청 유형</p>
						<div className="desc">{pdata.Point_Name}</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">아이디</p>
						<div className="desc">
							<div><input type="text" value="abcd123@gmail.com" readOnly /></div>
						</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">이름</p>
						<div className="desc">
							<div><input type="text" value="홍길동" readOnly /></div>
						</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">휴대폰 번호</p>
						<div className="desc">
							<div><input type="text" value="010-1234-5678" readOnly /></div>
						</div>
					</div>
					<div className="item">
						<p className="title">신청 날짜</p>
						<div className="desc">
							<div><input type="text" value={moment(pdata.Submit_Date).format("YYYY-MM-DD HH:mm:ss")} readOnly /></div>
						</div>
					</div>
					<div className="item">
						<p className="title">보유 포인트</p>
						<div className="desc">
							<div><input type="text" value={pdata.Point_Reward} readOnly /></div>
						</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">신청 포인트</p>
						<div className="desc">
							<div><input type="text" value="3,000" readOnly /></div>
						</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">예정 지급액</p>
						<div className="desc">
							<div><input type="text" value="신청 포인트에서 12% 공제한 금액" readOnly /></div>
						</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">입금 은행</p>
						<div className="desc">
							<select readOnly>
								<option value="은행">은행</option>
								<option value="KB은행">KB은행</option>
								<option value="기업은행">기업은행</option>
							</select>
						</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">예금주/계좌번호</p>
						<div className="desc">
							<div>
								<input type="text" className="w100p" value="예금주" readOnly />
								<input type="text" className="w80" value="123-456789-01-011" readOnly />
							</div>
						</div>
					</div>
					<div className="item">
						<p className="title">신분증 사본</p>
						<div className="desc">
							<div className="img-photo">
								<label id='btnAtt'><input type='file' multiple='multiple' /></label>
								<div id="photo-view"></div>
							</div>
						</div>
					</div>
				</section>
			))}

			<section id="history-m_btn-wrap">
				<a href="#" className="btn btnL">목록보기</a>
			</section>
		</div>
    )
}

export default HistoryMangementData;