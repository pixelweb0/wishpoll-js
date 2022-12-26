import React, { useEffect, useState } from "react";
import "./History.css";
import {useLocation} from "react-router-dom";
import client from "../../../../client";
import moment from "moment";

function HistoryData(){
	const location = useLocation();
	const listnum = location.state.data;

	console.log(listnum)

	const [pointlist, setPointlist] = useState([])
	useEffect(() => {
		client.get(`/point/list/${listnum}`)
		.then(({data}) => {
			console.log(data)
			setPointlist(data)
		})
	}, [])

    return (
        <div className="contents">
			<h3 className="history_h">포인트 내역 관리</h3>

			{pointlist.map((pdata, Point_Idx) => (
				<section id="history_write" key={Point_Idx}>
					<div className="item">
						<p className="title">일시</p>
						<div className="desc">{moment(pdata.Submit_Date).format("YYYY-MM-DD HH:mm:ss")}</div>
					</div>
					<div className="item">
						<p className="title">거래유형</p>
						<div className="desc">
							<div><input type="text" value={pdata.Point_State === 0 ? "적립" : "출금"} readOnly /></div>
						</div>
					</div>
					<div className="item">
						<p className="title">내역</p>
						<div className="desc">
							<div><input type="text" value="내역" /></div>
						</div>
					</div>
					<div className="item">
						<p className="title">거래 포인트</p>
						<div className="desc">
							<div><input type="text" value="3,000" /></div>
						</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">수령 아이디</p>
						<div className="desc">abcdef@gmail.com</div>
					</div>
					<div className="item">
						{/* db에 없음 */}
						<p className="title">이름</p>
						<div className="desc">홍길동</div>
					</div>
					<div className="item">
						<p className="title">닉네임</p>
						<div className="desc">{pdata.Nickname}</div>
					</div>
					<div className="item">
						<p className="title">수령인 포인트 잔액</p>
						<div className="desc">
							<div><input type="text" value={pdata.Point_Balance} readOnly /></div>
						</div>
					</div>
				</section>
			))}
			<section id="history_btn-wrap">
				<a href="#" className="btn btnL">목록보기</a>
				<a href="#" className="btn btnCF">수정</a>
			</section>
		</div>
    )
}

export default HistoryData;