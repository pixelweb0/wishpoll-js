import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/esm/locale';
import client from "../../../../client";
import "./UpDown.css";
import Dropzone from 'react-dropzone';

function UpDown(){
    const formData = new FormData();

    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

    const [Title, setTitle] = useState("");

    const [Scale_Start_Text, setScale_Start_Text] = useState("");
    const handleScale_Start_Text = (e) => {
        setScale_Start_Text(e.target.value);
    }

    const [Scale_End_Text, setScale_End_Text] = useState("");
    const handleScale_End_Text = (e) => {
        setScale_End_Text(e.target.value);
    }

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

    const Type = 1;
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

    const Scale_Mid_Text = null;
	const Is_Using_Others = 0;
	const Regist_M_Idx = null;

	const onSubmitHandler = async(e) => {
		e.preventDefault();

        console.log("????????????????????????????????????????????????????????????????????????");
        formData.append('files',Image)
        console.log("????????????????????????????????????????????????????????????????????????");

		// for (let key of formData.keys()) {
		// 	console.log(key);
		//   }
		//   // FormData??? value ??????
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
			alert('?????? ????????? ?????? - ??????????????? ???????????????');
		})
		
		
		

		alert("?????? ???????????????.");
        // document.location.href="/polltotallist";
	};

    return (
        <>
            <div className="contents">
                <section id="updown_write">
                    <div className="updown_left">
                        <div className="item">
                            <p className="title">????????? ??????????????????.</p>
                            <div className="desc">
								<div><input type="text" id="" name="" placeholder="" onChange={e => setTitle(e.target.value)}/></div>
                                <p className="comment">30??? ????????? ???????????????.</p>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">?????? ???????????? ??????????????????.</p>
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
                                <p className="comment">?????? ?????? : 1000 x 500</p>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">??????????????? ??????????????????.</p>
                            <div className="desc">
                                <input type="text" className="w180" onChange={handleScale_Start_Text}/>
                                <input type="text" className="w180" onChange={handleScale_End_Text}/>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">??? ?????????</p>
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
										placehoder="??? ?????????"
									/>

                                    {/* <DatePicker
										className="form-control start-date date"
										selected={Start_Date}
										onChange={date => setStart_Date(date)}
										selectsStart
										startDate={Start_Date}
										endDate={End_Date}
										locale={ko}
										dateFormat="yyyy??? MM??? dd??? (eee)"
										minDate={new Date()}
										placeholderText="??? ?????????"
										closeOnScroll={true}                                       
									/> */}
                                    <input type="text" className="timepicker clock" name="timepicker" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">??? ?????????</p>
                            <div className="desc">
                                <div className="input-group">
									<input
										type="date"
										className="form-control end-date date"
										format="yyyy-MM-dd"
										name="datepicker"
										min={new Date().toISOString().slice(0, 10)}
                  						value={End_Date || ''}
										placehoder="??? ?????????"
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
										dateFormat="yyyy??? MM??? dd??? (eee)"
										placeholderText="??? ?????????"
										closeOnScroll={true}
									/> */}
                                    <input type="text" className="timepicker clock" name="timepicker" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">?????? ?????????</p>
                            <div className="desc">
                                <div><input type="text" className="txtR" onChange={handleRewards}/><span className="txt">P</span></div>
                            </div>
                        </div>
                        <div className="item">
							<p className="title">?????? ?????????</p>
							<div className="desc">
								<div><input type="text" className={!check ? "txtR" : "txtR no"} value={Max_Personnel || ''} onChange={handleMax_Personnel} readOnly={!check ? false : true}/><span className="txt">???</span></div>
                                <p className="rightB"><input type="checkbox" id="agr-chk" name="" onClick={handlecheck}/><label htmlFor="agr-chk">?????? ????????? ?????? ??????</label></p>
							</div>
						</div>
						<div className="item">
							<p className="title">??????</p>
							<div className="desc">
								<p className="chkBox"><input type="checkbox" id="agr-chk2" name="" onClick={handleCheck}/><label htmlFor="agr-chk2"></label></p>
							</div>
						</div>
                    </div>

                    <div className="right preview">
                        <h4>????????????</h4>
                        <div className="phone">
                            <div className="desc">
								<div className="modal">
									<ul className="info">
										<li>?????????: {Rewards}</li>
										<li>?????? ?????????: {Max_Personnel}???</li>
										<li>Up&Down</li>
									</ul>
									<p className="title">{Title}</p>
									<p className="date">??????</p>
									{Image === "" ? null : 
										<div className="titleImg">
											{freeImage && <img className="preview-img" src={freeImage} alt="preview-img"/>}
										</div>}
									<div className="updowns">
										<ul className="updown">
											<li>{Scale_Start_Text}</li>
											<li>{Scale_End_Text}</li>
										</ul>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="updown_btn-wrap">
					<form className="updown_registration-btn" onClick={onSubmitHandler}><a>??????</a></form>
				</section>
            </div>
        </>
    )

}

export default UpDown;