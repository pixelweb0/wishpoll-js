import React, { useEffect, useState } from "react";
import client from "../../../../client";
import { Link, useLocation } from "react-router-dom";
import "./MemberInformation.css";
import Dropzone from 'react-dropzone';

function MemberInformationData(){

	const [freeImage, setfreeImage] = useState('');
	const handlefreeImage = (fileBlob) => {
		const reader = new FileReader();
		if(fileBlob){
			reader.readAsDataURL(fileBlob);
			setProfile_Image_Uri(fileBlob);
		}

		return new Promise((resolve) => {
			reader.onload = () => {
				setfreeImage(reader.result);
				resolve();
			};
		});	
	};

	const removeImg = () => {
		setProfile_Image_Uri('')
		setfreeImage('')
	}

	const location = useLocation();
    const listnum = location.state.data;

	console.log(listnum);
	
	const [M_Idx, setM_Idx] = useState(0);
	const [Nickname, setNickname] = useState("");
	const [Phone, setPhone] = useState("");
	const [Year_Of_Birth, setYear_Of_Birth] = useState(null);
	const [Zipcode, setZipcode] = useState(null);
	const [Address, setAddress] = useState(null);
	const [Privacy_Consent, setPrivacy_Consent] = useState("");
	const [App_Consent, setApp_Consent] = useState("");
	const [Referral_Code, setReferral_Code] = useState(null);
	const [Id, setId] = useState("");
	const [Pw, setPw] = useState("");
	const [Name, setName] = useState("");
	const [Gender, setGender] = useState("");
	const [Profile_Image_Uri, setProfile_Image_Uri] = useState(null)
	const [Panel, setPanel] = useState(0);
	const [Interests_1, setInterests_1] = useState(null);
	const [Interests_2, setInterests_2] = useState(null);
	const [Interests_3, setInterests_3] = useState(null);
	const [Is_Delete, setIs_Delete] = useState("");
	const [Delete_Date, setDelete_Date] = useState(null);
	const [Delete_Reason, setDelete_Reason] = useState(null);

// 문수씨 여기입니다 : ) 여기 데이터 맞춰서 할당해주세요~!!!


	const [info , setInfo] = useState([])
	useEffect(() => {
		client.get(`member/info/${listnum}`)
		.then(({data}) => {setInfo(data);
			console.log(data);
			setM_Idx(data[0].M_Idx);
			setNickname(data[0].Nickname);
			setPhone(data[0].Phone);
			setYear_Of_Birth(data[0].Year_Of_Birth);
			setZipcode(data[0].Zipcode);
			setAddress(data[0].Address);
			setPrivacy_Consent(data[0].Privacy_Consent);
			setApp_Consent(data[0].App_Consent);
			setReferral_Code(data[0].Referral_Code);
			setId(data[0].Id);
			setPw(data[0].Pw);
			setName(data[0].Name);
			setGender(data[0].Gender);
			setProfile_Image_Uri(data[0].Profile_Image_Uri);
			setPanel(data[0].Panel);
			setInterests_1(data[0].Interests_1);
			setInterests_2(data[0].Interests_2);
			setInterests_3(data[0].Interests_3);
			setIs_Delete(data[0].Is_Delete);
			setDelete_Date(data[0].Delete_Date);
			setDelete_Reason(data[0].Delete_Reason);
		})
	}, [])

	console.log(Address)
	console.log("INFO INFO INFO INFO", info)

    return (		
        <div className="contents">
			<h3 className="member-info_h">회원 정보 관리</h3>
			<section id="member-info_write">
				<div className="item type2">
					<p className="title">기본 정보</p>
				</div>
				<div className="item">
					<p className="title">회원 유형</p>
					<div className="desc">일반회원/패널회원</div>
				</div>
				<div className="item">
					<p className="title">아이디</p>
					<div className="desc">
						<div><input type="text" value={Id || ""} readOnly /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">비밀번호</p>
					<div className="desc">
						<div><input type="password" value={Pw || ""}/></div>
					</div>
				</div>
				<div className="item">
					<p className="title">닉네임</p>
					<div className="desc">
						<div><input type="text" value={Nickname || ""} /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">휴대폰 번호</p>
					<div className="desc">
						<div><input type="text" value={Phone || ""} readOnly /></div>
					</div>
				</div>
				<div className="item">
					<p className="title">출생년도</p>
					<div className="desc">
						<div><input type="text" value={Year_Of_Birth || ""}/></div>
					</div>
				</div>
				<div className="item">
					<p className="title">성별</p>
					<div className="desc">
						<span><input type="radio" id="sex-1" name="sex" checked={Gender === "M"} readOnly/><label htmlFor="sex-1">남성</label></span>
						<span><input type="radio" id="sex-2" name="sex" checked={Gender === "F"} readOnly/><label htmlFor="sex-2">여성</label></span>
					</div>
				</div>
				<div className="item">
					<p className="title">추천인 코드</p>
					<div className="desc">{Referral_Code}</div>
				</div>
				<div className="item">
					<p className="title">프로필 사진</p>
					<div className="desc">
						<div className="img-photo">
							<Dropzone onDrop={acceptedFiles => {
								console.log(acceptedFiles)
								setProfile_Image_Uri(acceptedFiles[0]);
								handlefreeImage(acceptedFiles[0]);
								}}>
								{({getRootProps, getInputProps}) => (
									<div id="btnAtt" {...getRootProps()}>
										<input {...getInputProps()} />
									</div>      
								)}
							</Dropzone>
							{freeImage ? <div id="photo-view">
								<img className="preview-img" src={freeImage} alt="preview-img"/>
								<input type="button" value="X" className="deleteImg" onClick={removeImg}/>
							</div> : null}
						</div>
						<p className="comment">권장 크기 : 1000 x 500</p>
					</div>
				</div>
				{/* ----------------------------------------------------------------- */}
				{/* 밑부분 db에 없음 */}
				<div className="item">
					<p className="title">보유 포인트</p>
					<div className="desc">3,500</div>
				</div>
				<div className="item">
					<p className="title">참여한 테스트</p>
					<div className="desc"><a className="bnt user-pop">내역 보기</a></div>
				</div>
				<div className="item">
					<p className="title">IP</p>
					<div className="desc">123,456,78,900</div>
				</div>
				<div className="item">
					<p className="title">서비스 정보 수신 동의</p>
					<div className="desc">동의/비동의</div>
				</div>

				<div className="item type2">
					<p className="title">추가 정보</p>
				</div>
				<div className="item">
					<p className="title">주소</p>
					<div className="desc">일반회원/패널회원</div>
				</div>
				<div className="item">
					<p className="title">혼인 여부</p>
					<div className="desc">
						<span><input type="radio" id="marry-1" name="marry" /><label htmlFor="marry-1">미혼</label></span>
						<span><input type="radio" id="marry-2" name="marry" /><label htmlFor="marry-2">기혼</label></span>
					</div>
				</div>
				<div className="item">
					<p className="title">직업/직무</p>
					<div className="desc">
						<select>
							<option value="직업">직업</option>
							<option value="회사원">회사원</option>
						</select>
						<select>
							<option value="직무">직무</option>
							<option value="대표">대표</option>
						</select>
					</div>
				</div>
				<div className="item">
					<p className="title">최종 학력</p>
					<div className="desc">
						<select>
							<option value="최종 학력">최종 학력</option>
							<option value="대학원 졸업">대학원 졸업</option>
							<option value="대학교 졸업">대학교 졸업</option>
							<option value="고등학교 졸업">고등학교 졸업</option>
						</select>
					</div>
				</div>
				<div className="item">
					<p className="title">스마트폰 기종</p>
					<div className="desc">
						<select>
							<option value="제조사">제조사</option>
							<option value="Samsung">Samsung</option>
						</select>
						<select>
							<option value="모델명">모델명</option>
							<option value="Z플립4">Z플립4</option>
						</select>
					</div>
				</div>
				<div className="item">
					<p className="title">관심 분야<i></i></p>
					<div className="desc interest">
						<span><input type="checkbox" id="interest-1" name="interest" /><label htmlFor="interest-1">뷰티</label></span>
						<span><input type="checkbox" id="interest-2" name="interest" /><label htmlFor="interest-2">헬스</label></span>
						<span><input type="checkbox" id="interest-3" name="interest" /><label htmlFor="interest-3">패션/잡화</label></span>
						<span><input type="checkbox" id="interest-4" name="interest" /><label htmlFor="interest-4">전자제품</label></span>
						<span><input type="checkbox" id="interest-5" name="interest" /><label htmlFor="interest-5">주방가전</label></span>
						<span><input type="checkbox" id="interest-6" name="interest" /><label htmlFor="interest-6">테크놀로지</label></span>
						<span><input type="checkbox" id="interest-7" name="interest" /><label htmlFor="interest-7">유아동</label></span>
						<span><input type="checkbox" id="interest-8" name="interest" /><label htmlFor="interest-8">식품</label></span>
						<span><input type="checkbox" id="interest-9" name="interest" /><label htmlFor="interest-9">엔터테이먼트</label></span>
						<span><input type="checkbox" id="interest-10" name="interest" /><label htmlFor="interest-10">생활용품</label></span>
						<span><input type="checkbox" id="interest-11" name="interest" /><label htmlFor="interest-11">여행</label></span>
						<span><input type="checkbox" id="interest-12" name="interest" /><label htmlFor="interest-12">디자인</label></span>
						<span><input type="checkbox" id="interest-13" name="interest" /><label htmlFor="interest-13">의료/건강</label></span>
						<span><input type="checkbox" id="interest-14" name="interest" /><label htmlFor="interest-14">문화/예술</label></span>
						<span><input type="checkbox" id="interest-15" name="interest" /><label htmlFor="interest-15">반려동물</label></span>
						<span><input type="checkbox" id="interest-16" name="interest" /><label htmlFor="interest-16">기타</label></span>
					</div>
				</div>
			</section>
			<section id="member-info_btn-wrap">
				<a href="#" className="btn btnL">목록보기</a>
				<a href="#" className="btn btnCF">등록/수정</a>
			</section>
		</div>
    )
}

export default MemberInformationData;