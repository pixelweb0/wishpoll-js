import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import Dropzone from 'react-dropzone';
import client from "../../../../client";
import Dateprofile from "../../../../Dateprofile";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import moment from "moment";

function PopupCorrect(){
    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

    const [Create_Date, setCreate_Data] = useState(null)

	const [Title, setTitle] = useState(null);

	const [Image, setImage] = useState(null);

    const [Route_Name, setRoute_Name] = useState(null)
    const [Route_Type, setRoute_Type] = useState(null)

    console.log("라우트 네임", Route_Name)
    console.log("라우트 타입", Route_Type)

	// 임시
	const [Type, setType] = useState(null);
	const [Key, setKey] = useState(null);
	const [Value, setValue] = useState(null);
	const [link, setLink] = useState(null);

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

    const location = useLocation();
    const listnum = location.state.data;
    useEffect(() => {
        client.get(`/banner/list/${listnum}`)
        .then(({data}) => {
            console.log(data[0])
            setTitle(data[0].Title)
            setImage(data[0].Image)
            setCreate_Data(moment(data[0].Create_Date).format("YYYY-MM-DD"))
            setRoute_Name(data[0].Route_Name)
            setRoute_Type(data[0].Route_Type)
        })
    }, [])

    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />

                <div className="contents">
                    <h3 className="registration_h">배너 등록/수정</h3>

                    <section id="registration_write">
                        <div className="item">
                            <p className="title">제목을 입력해주세요.</p>
                            <div className="desc">
                                <div><input type="text" onChange={(e) => setTitle(e.target.value)} maxLength="30" value={Title || ""}/></div>
                                <p className="comment">30자 이내로 적어주세요.</p>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">등록일</p>
                            <div className="desc">
                                <div><input type="text" value={Create_Date || ""} readOnly /></div>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">게시 기간을 입력해주세요.</p>
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
                                        closeOnScroll={true}
                                        placeholderText="폴 시작일"
                                    /> */}
                                    {/* <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <span className="txt">시</span>
                                    <select>
                                        <option value="00">00</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                    </select>
                                    <span className="txt">분</span> */}
                                    <span className="aa">~</span>
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
                                        placeholderText="폴 종료일"
                                    /> */}
                                    {/* <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <span className="txt">시</span>
                                    <select>
                                        <option value="00">00</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                        <option value="60">60</option>
                                    </select>
                                    <span className="txt">분</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">게시 상태를 체크해주세요.</p>
                            <div className="desc">
                                <span><input type="radio" id="type-1" name="type" /><label className="type2" htmlFor="type-1" onClick={e => setType(e.target.innerText)}>게시 대기</label></span>
                                <span><input type="radio" id="type-2" name="type" /><label className="type2" htmlFor="type-2" onClick={e => setType(e.target.innerText)}>게시 중</label></span>
                                <span><input type="radio" id="type-3" name="type" /><label className="type2" htmlFor="type-3" onClick={e => setType(e.target.innerText)}>게시 중지</label></span>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">링크를 입력해주세요.</p>
                            <div className="desc">
                                <p>
                                    <span className="txt">앱 링크</span>
                                    <input type="text" className="w180" placeholder="Key" onChange={e => setKey(e.target.value)}/> <input type="text" className="w180"  placeholder="Value" onChange={e => setValue(e.target.value)}/>
                                </p>
                                <p>
                                    <span className="txt">웹 링크</span>
                                    <input type="text" className="w80" placeholder="http://" onChange={e => setLink(e.target.value)}/>
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">배너 이미지를 입력해주세요.</p>
                            <div className="desc">
                                <div className="img-photo">
                                    <Dropzone onDrop={acceptedFiles => {
                                        setImage(acceptedFiles[0]);
                                        handlefreeImage(acceptedFiles[0]);
                                        }}>
                                        {({getRootProps, getInputProps}) => (
                                            <div id="btnAtt" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                            </div>      
                                        )}
                                    </Dropzone>
                                    {Image ? <div id="photo-view">
                                        <img className="preview-img" src={Image} alt="preview-img"/>
                                        <input type="button" value="X" className="deleteImg" onClick={removeImg}/>
                                    </div> : null}
                                </div>
                                <p className="comment">권장 크기 : 1000 x 500</p>
                            </div>
                        </div>
                    </section>

                    <section id="registration_btn-wrap">
                        <a className="btn btnCF">등록/수정</a>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PopupCorrect;