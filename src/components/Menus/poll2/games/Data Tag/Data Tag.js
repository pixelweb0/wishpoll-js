import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/esm/locale';
import client from "../../../../client";
import "./Scope.css";
import Dropzone from 'react-dropzone';

function TagData(){
	const formData = new FormData();

    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);
	

	const [Title, setTitle] = useState("");

	const [Rewards, setRewards] = useState();
	const handleRewards = (e) => {
		if(!parseInt(e.target.value)){
			setRewards(0)
		} else {
			setRewards(parseInt(e.target.value));
		}
		
	}

	const [Max_Personnel, setMax_Personnel] = useState();
	const handleMax_Personnel = (e) => {
		if(!parseInt(e.target.value)){
			setMax_Personnel(0)
		} else {
			setMax_Personnel(parseInt(e.target.value));
		}
		
	}

	const [Image, setImage] = useState("");

	const [freeImage, setfreeImage] = useState('');
	const handlefreeImage = (fileBlob) => {       
		const reader = new FileReader();         
		reader.readAsDataURL(fileBlob);
		setImage(fileBlob);       
		return new Promise((resolve) => {        
			reader.onload = () => {         
				setfreeImage(reader.result);          
				resolve();
			};
		});
	};

	const removeImg = () => {
		setImage('')
		setfreeImage('')
	}

	const [State, setState] = useState(0);
	const handleCheck = e => {
		if(e.target.checked){
			console.log("CHECK")
			setState(1);
		} else{
			console.log("NO CHECK")
			setState(0)
		}
	}

	const [check, setCheck] = useState(false);
    const handlecheck = () => {
        setCheck(!check)
        if(!check){
            setMax_Personnel(parseInt(999999))
        }else{
            setMax_Personnel(parseInt(0))
        }
    }

	const Type = 6;
    const Max_Choice = 1;
    const Random = 0;
	const Select_Image_1 = null;
	const Select_1 = null;
	const Select_Image_2 = null;
	const Select_2 = null;
    const Select_Image_3 = null;
    const Select_3 =null;
    const Select_Image_4 = null;
    const Select_4 =null;
    const Select_Image_5 = null;
    const Select_5 =null;
    const Select_Image_6 = null;
    const Select_6 =null;
    const Select_Image_7 = null;
    const Select_7 =null;
    const Select_Image_8 = null;
    const Select_8 =null;

    const Scale_start = 0;
    const Scale_End = 0;
    const Scale_Unit = 0;

    const Scale_Start_Text = null;
    const Scale_End_Text = null;
    const Scale_Mid_Text = null;
	const Is_Using_Others = 0;
	const Regist_M_Idx = null;

	const onSubmitHandler = async(e) => {
		e.preventDefault();

	console.log("■■■■■■■■■■■■■■■■■■■■■■■■");
	formData.append('files',Image)
	console.log("■■■■■■■■■■■■■■■■■■■■■■■■");

		// for (let key of formData.keys()) {
		// 	console.log(key);
		//   }
		//   // FormData의 value 확인
		//   for (let value of formData.values()) {
		// 	console.log(value);
		//   }
   

		 client.post('/uploads/fileups', formData).then((res) =>{
			
			const Image = res.data.returnValue[0];
			
			console.log('data in one');
			console.log(Image);
			
			 client.post('/primary-poll/create', {
				Title,
				Image,
				State,
				Type,
				Rewards,
				Max_Personnel,
				Max_Choice,
				Random,
				Start_Date,
				End_Date,
				Is_Using_Others,
				Regist_M_Idx
			}).then(({data}) => {
				const primaryPoll = data.Q_Idx;

				console.log('data in two');
				console.log(data.Q_Idx);
				console.log(primaryPoll);
				client.post('/primary-poll-item/create', {
					primaryPoll,
					Select_Image_1,
					Select_1,
					Select_Image_2,
					Select_2,
					Select_Image_3,
					Select_3,
					Select_Image_4,
					Select_4,
					Select_Image_5,
					Select_5,
					Select_Image_6,
					Select_6,
					Select_Image_7,
					Select_7,
					Select_Image_8,
					Select_8,
					Scale_start,
					Scale_End,
					Scale_Unit,
					Scale_Start_Text,
					Scale_Mid_Text,
					Scale_End_Text
				})
				

			});

		

		}).catch(err =>{
			alert('파일 업로드 실패 - 관리자에게 문의하세요');
		})
		
		
		

		alert("등록 되었습니다.");
        // document.location.href="/polltotallist";
	};

    return (
		<>
			<div className="contents">
				<section id="scope_write">
					<div className="scope_left">
						<h4>리스트 노출 정보</h4>
						<div className="item">
							<p className="title">퀘스트 제목을 입력해주세요.</p>
							<div className="desc">
								<div><input type="text" id="" name="" placeholder="퀘스트 제목을 입력해주세요." onChange={e => setTitle(e.target.value)}/></div>
								<p className="comment">30자 이내로 적어주세요.</p>
							</div>
						</div>
						<div className="item">
							<p className="title">지급 포인트를 입력해주세요.<i></i></p>
							<div className="desc">
								<input type="text" className="w180" onChange={handleRewards} placeholder="포인트1" />
								<span className="txt">~</span>
								<input type="text" className="w180" onChange={handleRewards} placeholder="포인트2" />
								<span className="txt">P</span>

								<div className="rightB">
									<input type="checkbox" id="agr-chk" name="" /><label for="agr-chk">범위 입력</label>
								</div>
							</div>
						</div>
						<div className="item">
							<p className="title">한 줄 설명을 입력해주세요.<i></i></p>
							<div className="desc">
								<div><input type="text" id="" name="" placeholder="목록에서 보이는 설명입니다." /></div>
								<p className="comment">30자 이내로 적어주세요.</p>
							</div>
						</div>

						<h4>상세페이지 정보</h4>
						<div className="item">
							<p className="title">퀘스트 안내를 입력해주세요.<i></i></p>
							<div className="desc">
								<div><input type="text" id="" name="" placeholder="테스터에게 퀘스트를 설명해주세요." /></div>
							</div>
						</div>
						<div className="item">
							<p className="title">유의사항을 입력해주세요.<i></i></p>
							<div className="desc">
								<div><textarea placeholder="✔ 성실하고 솔직하게 응답해주세요.&#13;&#10;✔ 퀘스트 제출 완료 후 자동으로 포인트가 적립됩니다.&#13;&#10;✔ 불성실한 답변이 발각될 경우, 지급되었던 포인트가 추후 회수될 수 있습니다.&#13;&#10;✔ 본 퀘스트는 당사 상황에 따라 사전 고지 없이 세부내용이 변경되거나 종료될 수 있습니다."></textarea></div>
							</div>
						</div>
						<div className="item">
							<p className="title">상세 페이지 이미지를 업로드 해주세요.</p>
							<div className="desc">
								<div className="img-photo">
									<Dropzone onDrop={acceptedFiles => {
										console.log(acceptedFiles)
										setImage(acceptedFiles[0]);
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
								<p className="comment">권장 크기 : 가로 1,000px</p>
							</div>
						</div>

						<h4>퀘스트 개요</h4>
						<div class="item">
							<p class="title">퀘스트 유형을 선택해주세요.<i></i></p>
							<div class="desc">
								<span><input type="radio" id="type-1" name="type" value="" /><label class="" for="type-1">A/B 테스트</label></span>
								<span><input type="radio" id="type-2" name="type" value="" /><label class="" for="type-2">간편 설문</label></span>
								<span><input type="radio" id="type-3" name="type" value="" /><label class="" for="type-3">스티커 퀘스트</label></span>
								<span><input type="radio" id="type-4" name="type" value="" /><label class="" for="type-4">미디어 업로드</label></span>
								<span><input type="radio" id="type-5" name="type" value="" checked /><label class="" for="type-5">데이터 태그</label></span>
								<span><input type="radio" id="type-6" name="type" value="" /><label class="" for="type-6">음성 퀘스트</label></span>
								<span><input type="radio" id="type-7" name="type" value="" /><label class="" for="type-7">GPS</label></span>
								<span><input type="radio" id="type-8" name="type" value="" /><label class="" for="type-8">QR코드</label></span>
								<span><input type="radio" id="type-9" name="type" value="" /><label class="" for="type-9">참여신청</label></span>
							</div>
						</div>
						<div className="item">
							<p className="title">퀘스트 시작일</p>
							<div className="desc">
								<div className="input-group">
									<input
										type="date"
										className="form-control start-date date"
										format="yyyy-MM-dd"
										locale={ko}
										min={new Date().toISOString().slice(0, 10)}
										onChange={(e) => setStart_Date(e.target.value)}
										name="datepicker"
										value={Start_Date || ''}
										placehoder="퀘스트 시작일"
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
										placeholderText="퀘스트 시작일"
										closeOnScroll={true}
									/> */}
									<input type="text" className="timepicker clock" name="timepicker" placeholder="시간"/>
								</div>
							</div>
						</div>
						<div className="item">
							<p className="title">퀘스트 종료일</p>
							<div className="desc">
								<div className="input-group">
									<input
										type="date"
										className="form-control end-date date"
										format="yyyy-MM-dd"
										name="datepicker"
										min={new Date().toISOString().slice(0, 10)}
                  						value={End_Date || ''}
										placehoder="퀘스트 종료일"
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
										placeholderText="퀘스트 종료일"
										closeOnScroll={true}
									/> */}
									<input type="text" className="timepicker clock" name="timepicker" placeholder="시간"/>
								</div>
							</div>
						</div>
						<div className="item">
							<p className="title">참여 인원수를 입력해주세요.<i></i></p>
							<div className="desc">
								<div>
									<span className="txt">총</span>
									<input type="text" className={!check ? "txtR" : "txtR no"} value={Max_Personnel || ''} onChange={handleMax_Personnel} readOnly={!check ? false : true}/>
									<span className="txt">명</span>
									<div className="rightB">
										<input type="checkbox" id="panel-chk" name="" /><label for="panel-chk">패널 전용</label>
									</div>
								</div>
								<div className="accordion">
									<ul>
										<li>
											<input type="checkbox" id="numChk" hidden />
											<label for="numChk" className="title"><span>상세 설정<i></i></span></label>

											<div className="desc">
												<dl>
													<dt>성별</dt>
													<dd>
														<span className="txt">남성</span>
														<input type="text" id="" className="w100p" name="" placeholder="인원수" />
														<span className="txt">명</span>
													</dd>
													<dd>
														<span className="txt">여성</span>
														<input type="text" id="" className="w100p" name="" placeholder="인원수" />
														<span className="txt">명</span>
													</dd>
													<div className="rightB">
														<input type="checkbox" id="chk1" name="" /><label for="chk1">성별 균등</label>
													</div>
												</dl>
												<dl>
													<dt>연령</dt>
													<dd>
														<span className="txt">10대</span>
														<input type="text" id="" className="w100p" name="" placeholder="인원수" />
														<span className="txt">명</span>
													</dd>
													<dd>
														<span className="txt">20대</span>
														<input type="text" id="" className="w100p" name="" placeholder="인원수" />
														<span className="txt">명</span>
													</dd>
													<dd>
														<span className="txt">30대</span>
														<input type="text" id="" className="w100p" name="" placeholder="인원수" />
														<span className="txt">명</span>
													</dd>
													<dd>
														<span className="txt">40대</span>
														<input type="text" id="" className="w100p" name="" placeholder="인원수" />
														<span className="txt">명</span>
													</dd>
													<dd>
														<span className="txt">50대+</span>
														<input type="text" id="" className="w100p" name="" placeholder="인원수" />
														<span className="txt">명</span>
													</dd>
													<div className="rightB">
														<input type="checkbox" id="chk2" name="" /><label for="chk2">연령 균등</label>
													</div>
												</dl>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<h4>인구통계 설정</h4>
						<div className="item">
							<p className="title">성별을 선택해주세요.
								<span className="rightB">
									<input type="checkbox" id="gender-chk" name="" /><label for="gender-chk">전체</label>
								</span>
							</p>
							<div className="desc interest">
								<span><input type="checkbox" id="gender-1" name="gender" value="" /><label className="" for="gender-1">남성</label></span>
								<span><input type="checkbox" id="gender-2" name="gender" value="" /><label className="" for="gender-2">여성</label></span>
							</div>
						</div>
						<div className="item">
							<p className="title">연령을 선택해주세요.
								<span className="rightB">
									<input type="checkbox" id="age-chk" name="" /><label for="age-chk">전체</label>
								</span>
							</p>
							<div className="desc interest">
								<span><input type="checkbox" id="age-1" name="age" value="" /><label className="" for="age-1">10대</label></span>
								<span><input type="checkbox" id="age-2" name="age" value="" /><label className="" for="age-2">20대</label></span>
								<span><input type="checkbox" id="age-3" name="age" value="" /><label className="" for="age-3">30대</label></span>
								<span><input type="checkbox" id="age-4" name="age" value="" /><label className="" for="age-4">40대</label></span>
								<span><input type="checkbox" id="age-5" name="age" value="" /><label className="" for="age-5">50대</label></span>
							</div>
						</div>
						<div className="item">
							<p className="title">분야를 선택해주세요.<i></i>
								<span className="rightB">
									<input type="checkbox" id="field-chk" name="" /><label for="field-chk">전체</label>
								</span>
							</p>
							<div className="desc interest">
								<span><input type="checkbox" id="field-1" name="field" value="" /><label className="" for="field-1">뷰티</label></span>
								<span><input type="checkbox" id="field-2" name="field" value="" /><label className="" for="field-2">헬스</label></span>
								<span><input type="checkbox" id="field-3" name="field" value="" /><label className="" for="field-3">패션/잡화</label></span>
								<span><input type="checkbox" id="field-4" name="field" value="" /><label className="" for="field-4">전자제품</label></span>
								<span><input type="checkbox" id="field-5" name="field" value="" /><label className="" for="field-5">주방가전</label></span>
								<span><input type="checkbox" id="field-6" name="field" value="" /><label className="" for="field-6">테크</label></span>
								<span><input type="checkbox" id="field-7" name="field" value="" /><label className="" for="field-7">유아동</label></span>
								<span><input type="checkbox" id="field-8" name="field" value="" /><label className="" for="field-8">식품</label></span>
								<span><input type="checkbox" id="field-9" name="field" value="" /><label className="" for="field-9">엔터테이먼트</label></span>
								<span><input type="checkbox" id="field-10" name="field" value="" /><label className="" for="field-10">생활용품</label></span>
								<span><input type="checkbox" id="field-11" name="field" value="" /><label className="" for="field-11">여행</label></span>
								<span><input type="checkbox" id="field-12" name="field" value="" /><label className="" for="field-12">디자인</label></span>
								<span><input type="checkbox" id="field-13" name="field" value="" /><label className="" for="field-13">의료/건강</label></span>
								<span><input type="checkbox" id="field-14" name="field" value="" /><label className="" for="field-14">문화/예술</label></span>
								<span><input type="checkbox" id="field-15" name="field" value="" /><label className="" for="field-15">반려동물</label></span>
								<span><input type="checkbox" id="field-16" name="field" value="" /><label className="" for="field-16">기타</label></span>
							</div>
						</div>

						<h4>퀘스트룸</h4>
						<div className="item">
							<p className="title">질문을 입력해주세요.<i></i></p>
							<div className="desc">
								<div className="box-wrap">
									<div className="box draggable" draggable="true">
										<div className="tit img-photo-wrap">
											<input type="text" id="" name="" placeholder="질문을 입력해주세요." />
											<div className="img-photo">
												<label id='btnAtt'><input type='file' multiple='multiple' /></label>
												<div id="photo-view"></div>
											</div>
											<p className="comment">권장 크기 : 1000 x 500</p>
											<a href="#" className="btn-del">삭제</a>
										</div>
										<div className="tit">
											<p>
												<input type="text" id="" name="" placeholder="보기를 입력해주세요." />
												<label id='btnAtt2'><input type='file' multiple='multiple' />이미지 추가</label>
											</p>
											<a href="#" className="btn-del">삭제</a>
										</div>
										<div className="cont"><div id="photo-view2"></div></div>
										<p className="comment">권장 크기 : 1,000 x 1,000</p>
									</div>
									<div className="box draggable" draggable="true">
										<div className="tit">
											<p>
												<input type="text" id="" name="" placeholder="보기를 입력해주세요." />
												<label id='btnAtt2'><input type='file' multiple='multiple' />이미지 추가</label>
											</p>
											<a href="#" className="btn-del">삭제</a>
										</div>
										<div className="cont"><div id="photo-view2"></div></div>
										<p className="comment">권장 크기 : 1,000 x 1,000</p>
									</div>
									<div className="box draggable" draggable="true">
										<div className="tit">
											<p>
												<input type="text" id="" name="" placeholder="보기를 입력해주세요." />
												<label id='btnAtt2'><input type='file' multiple='multiple' />이미지 추가</label>
											</p>
											<a href="#" className="btn-del">삭제</a>
										</div>
										<div className="cont"><div id="photo-view2"></div></div>
										<p className="comment">권장 크기 : 1,000 x 1,000</p>
									</div>
								</div>
								<a href="#" className="btn-add">문항 추가하기</a>
							</div>
						</div>
					</div>

					<div className="right preview">
						<h4>미리보기</h4>
						<div className="phone">
							<div className="desc">
								<div className="modal">
									<ul className="info">
										<li>리워드: {Rewards}</li>
										<li>참여 인원수: {Max_Personnel}명</li>
										<li>별점 선택</li>
									</ul>
									<p className="title">{Title}</p>
									<p className="date">날짜</p>
									{Image === "" ? null : 
										<div className="titleImg">
											{freeImage && <img className="preview-img" src={freeImage} alt="preview-img"/>}
										</div>}
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="scope_btn-wrap">
					<form className="scope_registration-btn" onClick={onSubmitHandler} ><a>등록</a></form>
				</section>
			</div>
		</>
    )
}

export default TagData;