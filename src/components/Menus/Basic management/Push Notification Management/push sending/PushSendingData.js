import React, {useState} from "react";
import "./PushSending.css";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Dropzone from 'react-dropzone';

function PushSendingData(){
    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

	// 임시
	const [data, setData] = useState(null);
	const [Title, setTitle] = useState(null);
	const [Mtype, setMtype] = useState(null);
	const [Key, setKey] = useState(null);
	const [Value, setValue] = useState(null);
	const [Link, setLink] = useState(null);
	const [Range, setRange] = useState(null);
	const [Device, setDevice] = useState(null);
	const [Schedule, setSchedule] = useState(null);
	const [Period, setPeriod] = useState(null);
	const [Days, setDays] = useState(null);
	const [UserAll, setUserAll] = useState(0);
	const handleUserAll = (e) => {
		if(e.target.checked){
			console.log("UserAll CHECK")
			setUserAll(1)
		} else{
			console.log("UserAll NO CHECK")
			setUserAll(0)
		}
	}
	const [Person, setPerson] = useState(0);
	const handlePerson = (e) => {
		if(e.target.checked){
			console.log("Person CHECK")
			setPerson(1)
		} else{
			console.log("Person NO CHECK")
			setPerson(0)
		}
	}
	const [SinMul, setSinMul] = useState(null);



	const [Image, setImage] = useState(null);

	const [freeImage, setfreeImage] = useState(null);
	const handlefreeImage = (fileBlob) => {
		const reader = new FileReader();
		if(fileBlob){
			reader.readAsDataURL(fileBlob);
			setImage(fileBlob);
		}

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

    return (
        <div className="contents">
			<section id="push-sending_write">
				<div className="left">
					<div className="item">
						<p className="title">등록일</p>
						<div className="desc">
							<div><input type="text" id="" name="" placeholder="" value="2022-10-01" disabled /></div>
						</div>
					</div>
					<div className="item">
						<p className="title">메시지 유형을 선택해주세요.</p>
						<div className="desc">
							<span><input type="radio" id="message-1" name="message" value="" /><label className="" htmlFor="message-1" onClick={e => setMtype(e.target.innerText)}>TEXT</label></span>
							<span><input type="radio" id="message-2" name="message" value="" /><label className="" htmlFor="message-2" onClick={e => setMtype(e.target.innerText)}>RICH</label></span>
						</div>
					</div>
					<div className="item">
						<p className="title">메시지 제목을 입력해주세요.</p>
						<div className="desc">
							<div><input type="text" id="" name="" placeholder="" maxLength="30" onChange={e => setTitle(e.target.value)}/></div>
							<p className="comment">30자 이내로 적어주세요.</p>
						</div>
					</div>
					<div className="item">
						<p className="title">메시지 내용을 입력해주세요.</p>
						<div className="desc">
							<CKEditor
								editor={ClassicEditor}
								config={{
									placeholder: "내용을 입력하세요.",
								}}

								onReady={editor => {
									// console.log('Editor is ready to use!', editor);
								}}
								
								onChange={(event, editor) => {
									const data = editor.getData();
									setData(data)
								}}
								
								onBlur={(event, editor) => {
									console.log('Blur.', editor);
								}}
								
								onFocus={(event, editor) => {
									console.log('Focus.', editor);
								}}

							/>
						</div>
					</div>
					<div className="item">
						<p className="title">이미지를 입력해주세요.</p>
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
							<p className="comment">권장 크기 : 1000 x 500</p>
						</div>
					</div>
					<div className="item">
						<p className="title">링크를 입력해주세요.</p>
						<div className="desc">
							<p>
								<span className="txt">앱 링크</span>
								<input type="text" id="" className="w180" name="" placeholder="Key" onChange={e => setKey(e.target.value)}/> <input type="text" id="" className="w180" name="" placeholder="Value" onChange={e => setValue(e.target.value)}/>
							</p>
							<p>
								<span className="txt">웹 링크</span>
								<input type="text" id="" className="w80" name="" placeholder="http://" onChange={e => setLink(e.target.value)}/>
							</p>
						</div>
					</div>
					<div className="item">
						<p className="title">발송 범위를 선택해주세요.</p>
						<div className="desc">
							<span><input type="radio" id="range-1" name="range" value="" /><label className="" htmlFor="range-1" onClick={e => setRange(e.target.innerText)}>전체 공지</label></span>
							<span><input type="radio" id="range-2" name="range" value="" /><label className="" htmlFor="range-2" onClick={e => setRange(e.target.innerText)}>광고 수신 동의자</label></span>
						</div>
					</div>
					<div className="item">
						<p className="title">발송 범위를 선택해주세요.</p>
						<div className="desc">
							<span><input type="radio" id="device-1" name="device" value="" /><label className="" htmlFor="device-1" onClick={e => setDevice(e.target.innerText)}>안드로이드</label></span>
							<span><input type="radio" id="device-2" name="device" value="" /><label className="" htmlFor="device-2" onClick={e => setDevice(e.target.innerText)}>iOS</label></span>
						</div>
					</div>
					<div className="item">
						<p className="title">발송 일정을 선택해주세요.</p>
						<div className="desc">
							<span><input type="radio" id="schedule-1" name="schedule" value="" /><label className="" htmlFor="schedule-1" onClick={e => setSchedule(e.target.innerText)}>즉시 발송</label></span>
							<span><input type="radio" id="schedule-2" name="schedule" value="" /><label className="" htmlFor="schedule-2" onClick={e => setSchedule(e.target.innerText)}>예약 발송</label></span>
							<span><input type="radio" id="schedule-3" name="schedule" value="" /><label className="" htmlFor="schedule-3" onClick={e => setSchedule(e.target.innerText)}>반복 발송</label></span>
						</div>
					</div>
					<div className="item">
						<p className="title">발송 시간을 입력해주세요.</p>
						<div className="desc">
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
								closeOnScroll={true}
							/> */}
							{/* <input type="text" className="w180 timepicker clock" name="timepicker" /> */}
						</div>
					</div>
					<div className="item">
						<p className="title">발송 주기를 입력해주세요.</p>
						<div className="desc">
							<select>
								<option value="주기 선택" onChange={e => setPeriod(e.target.value)}>주기 선택</option>
								<option value="매일">매일</option>
								<option value="매주">매주</option>
								<option value="매월">매월</option>
								<option value="매년">매년</option>
							</select>
							<select>
								<option value="주기 상태" onChange={e => setDays(e.target.value)}>주기 선택</option>
								<option value="월">월</option>
								<option value="화">화</option>
								<option value="수">수</option>
								<option value="목">목</option>
								<option value="금">금</option>
								<option value="토">토</option>
								<option value="일">일</option>
							</select>
							{/* <input type="text" className="w180 timepicker clock" name="timepicker" /> */}
						</div>
					</div>
					<div className="item">
						<p className="title">반복 종료일을 선택해주세요.</p>
						<div className="desc">
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
					</div>
					<div className="item">
						<p className="title">받는 사람을 선택해주세요.</p>
						<div className="desc">
							<div className="box-wrap type2">
								<ul className="radio-select-wrap">
									<li>
										<p><input type="checkbox" id="user-all" name="" /><label htmlFor="user-all" onClick={handleUserAll}>전체 사용자</label></p>
									</li>
									<li>
										<p><input type="checkbox" id="chk1" name="chk" /><label htmlFor="chk1" onClick={handlePerson}>인구통계 타겟</label></p>
										<div className="cont">
											<p className="num4">
												<span><input type="radio" id="sex-1" name="sex" value="" /><label className="" htmlFor="sex-1" onClick={e => setSinMul(e.target.innerText)}>단일 선택</label></span>
												<span><input type="radio" id="sex-2" name="sex" value="" /><label className="" htmlFor="sex-2" onClick={e => setSinMul(e.target.innerText)}>다중 선택</label></span>
											</p>
											<p className="num4">
												<span><input type="radio" id="age-1" name="age" value="" /><label className="" htmlFor="age-1">20대</label></span>
												<span><input type="radio" id="age-2" name="age" value="" /><label className="" htmlFor="age-2">30대</label></span>
												<span><input type="radio" id="age-3" name="age" value="" /><label className="" htmlFor="age-3">40대</label></span>
												<span><input type="radio" id="age-4" name="age" value="" /><label className="" htmlFor="age-4">50대</label></span>
											</p>
											<p className="num8">
												<span><input type="radio" id="interest-1" name="interest" value="" /><label className="" htmlFor="interest-1">뷰티</label></span>
												<span><input type="radio" id="interest-2" name="interest" value="" /><label className="" htmlFor="interest-2">헬스</label></span>
												<span><input type="radio" id="interest-3" name="interest" value="" /><label className="" htmlFor="interest-3">패션/잡화</label></span>
												<span><input type="radio" id="interest-4" name="interest" value="" /><label className="" htmlFor="interest-4">전자제품</label></span>
												<span><input type="radio" id="interest-5" name="interest" value="" /><label className="" htmlFor="interest-5">주방가전</label></span>
												<span><input type="radio" id="interest-6" name="interest" value="" /><label className="" htmlFor="interest-6">테크</label></span>
												<span><input type="radio" id="interest-7" name="interest" value="" /><label className="" htmlFor="interest-7">유아동</label></span>
												<span><input type="radio" id="interest-8" name="interest" value="" /><label className="" htmlFor="interest-8">식품</label></span>
												<span><input type="radio" id="interest-9" name="interest" value="" /><label className="" htmlFor="interest-9">엔터테이먼트</label></span>
												<span><input type="radio" id="interest-10" name="interest" value="" /><label className="" htmlFor="interest-10">생활용품</label></span>
												<span><input type="radio" id="interest-11" name="interest" value="" /><label className="" htmlFor="interest-11">여행</label></span>
												<span><input type="radio" id="interest-12" name="interest" value="" /><label className="" htmlFor="interest-12">디자인</label></span>
												<span><input type="radio" id="interest-13" name="interest" value="" /><label className="" htmlFor="interest-13">의료/건강</label></span>
												<span><input type="radio" id="interest-14" name="interest" value="" /><label className="" htmlFor="interest-14">문화/예술</label></span>
												<span><input type="radio" id="interest-15" name="interest" value="" /><label className="" htmlFor="interest-15">반려동물</label></span>
												<span><input type="radio" id="interest-16" name="interest" value="" /><label className="" htmlFor="interest-16">기타</label></span>
											</p>
											<p className="num4">
												<span><input type="radio" id="area-1" name="area" value="" /><label className="" htmlFor="area-1">전국</label></span>
												<span><input type="radio" id="area-2" name="area" value="" /><label className="" htmlFor="area-2">서울</label></span>
												<span><input type="radio" id="area-3" name="area" value="" /><label className="" htmlFor="area-3">경기</label></span>
												<span><input type="radio" id="area-4" name="area" value="" /><label className="" htmlFor="area-4">강원</label></span>
												<span><input type="radio" id="area-5" name="area" value="" /><label className="" htmlFor="area-5">충청</label></span>
												<span><input type="radio" id="area-6" name="area" value="" /><label className="" htmlFor="area-6">전라</label></span>
												<span><input type="radio" id="area-7" name="area" value="" /><label className="" htmlFor="area-7">경상</label></span>
												<span><input type="radio" id="area-8" name="area" value="" /><label className="" htmlFor="area-8">제주</label></span>
											</p>
										</div>
									</li>
									<li>
										<p><input type="checkbox" id="chk2" name="chk" /><label htmlFor="chk2">특정 그룹</label></p>
										<div className="cont">
											<span className="txt">지정할 그룹</span>
											<select>
												<option value="그룹 선택">그룹 선택</option>
												<option value="그룹1">그룹1</option>
												<option value="그룹2">그룹2</option>
											</select>
											<span className="txt">제외할 그룹</span>
											<select>
												<option value="그룹 선택">그룹 선택</option>
												<option value="그룹1">그룹1</option>
												<option value="그룹2">그룹2</option>
											</select>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="item">
						<p className="title">수신 대상자</p>
						<div className="desc">
							<input type="text" id="" className="w180" name="" placeholder="" value="1,345" disabled />
							<span className="txt">명</span>
						</div>
					</div>
				</div>

				<div className="right preview">
					<h4>미리보기 (Android)</h4>
					<div className="device"></div>
					<h4>미리보기 (iOS)</h4>
					<div className="device"></div>
				</div>
			</section>
            <section id="push-sending_btn-wrap">
                <a href="#" className="btn btnCF">발송하기</a>
            </section>
		</div>
    )
}

export default PushSendingData;