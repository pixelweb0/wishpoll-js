import React from "react";
import "./BlockIp.css";

function BlockIp(){
    return (
        <div className="contents">
			<h3 className="block-ip_h">차단 IP 설정</h3>

			<section id="block-ip_add-form">
				<input type="text" placeholder="IP를 입력해주세요." />
				<button type="button" className="btn-add">등록</button>
			</section>

			<section id="block-ip_list">
				<div className="search-result">
					<div className="sel-tpye">
						<p>전체:<span>1,233</span>건</p>
					</div>

					<div className="sel-number">
						<input type="text" className="search-val" placeholder="검색어를 입력해주세요." />
					</div>
				</div>

				<table>
					<colgroup>
						<col className="num" />
						<col />
						<col className="date" />
						<col className="management" />
					</colgroup>

					<thead>
						<tr>
							<th scope="col">NO.</th>
							<th scope="col">IP</th>
							<th scope="col">등록일</th>
							<th scope="col">관리</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="num">03</td>
							<td>123.456.78.900</td>
							<td className="date">2022.10.01</td>
							<td className="management"><a href="#" className="btn btnL">삭제</a></td>
						</tr>
						<tr>
							<td className="num">2</td>
							<td>123.456.78.900</td>
							<td className="date">2022.10.01</td>
							<td className="management"><a href="#" className="btn btnL">삭제</a></td>
						</tr>
						<tr>
							<td className="num">1</td>
							<td>123.456.78.900</td>
							<td className="date">2022.10.01</td>
							<td className="management"><a href="#" className="btn btnL">삭제</a></td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
    )
}

export default BlockIp;