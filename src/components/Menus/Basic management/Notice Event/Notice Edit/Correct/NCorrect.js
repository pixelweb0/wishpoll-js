import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import client from "../../../../../client";
import DatePicker from "react-datepicker";
import {ko} from 'date-fns/esm/locale';
import Dateprofile from "../../../../../Dateprofile";
import Sidebar from "../../../../../sidebarmenu/Sidebar";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Dropzone from 'react-dropzone';

function NCorrect() {
    const location = useLocation();
    const listnum = location.state.data;

    const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);

	const [Select, setSelect] = useState("선택");

	const [Title, setTitle] = useState(null);
	const handleTitle = (e) => {
		setTitle(e.target.value);
	}
	
	const [Thumbnail_Image_Uri, setThumbnail_Image_Uri] = useState(null)
	const [freeThumbnail, setfreeThumbnail] = useState('');
	const handlefreeThumbnail = (fileBlob) => {
		const reader = new FileReader();
		if(fileBlob){
			reader.readAsDataURL(fileBlob);
			setThumbnail_Image_Uri(fileBlob);
		}

		return new Promise((resolve) => {
			reader.onload = () => {
				setfreeThumbnail(reader.result);
				resolve();
			};
		});	
	};
	const removeThumbnail = () => {
		setThumbnail_Image_Uri('')
		setfreeThumbnail('')
	}

	const [Image_Uri, setImage_Uri] = useState(null);
	
	const [Image, setImage] = useState(null);
	const [freeImage, setfreeImage] = useState('');
	const handlefreeImage = (fileBlob) => {
		const reader = new FileReader();
		if(fileBlob){
			reader.readAsDataURL(fileBlob);
			setImage(fileBlob);
			setImage_Uri(fileBlob);
		}

		return new Promise((resolve) => {
			reader.onload = () => {
				setfreeImage(reader.result);
				resolve();
			};
		});	
	};
	const removeImg = () => {
		setImage_Uri('')
        setImage('')
		setfreeImage('')
	}

	const [Content, setContent] = useState("");

	const [endcheck, setEndcheck] = useState(false);

	const [Type, setType] = useState(null)

	const [Hit, setHit] = useState(0)
    
    useEffect(() => {
        client.get(`/notice-board/list/${listnum}`)
        .then(({data}) => {
            setTitle(data.Title)
            setContent(data.Content)
            setHit(data.Hit)
            setImage(data.Image)

            setThumbnail_Image_Uri(data.setThumbnail_Image_Uri)
        })

    }, [])

    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile/>

                <div className="contents">
                    <h3 className="notice-edit_h">공지사항/이벤트 작성/수정</h3>
                    <section id="notice-edit_write">
                        <div className="item">
                            <p className="title">분류를 선택해주세요.</p>
                            <div className="desc">
                                <select onChange={(e) => setSelect(e.target.value)}>
                                    <option value="선택">선택</option>
                                    <option value="공지사항">공지사항</option>
                                    <option value="이벤트">이벤트</option>
                                </select>
                            </div>
                        </div>
                        <div className="item">
                            <p className="title">제목을 입력해주세요.</p>
                            <div className="desc">
                                <div><input type="text" onChange={handleTitle} maxLength="30" value={Title || ""}/></div>
                                <p className="comment">30자 이내로 적어주세요.</p>
                            </div>
                        </div>
                        {Select === "이벤트" ? (
                            <div className="item">
                                <p className="title">이벤트 썸네일 이미지 첨부해주세요.</p>
                                <div className="desc">
                                    <div className="img-photo">
                                        <Dropzone onDrop={acceptedFiles => {
                                            setThumbnail_Image_Uri(acceptedFiles[0]);
                                            handlefreeThumbnail(acceptedFiles[0]);
                                            }}>
                                            {({getRootProps, getInputProps}) => (
                                                <div id="btnAtt" {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                </div>      
                                            )}
                                        </Dropzone>
                                        {Thumbnail_Image_Uri ? <div id="photo-view">
                                            <img className="preview-img" src={Thumbnail_Image_Uri} alt="preview-img"/>
                                            <input type="button" value="X" className="deleteImg" onClick={removeThumbnail}/>
                                        </div> : null}
                                    </div>
                                    <p className="comment">권장 크기 : 1000 x 500</p>
                                </div>
                            </div>
                        ) : null}
                        <div className="item">
                            <p className="title">내용을 입력해주세요.</p>
                            <div className="desc">
                                <div>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{
                                            placeholder: "내용을 입력하세요.",
                                        }}
                                        data={Content || ""}
                                        // onReady={editor => {
                                        // 	console.log('Editor is ready to use!', editor);
                                        // }}
                                        
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setContent(data)
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
                        </div>
                        <div className="item">
                            <p className="title">본문 이미지 첨부해주세요.</p>
                            <div className="desc">
                                <div className="img-photo">
                                    <Dropzone onDrop={acceptedFiles => {
                                        {Select === "공지사항" ? setImage(acceptedFiles[0]) : setImage_Uri(acceptedFiles[0])}
                                        handlefreeImage(acceptedFiles[0]);
                                        }}>
                                        {({getRootProps, getInputProps}) => (
                                            <div id="btnAtt" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                            </div>      
                                        )}
                                    </Dropzone>
                                    {Image_Uri ? <div id="photo-view">
                                        <img className="preview-img" src={Image_Uri} alt="preview-img"/>
                                        <input type="button" value="X" className="deleteImg" onClick={removeImg}/>
                                    </div> : null}
                                </div>
                                <p className="comment">권장 크기 : 1000 x 500</p>
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
                                        className="w180 form-control start-date date"
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
                                    <div className={!endcheck ? "" : "no"}>
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
                                            placeholderText="폴 종료일"
                                            closeOnScroll={true}
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
                                <p className="chkBox"><input type="checkbox" id="agr-chk" onClick={() => setEndcheck(!endcheck)}/><label htmlFor="agr-chk">종료일 없음</label></p>
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
                    </section>
        
                    <section id="notice-edit_btn-wrap">
                        <form className="btn btnCF"><a>등록/수정</a></form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default NCorrect;