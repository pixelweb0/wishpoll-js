import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/esm/locale';
import client from "../../../../client";
import "./BalanceGame.css";
import Dropzone from 'react-dropzone';

function BalanceGame(){
	// 파일 업로드를 위한  폼데이터 
	const formData = new FormData();

	const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);
	
	

	const [Title, setTitle] = useState("");

	const [Select_1, setSelect_1] = useState("");
    const handleSelect_Text_1 = (e) => {
        setSelect_1(e.target.value);
    }

	

	const [Select_2, setSelect_2] = useState("");
    const handleSelect_Text_2 = (e) => {
        setSelect_2(e.target.value);
    }

	const [Rewards, setRewards] = useState();
	const handleRewards = (e) => {

		if(!parseInt(e.target.value)){
			setRewards(0);
		}else{
			setRewards(parseInt(e.target.value));
		}
		
	}

	const [Max_Personnel, setMax_Personnel] = useState();
	const handleMax_Personnel = (e) => {

		if(!parseInt(e.target.value)){
			setMax_Personnel(0);
		}else{
			setMax_Personnel(parseInt(e.target.value));
		}
	}

	const [Image, setImage] = useState('');

	const [freeImage, setfreeImage] = useState('');
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

	
	const [Select_Image_1, setSelect_Image_1] = useState('');

	const [freeImage1, setfreeImage1] = useState('');
	const handlefreeImage1 = (fileBlob) => {       
		const reader = new FileReader();         
		reader.readAsDataURL(fileBlob);

		setSelect_Image_1(fileBlob);       
		return new Promise((resolve) => {        
			reader.onload = () => {         
				setfreeImage1(reader.result);          
				resolve();
			};
		});
	};

	const removeSelectImg1 = () => {
		setSelect_Image_1('')
		setfreeImage1('')
	}
	const removeSelectImg2 = () => {
		setSelect_Image_2('')
		setfreeImage2('')
	}
	
	const [Select_Image_2, setSelect_Image_2] = useState('');

	const [freeImage2, setfreeImage2] = useState('');
	const handlefreeImage2 = (fileBlob) => {       
		const reader = new FileReader();         
		reader.readAsDataURL(fileBlob);
		
		setSelect_Image_2(fileBlob);   
		return new Promise((resolve) => {
			reader.onload = () => {
				setfreeImage2(reader.result);          
				resolve();
			};
		});
	};
	
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

	const Type = 0;
    const Max_Choice = 1;
    const Random = 0;
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
	
	//formData.append('files', )
	formData.append('files', Image)
	formData.append('files', Select_Image_1)
	formData.append('files', Select_Image_2)
	// for (let key of formData.keys()) {
	// 		console.log(key);
	// 	  }
	// 	// FormData의 value 확인
	//   for (let value of formData.values()) {
	// 	console.log(value);
	//   }
	const onSubmitHandler = async(e) => {
		e.preventDefault();

		 client.post('/uploads/fileups', formData).then((res) =>{

			console.log(res.data.returnValue.length);

			console.log(res)
			const Image = res.data.returnValue[0];
			const Select_Image_1 = res.data.returnValue[1];
			const Select_Image_2 = res.data.returnValue[2];
			
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
				<section id="balancegame_write">
					<div className="balancegame_left">
						<div className="item">
							<p className="title">질문을 입력해주세요.</p>
							<div className="desc">
								<div><input type="text" id="" name="" placeholder="" onChange={e => setTitle(e.target.value)}/></div>
								<p className="comment">30자 이내로 적어주세요.</p>
							</div>
						</div>
						<div className="item">
							<p className="title">질문 이미지를 추가해주세요.</p>
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
							<p className="title">보기를 입력해주세요.</p>
							<div className="desc">
								<div className="boxs boxsone">
									<input className="ex-box" type="text" onChange={handleSelect_Text_1} placeholder="보기를 입력해주세요." maxLength="30"/>
									<Dropzone onDrop={acceptedFiles => {
										console.log(acceptedFiles)
										setSelect_Image_1(acceptedFiles[0]);
										handlefreeImage1(acceptedFiles[0]);
										}}>
										{({getRootProps, getInputProps}) => (
											<div id="btnAtt2" {...getRootProps()}>
												<input {...getInputProps()} />
											</div>      
										)}
									</Dropzone>
									{freeImage1 ? <div id="photo-view">
										<img className="preview-img" src={freeImage1} alt="preview-img"/>
										<input type="button" value="X" className="deleteImg" onClick={removeSelectImg1}/>
									</div> : null}
									<p className="comment">권장 크기: 1,000 x 1,000</p>
								</div>
								<div className="boxs">
									<input className="ex-box" type="text" onChange={handleSelect_Text_2} placeholder="보기를 입력해주세요." maxLength="30"/>
									<Dropzone onDrop={acceptedFiles => {
										console.log(acceptedFiles)
										setSelect_Image_2(acceptedFiles[0]);
										handlefreeImage2(acceptedFiles[0]);
										}}>
										{({getRootProps, getInputProps}) => (
											<div id="btnAtt2" {...getRootProps()}>
												<input {...getInputProps()} />
											</div>      
										)}
									</Dropzone>
									{freeImage2 ? <div id="photo-view">
										<img className="preview-img" src={freeImage2} alt="preview-img"/>
										<input type="button" value="X" className="deleteImg" onClick={removeSelectImg2}/>
									</div> : null}
									<p className="comment">권장 크기: 1,000 x 1,000</p>
								</div>
							</div>
						</div>
						<div className="item">
							<p className="title">폴 시작일</p>
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
										placeholderText="폴 시작일"
										closeOnScroll={true}
									/> */}
									<input type="text" className="timepicker clock" name="timepicker" placeholder="시간"/>
								</div>
							</div>
						</div>
						<div className="item">
							<p className="title">폴 종료일</p>
							<div className="desc">
								<div className="input-group">
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
									<input type="text" className="timepicker clock" name="timepicker" placeholder="시간"/>
								</div>
							</div>
						</div>
						<div className="item">
							<p className="title">지급 포인트</p>
							<div className="desc">
								<div><input type="text" className="txtR" onChange={handleRewards}/><span className="txt">P</span></div>
							</div>
						</div>
						<div className="item">
							<p className="title">참여 인원수</p>
							<div className="desc">
								<div><input type="text" className={!check ? "txtR" : "txtR no"} value={Max_Personnel || ''} onChange={handleMax_Personnel} readOnly={!check ? false : true}/><span className="txt">명</span></div>
                                <p className="rightB"><input type="checkbox" id="agr-chk" name="" onClick={handlecheck}/><label htmlFor="agr-chk">참여 인원수 제한 없음</label></p>
							</div>
						</div>
						<div className="item">
							<p className="title">승인</p>
							<div className="desc">
								<p className="chkBox"><input type="checkbox" id="agr-chk2" name="" onClick={handleCheck}/><label htmlFor="agr-chk2"></label></p>
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
										<li>밸런스 게임</li>
									</ul>
									<p className="title">{Title}</p>
									<p className="date">날짜</p>
									{Image === "" ? null : 
										<div className="titleImg">
											{freeImage && <img className="preview-img" src={freeImage} alt="preview-img"/>}
										</div>}
									<div className="balances">
										<ul className="balance">
											<li>{freeImage1 && <img className="preview-img1" src={freeImage1} alt="preview-img"/>}</li>
											<li><p>{Select_1}</p></li>
										</ul>
										{Select_Image_1 && Select_Image_2 ? <span className="vs">VS</span> : null}
										<ul className="balance">
											<li>{freeImage2 && <img className="preview-img1" src={freeImage2} alt="preview-img"/>}</li>
											<li><p>{Select_2}</p></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="balancegame_btn-wrap">
					<form className="balancegame_registration-btn" onClick={onSubmitHandler}><a>등록</a></form>
				</section>
			</div>
		</>
    )
}

export default BalanceGame;