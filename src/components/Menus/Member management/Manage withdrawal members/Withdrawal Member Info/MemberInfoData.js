import React from "react";
import { Link } from "react-router-dom";
import "./MemberInfo.css";

function MemberInfoData(){
    return (
        <div className="contents">
			<h3 className="w-member-info_h">탈퇴 회원 정보 관리</h3>

			<section id="w-member-info_write">
				<div className="item">
					<p className="title">아이디</p>
					<div className="desc">
						<div><input type="text" value="wish_poll@gamil.com" disabled /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">비밀번호</p>
					<div className="desc">
						<div><input type="password" value="123456" /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">이름</p>
					<div className="desc">
						<div><input type="text" value="홍길동" /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">닉네임</p>
					<div className="desc">
						<div><input type="text" value="김뿡뿡" /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">휴대폰 번호</p>
					<div className="desc">
						<div><input type="text" value="010-1234-5678" disabled /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">출생년도</p>
					<div className="desc">
						<select>
							<option value="2022">2022</option>
							<option value="2021">2021</option>
							<option value="2020">2020</option>
						</select>
					</div>
				</div>
				<div className="item">
					<p className="title">성별</p>
					<div className="desc">
						<span><input type="radio" id="sex-1" name="sex" /><label htmlFor="sex-1">남성</label></span>
						<span><input type="radio" id="sex-2" name="sex" /><label htmlFor="sex-2">여성</label></span>
					</div>
				</div>
				<div className="item">
					<p className="title">추천인 코드</p>
					<div className="desc">abcdfg123</div>
				</div>
				<div className="item">
					<p className="title">프로필 사진</p>
					<div className="desc">
						<div className="img-photo">
							<label id='btnAtt'><input type='file' multiple='multiple' /></label>
							<div id="photo-view"></div>
						</div>
						<p className="comment">권장 크기 : 1000 x 500</p>
					</div>
				</div>
				<div className="item">
					<p className="title">보유 포인트</p>
					<div className="desc">3,500</div>
				</div>
				<div className="item">
					<p className="title">참여한 테스트</p>
					<div className="desc"><Link to="/withdrawal-member/member-information/member-history" className="bnt user-pop">내역 보기</Link></div>
				</div>
				<div className="item">
					<p className="title">IP</p>
					<div className="desc">123,456,78,900</div>
				</div>
				<div className="item">
					<p className="title">서비스 정보 수신 동의</p>
					<div className="desc">동의/비동의</div>
				</div>
			</section>

			<section id="w-member-info_btn-wrap">
				<a href="#" className="btn btnL">목록보기</a>
			</section>
		</div>
    )
}

export default MemberInfoData;