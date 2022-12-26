import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Dateprofile from "../../../../Dateprofile";
import Sidebar from "../../../../sidebarmenu/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/esm/locale';
import client from "../../../../client";
import "./Correct.css";
import moment from "moment";
import 'moment/locale/ko';
import Dropzone from 'react-dropzone';
import MultiCorrect from "./MultiCorrect";

function Correct() {
    const [Select_3, setSelect_3] = useState(null);
    const [Select_4, setSelect_4] = useState(null);
    const [Select_5, setSelect_5] = useState(null);
    const [Select_6, setSelect_6] = useState(null);
    const [Select_7, setSelect_7] = useState(null);
    const [Select_8, setSelect_8] = useState(null);

    const [Select_Image_3, setSelect_Image_3] = useState(null);
    const [Select_Image_4, setSelect_Image_4] = useState(null);
    const [Select_Image_5, setSelect_Image_5] = useState(null);
    const [Select_Image_6, setSelect_Image_6] = useState(null);
    const [Select_Image_7, setSelect_Image_7] = useState(null);
    const [Select_Image_8, setSelect_Image_8] = useState(null);

    const [freeImage3, setfreeImage3] = useState(null);
    const [freeImage4, setfreeImage4] = useState(null);
    const [freeImage5, setfreeImage5] = useState(null);
    const [freeImage6, setfreeImage6] = useState(null);
    const [freeImage7, setfreeImage7] = useState(null);
    const [freeImage8, setfreeImage8] = useState(null);

	const [Start_Date, setStart_Date] = useState(null);
	const [End_Date, setEnd_Date] = useState(null);


	const [Title, setTitle] = useState("");

	const [Select_1, setSelect_1] = useState(null);
    const handleSelect_Text_1 = (e) => {
        setSelect_1(e.target.value);
    }

	const [Select_2, setSelect_2] = useState(null);
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

    const [Max_Choice, setMax_Choice] = useState();
	const handleMax_Choice = (e) => {
		if(Type === 4){
			setMax_Choice(parseInt(1))
		}

		setMax_Choice(parseInt(e.target.value))
	}

	const [Image, setImage] = useState('');

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



    const [Scale_Start, setScale_Start] = useState();
    const handleScale_Start = (e) => {
        if(!parseInt(e.target.value)){
            setScale_Start(0)
        } else{
            setScale_Start(parseInt(e.target.value));
        }
    }

    const [Scale_End, setScale_End] = useState();
	const handleScale_End = (e) => {
        if(!parseInt(e.target.value)){
            setScale_End(0)
        } else{
            setScale_End(parseInt(e.target.value));
        }
	}

    const [Scale_Unit, setScale_Unit] = useState();

    const [Scale_Start_Text, setScale_Start_Text] = useState();
    const handleScale_Start_Text = (e) => {
        setScale_Start_Text(e.target.value);
    }

    const [Scale_Mid_Text, setScale_Mid_Text] = useState();
	const handleScale_Mid_Text = (e) => {
		setScale_Mid_Text(e.target.value);
	}

    const [Scale_End_Text, setScale_End_Text] = useState();
	const handleScale_End_Text = (e) => {
		setScale_End_Text(e.target.value);
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

    const [State, setState] = useState(0);
	const Checkhandler = e => {
		if(e.target.checked){
			console.log("CHECK")
			setState(1);
		} else{
			console.log("NO CHECK")
			setState(0)
		}
	}

    const [Type, setType] = useState("");

    const removeImg = () => {
		setImage('')
		setfreeImage('')
	}

    const removeSelectImg1 = () => {
		setSelect_Image_1('')
		setfreeImage1('')
	}
	const removeSelectImg2 = () => {
		setSelect_Image_2('')
		setfreeImage2('')
	}

    // div 추가
	const [countDiv, setCountDiv] = useState([]);
	const onAddDetailDiv = () => {
        let countArr = [...countDiv]
        let counter = countArr.slice(-1)[0]

		counter += 1;
		countArr.push(counter)
		setCountDiv(countArr)

		// let countArr = [...countDiv]

        // let len = countDiv.length+1

        // const resetDiv = [];
        // for(let i=0; i<len; i++){
        //     resetDiv.push(i);
        // }

        // console.log("!!!!!RESET!!!!!", resetDiv)

		// countArr.push(len)
        // console.log("length", countDiv.length)
        // console.log("COUNT ARR!!", countArr)
		// setCountDiv(resetDiv)
	}

	const onRemove = (targetId) => {
		console.log(`${targetId.i}가 삭제됩니다`)
		let countArr = [...countDiv]
		const newDiaryList = countArr.filter(countDiv => countDiv !== targetId.i);
        
		setCountDiv(newDiaryList);
	};

    // const SelectArray = []
    // const rearray = []
    
    const deleteAll = ({i}) => {
        // 배열 초기화 자리
        

        console.log(i)

        if(i === 0){
            setSelect_1(null);
            setSelect_Image_1(null);
            setfreeImage1("");
        } else if(i === 1){
            setSelect_2(null);
            setSelect_Image_2(null);
            setfreeImage2("");
        } else if(i === 2){
            setSelect_3(null);
            setSelect_Image_3(null);
            setfreeImage3("");
        } else if(i === 3){
            setSelect_4(null);
            setSelect_Image_4(null);
            setfreeImage4("");
        } else if(i === 4){
            setSelect_5(null);
            setSelect_Image_5(null);
            setfreeImage5("");
        } else if(i === 5){
            setSelect_6(null);
            setSelect_Image_6(null);
            setfreeImage6("");
        } else if(i === 6){
            setSelect_7(null);
            setSelect_Image_7(null);
            setfreeImage7("");
        } else if(i === 7){
            setSelect_8(null);
            setSelect_Image_8(null);
            setfreeImage8("");
        }

        console.log("-----------------------------------")
        console.log(Select_1)
        console.log(Select_Image_1)
        console.log(Select_2)
        console.log(Select_Image_2)
        console.log(Select_3)
        console.log(Select_Image_3)
        console.log(Select_4)
        console.log(Select_Image_4)
        console.log(Select_5)
        console.log(Select_Image_5)
        console.log(Select_6)
        console.log(Select_Image_6)
        console.log(Select_7)
        console.log(Select_Image_7)
        console.log(Select_8)
        console.log(Select_Image_8)
        console.log("-----------------------------------")

        // console.log("------SWITCH END------");

        // console.log("SELECT-ARRAY PUSH START");
        // SelectArray.push(Select_1);
        // SelectArray.push(Select_2);
        // SelectArray.push(Select_3);
        // SelectArray.push(Select_4);
        // SelectArray.push(Select_5);
        // SelectArray.push(Select_6);
        // SelectArray.push(Select_7);
        // SelectArray.push(Select_8);

        // for(let j=0; j<8; j++){
        //     if(SelectArray[j]){
        //         console.log("asdasdasdasdasdasdasd",SelectArray);

        //         rearray.push(SelectArray[j]);
        //     }
        // }

        // for(let a=0; a<rearray.length; a++){
        //     console.log("wwwwwwwwwwwwwwwwwwwwww", rearray)
        //     switch(a){
        //         case 0:
        //             setSelect_1(rearray[a]);
        //             break;
        //         case 1:
        //             setSelect_2(rearray[a]);
        //             break;
        //         case 2:
        //             setSelect_3(rearray[a]);
        //             break;
        //         case 3:
        //             setSelect_4(rearray[a]);
        //             break;
        //         case 4:
        //             setSelect_5(rearray[a]);
        //             break;
        //         case 5:
        //             setSelect_6(rearray[a]);
        //             break;
        //         case 6:
        //             setSelect_7(rearray[a]);
        //             break;
        //         case 7:
        //             setSelect_8(rearray[a]);
        //             break;
        //     }
        // }

        // console.log(Select_1)
    }

    const ondelete = ({i}) => {
        switch(i){
            case 0 :
                setSelect_Image_1(null);
                setfreeImage1("");
                break;
            case 1:
                setSelect_Image_2(null);
                setfreeImage2("");
                break;
            case 2:
                setSelect_Image_3(null);
                setfreeImage3("");
                break;
            case 3 :
                setSelect_Image_4(null);
                setfreeImage4("");
                break;
            case 4:
                setSelect_Image_5(null);
                setfreeImage5("");
                break;
            case 5:
                setSelect_Image_6(null);
                setfreeImage6("");
                break;
            case 0 :
                setSelect_Image_7(null);
                setfreeImage7("");
                break;
            case 1:
                setSelect_Image_8(null);
                setfreeImage8("");
                break;
        }
    }

    const location = useLocation();
    const listnum = location.state.data;
    const [polldata, setPolldata] = useState([]);
	useEffect(() => {
		client.get(`primary-poll/list/${listnum}`)
		.then(({data}) => {setPolldata(data);
            setQ_Idx(data[0].Q_Idx);
            setStart_Date(moment(data[0].Start_Date).format('YYYY-MM-DD'));
            setEnd_Date(moment(data[0].End_Date).format('YYYY-MM-DD'));
            setTitle(data[0].Title); setImage(data[0].Image);
            setRewards(data[0].Rewards); setMax_Choice(data[0].Max_Choice); setMax_Personnel(data[0].Max_Personnel);
            setScale_Start(data[0].Scale_Start); setScale_Start_Text(data[0].Scale_Start_Text);
            setScale_Mid_Text(data[0].Scale_Mid_Text);
            setScale_End(data[0].Scale_End); setScale_End_Text(data[0].Scale_End_Text);
            setScale_Unit(data[0].Scale_Unit);
            setRegist_M_Idx(data[0].Regist_M_Idx);
            setType(data[0].Type); setState(data[0].State);
            setSelect_1(data[0].Select_1); setSelect_5(data[0].Select_5);
            setSelect_2(data[0].Select_2); setSelect_6(data[0].Select_6);
            setSelect_3(data[0].Select_3); setSelect_7(data[0].Select_7);
            setSelect_4(data[0].Select_4); setSelect_8(data[0].Select_8);
            setSelect_Image_1(data[0].Select_Image_1); setSelect_Image_5(data[0].Select_Image_5);
            setSelect_Image_2(data[0].Select_Image_2); setSelect_Image_6(data[0].Select_Image_6);
            setSelect_Image_3(data[0].Select_Image_3); setSelect_Image_7(data[0].Select_Image_7);
            setSelect_Image_4(data[0].Select_Image_4); setSelect_Image_8(data[0].Select_Image_8);
            setfreeImage(data[0].Image);
            setfreeImage1(data[0].Select_Image_1); setfreeImage5(data[0].Select_Image_5);
            setfreeImage2(data[0].Select_Image_2); setfreeImage6(data[0].Select_Image_6);
            setfreeImage3(data[0].Select_Image_3); setfreeImage7(data[0].Select_Image_7);
            setfreeImage4(data[0].Select_Image_4); setfreeImage8(data[0].Select_Image_8);

            const divarray=[
                data[0].Select_1, data[0].Select_2, data[0].Select_3, data[0].Select_4,
                data[0].Select_5, data[0].Select_6, data[0].Select_7, data[0].Select_8
            ]
            const divImgarray=[
                data[0].Select_Image_1, data[0].Select_Image_2, data[0].Select_Image_3, data[0].Select_Image_4,
                data[0].Select_Image_5, data[0].Select_Image_6, data[0].Select_Image_7, data[0].Select_Image_8
            ]
            
            
            for(let i=0; i<=8; i++){
                if(divarray[i] || divImgarray[i]){
                    countDiv.push(i)
                }
            }
            
        })
	}, [])

    const [Q_Idx, setQ_Idx] = useState(0);
    const [Random, setRandom] = useState(0);
    const [Is_Using_Others, setIs_Using_Others] = useState(0);
    const [Regist_M_Idx, setRegist_M_Idx] = useState(0);

    const modifyHandle = (e)=>{

        // /update/:id patch

        console.log("POLL 1",
            Title,Image,
            State,Type,
            Rewards,Max_Personnel,
            Max_Choice, Random,
            Start_Date, End_Date,
            Is_Using_Others,Regist_M_Idx
        )
    
        console.log(
            "POLL2::" ,
            Select_Image_1,
            Select_1,Select_Image_2, Select_2,
            Select_Image_3, Select_3,
            Select_Image_4, Select_4,
            Select_Image_5, Select_5,
            Select_Image_6, Select_6,
            Select_Image_7, Select_7,
            Select_Image_8, Select_8,
            Scale_Start, Scale_End,
            Scale_Unit, Scale_Start_Text,
            Scale_Mid_Text,    Scale_End_Text
        )
    
        client.patch(`/primary-poll/update/${Q_Idx}`, {
            Title,Image,
            State,Type,
            Rewards,Max_Personnel,
            Max_Choice, Random,
            Start_Date, End_Date,
            Is_Using_Others,Regist_M_Idx
    
        }).then(({data}) => {

            const primaryPoll = data.Q_Idx;
    
            client.patch(`/primary-poll-item/update/${primaryPoll}`, {
                Select_Image_1, Select_1,
                Select_Image_2, Select_2,
                Select_Image_3, Select_3,
                Select_Image_4, Select_4,
                Select_Image_5, Select_5,
                Select_Image_6, Select_6,
                Select_Image_7, Select_7,
                Select_Image_8, Select_8,
                Scale_Start,    Scale_End,
                Scale_Unit, Scale_Start_Text,
                Scale_Mid_Text, Scale_End_Text
            })
        });
    }

    return (
        <>
            <div id="nav">
                <h1 className="logo"><Link to="/dashboard">위시폴</Link></h1>
                <Sidebar/>
            </div>
            <div id="container2">
                <Dateprofile />

                {polldata.map((qdata, Q_Idx) => (
                    <div className="contents" key={Q_Idx}>
                        <section id="correct_write">
                            <div className="correct_left">
                                <div className="item">
                                    <p className="title">질문을 입력해주세요.</p>
                                    <div className="desc">
                                        <div><input type="text" id="" name="" placeholder="" onChange={e => setTitle(e.target.value)} value={Title}/></div>
                                        <p className="comment">30자 이내로 적어주세요.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <p className="title">질문 이미지를 추가해주세요.</p>
                                    <div className="desc">
                                        <div className="img-photo">
                                            {/* <label id='btnAtt'><input type='file' multiple={true} onChange={(e) => {handlefreeImage(e.target.files[0])}}/></label>
                                            <div id="photo-view">{qdata.Image}</div> */}

                                            <Dropzone onDrop={acceptedFiles => {
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
                               
                               {/* 밸런스 */}
                                {Type === 0 ? 
                                <div className="item">
                                    <p className="title">보기를 입력해주세요.</p>
                                    <div className="desc">
                                        <div className="boxs boxsone">
                                            <input className="ex-box" type="text" onChange={handleSelect_Text_1} placeholder="보기를 입력해주세요."  value={Select_1} />
                                            {/* <div id="photo">{qdata.Select_Image_1}</div>
                                            <label id="btnAtt2"><input type="file" onChange={(e) => {handlefreeImage1(e.target.files[0])}}/>이미지 추가</label> */}

                                            <Dropzone onDrop={acceptedFiles => {
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
                                            <p className="comment one">권장 크기: 1,000 x 1,000</p>
                                        </div>

                                        <div className="boxs">
                                            <input className="ex-box" type="text" onChange={handleSelect_Text_2} placeholder="보기를 입력해주세요." value={Select_2} />
                                            {/* <div id="photo">{qdata.Select_Image_2}</div>
                                            <label id="btnAtt2"><input type="file" onChange={(e) => {handlefreeImage2(e.target.files[0])}}/>이미지 추가</label> */}

                                                <Dropzone onDrop={acceptedFiles => {
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
                                </div> : null}

                                {/* 업다운 */}
                                {Type === 1 ? 
                                <div className="item">
                                    <p className="title">응답옵션을 선택해주세요.</p>
                                    <div className="desc">
                                        <input type="text" className="w180" onChange={handleScale_Start_Text} placeholder="좋아요 (기본값)" value={Scale_Start_Text}/>
                                        <input type="text" className="w180" onChange={handleScale_End_Text} placeholder="싫어요 (기본값)" value={Scale_End_Text}/>
                                    </div>
                                </div> : null}

                                {/* 척도 */}
                                {Type === 2 ?
                                <div className="item">
                                    <p className="title">척도 단계</p>
                                    <div className="desc">
                                        <select onChange={(e) => setScale_Unit(parseInt(e.target.value))} value={Scale_Unit}>
                                            <option value="선택">선택</option>
                                            <option value="3">3점</option>
                                            <option value="4">4점</option>
                                            <option value="5">5점</option>
                                            <option value="6">6점</option>
                                            <option value="7">7점</option>
                                            <option value="8">8점</option>
                                            <option value="9">9점</option>
                                            <option value="10">10점</option>
                                            <option value="11">11점</option>
                                        </select>
                                    </div>
                                </div> : null}
                                {Type === 2 ?
                                <div className="item">
                                    <p className="title">점수를 적어주세요.</p>
                                    <div className="desc">
                                        <ol className="progress-bar">
                                            <li>
                                                <div className="top"><input type="text" id="" name="" placeholder="숫자 입력" onChange={handleScale_Start} value={Scale_Start}/></div>
                                                <div className="bottom"><input type="text" id="" name="" placeholder="왼쪽 입력" onChange={handleScale_Start_Text} value={Scale_Start_Text}/></div>
                                            </li>
                                            <li></li>
                                            <li></li>
                                            <li>
                                                {/* {Scale_Unit || qdata.Scale_Unit % 2 === 1 ? <div className="top">{Math.floor(Scale_Unit || qdata.Scale_Unit / 2 + 1)}</div> : false} */}
                                                <div className="bottom"><input type="text" placeholder="가운데 입력" onChange={handleScale_Mid_Text} value={Scale_Mid_Text}/></div>
                                            </li>
                                            <li></li>
                                            <li></li>
                                            <li>
                                                <div className="top"><input type="text" id="" name="" placeholder="숫자 입력" onChange={handleScale_End} value={Scale_End}/></div>
                                                <div className="bottom"><input type="text" id="" name="" placeholder="오른쪽 입력" onChange={handleScale_End_Text} value={Scale_End_Text}/></div>
                                            </li>
                                        </ol>
                                    </div>
                                </div> : null}

                                {/* 객관식 */}
                                {Type === 3 || Type === 4 || Type === 5 ?
                                <div className="item">
                                    <p className="title">응답옵션을 선택해주세요.</p>
                                    <div className="desc">                       {/* defaultChecked 문제 (`value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.)*/}
                                        <span><input type="radio" id="answer-1" name="answer" defaultChecked={qdata.Type === 4 && true} readOnly/><label htmlFor="answer-1" onClick={() => {setType(parseInt(4)); setMax_Choice(parseInt(1));}}>단일 선택</label></span>
                                        <span><input type="radio" id="answer-2" name="answer" defaultChecked={qdata.Type === 3 && true} readOnly/><label htmlFor="answer-2" onClick={() => setType(parseInt(3))}>다중 선택</label></span>
                                        <span><input type="radio" id="answer-3" name="answer" defaultChecked={qdata.Type === 5 && true} readOnly/><label htmlFor="answer-3" onClick={() => setType(parseInt(5))}>순위 선택</label></span>
                                    </div>
                                </div> : null}
                                {Type === 3 || Type === 4 || Type === 5 ?
                                <div className="item">
                                    <p className="title">선택 개수를 입력해주세요.</p>
                                    <div className="desc">
                                        <div><span className="txt">최대</span><input type="text" className="w100" value={Max_Choice || ""} onChange={handleMax_Choice}/><span className="txt">개</span></div>
                                    </div>
                                </div> : null}
                                
                                {/* 객관식 보기추가 */}
                                {Type === 3 || Type === 4 || Type === 5 ?
                                <div className="m-item" id="test">
                                    <p className="title">보기를 입력해주세요.</p>
                                    <div className="desc">
                                        <MultiCorrect
                                            countDiv={countDiv}
                                            onRemove={onRemove}
                                            ondelete={ondelete}
                                            deleteAll={deleteAll}
                                            Select_1={Select_1} setSelect_1={setSelect_1}
                                            Select_2={Select_2} setSelect_2={setSelect_2}
                                            Select_3={Select_3} setSelect_3={setSelect_3}
                                            Select_4={Select_4} setSelect_4={setSelect_4}
                                            Select_5={Select_5} setSelect_5={setSelect_5}
                                            Select_6={Select_6} setSelect_6={setSelect_6}
                                            Select_7={Select_7} setSelect_7={setSelect_7}
                                            Select_8={Select_8} setSelect_8={setSelect_8}
                                            Select_Image_1={Select_Image_1} setSelect_Image_1={setSelect_Image_1}
                                            Select_Image_2={Select_Image_2} setSelect_Image_2={setSelect_Image_2}
                                            Select_Image_3={Select_Image_3} setSelect_Image_3={setSelect_Image_3}
                                            Select_Image_4={Select_Image_4} setSelect_Image_4={setSelect_Image_4}
                                            Select_Image_5={Select_Image_5} setSelect_Image_5={setSelect_Image_5}
                                            Select_Image_6={Select_Image_6} setSelect_Image_6={setSelect_Image_6}
                                            Select_Image_7={Select_Image_7} setSelect_Image_7={setSelect_Image_7}
                                            Select_Image_8={Select_Image_8} setSelect_Image_8={setSelect_Image_8}
                                            freeImage1={freeImage1} setfreeImage1={setfreeImage1}
                                            freeImage2={freeImage2} setfreeImage2={setfreeImage2}
                                            freeImage3={freeImage3} setfreeImage3={setfreeImage3}
                                            freeImage4={freeImage4} setfreeImage4={setfreeImage4}
                                            freeImage5={freeImage5} setfreeImage5={setfreeImage5}
                                            freeImage6={freeImage6} setfreeImage6={setfreeImage6}
                                            freeImage7={freeImage7} setfreeImage7={setfreeImage7}
                                            freeImage8={freeImage8} setfreeImage8={setfreeImage8}
                                        />
                                        {Select_1}
                                        {Select_2}
                                        {Select_3}
                                        {Select_4}
                                        {Select_5}
                                        {Select_6}
                                        {Select_7}
                                        {Select_8}
                                        {countDiv.length - 1 < 7 ? <button className="btn-add" onClick={onAddDetailDiv}>보기 추가하기</button> : false}
                                    </div>
                                </div> : null}

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
                                                value={Start_Date}
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
                                                value={Start_Date || moment(qdata.Start_Date).format("YYYY년 MM월 DD일 (ddd)")}
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
                                                value={End_Date}
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
                                                value={End_Date || moment(qdata.End_Date).format("YYYY년 MM월 DD일 (ddd)")}
                                            /> */}
                                            <input type="text" className="timepicker clock" name="timepicker" placeholder="시간"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <p className="title">지급 포인트</p>
                                    <div className="desc">
                                        <div><input type="text" className="txtR" onChange={handleRewards} value={Rewards}/><span className="txt">P</span></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <p className="title">참여 인원수</p>
                                    <div className="desc">
                                        <div><input type="text" className={!check ? "txtR" : "txtR no"} value={Max_Personnel} onChange={handleMax_Personnel} readOnly={!check ? false : true}/><span className="txt">명</span></div>
                                        <p className="chkBox"><input type="checkbox" id="agr-chk" name="" onClick={handlecheck} defaultChecked={qdata.Max_Personnel === 999999 && true} readOnly/><label htmlFor="agr-chk">참여 인원수 제한 없음</label></p>
                                    </div>
                                </div>
                                <div className="item">
                                    <p className="title">승인</p>
                                    <div className="desc">
                                        <p className="chkBox2"><input type="checkbox" id="agr-chk2" name="" onClick={Checkhandler} defaultChecked={qdata.State === 1 && true} readOnly/><label htmlFor="agr-chk2"></label></p>
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
                                                <li>{Type === 0 ? "밸런스 게임" : Type === 1 ? "Up&Down" : Type === 2 ? "척도 선택" :
                                                    Type === 3 ? "객관식 복수" : Type === 4 ? "객관식 단일" : Type === 5 ? "객관식 순위" :
                                                    Type === 6 && "별점 선택"}</li>
                                            </ul>
                                            
                                            {Type !== 3 && Type !== 4 && Type !== 5 ? <p className="title">{Title}</p> : null}
                                            
                                            <p className="date">날짜</p>

                                            {Image === "" ? null : 
                                                <div className={Type === 0 ? "b-titleImg" : Type === 1 ? "u-titleImg" : Type === 2 ? "c-titleImg" :
                                                    Type === 3 || Type === 4 || Type === 5 ? "m-titleImg" : Type === 6 && "s-titleImg"}
                                                >
                                                    {freeImage && <img className="preview-img" src={freeImage} alt="preview-img"/>}
                                                </div>}

                                            {Type === 3 || Type === 4 || Type === 5 ? <p className="title">{Title}</p> : null}

                                            {Type === 0 ? (
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
                                            ) : Type === 1 ? (
                                                <div className="updowns">
                                                    <ul className="updown">
                                                        <li>{Scale_Start_Text}</li>
                                                        <li>{Scale_End_Text}</li>
                                                    </ul>
                                                </div>
                                            ) : Type === 2 ? (
                                                <div className="choose">
                                                    <section className="top">
                                                        <div className="starttop">{Scale_Start}</div>
                                                        <div className="endtop">{Scale_End}</div>
                                                    </section>
                                                    <section className="progress-bar"></section>
                                                    <section className="bottom">
                                                        <div className="startbottom">{Scale_Start_Text}</div>
                                                        <div className="endbottom">{Scale_End_Text}</div>
                                                    </section>
                                                </div>
                                            ) : (Type === 3 || Type === 4 || Type === 5) && 
                                                (Select_Image_1 || Select_Image_2 || Select_Image_3 || Select_Image_4 ||
                                                Select_Image_5 || Select_Image_6 || Select_Image_7 || Select_Image_8) ? (
                                                <ul className="multipleImg">
                                                    <li>{freeImage1 && <img className="preview-img1" src={freeImage1} alt="preview-img"/>}{Select_1 ? <p>{Select_1}</p> : null}</li>
                                                    <li>{freeImage2 && <img className="preview-img1" src={freeImage2} alt="preview-img"/>}{Select_2 ? <p>{Select_2}</p> : null}</li>
                                                    <li>{freeImage3 && <img className="preview-img1" src={freeImage3} alt="preview-img"/>}{Select_3 ? <p>{Select_3}</p> : null}</li>
                                                    <li>{freeImage4 && <img className="preview-img1" src={freeImage4} alt="preview-img"/>}{Select_4 ? <p>{Select_4}</p> : null}</li>
                                                    <li>{freeImage5 && <img className="preview-img1" src={freeImage5} alt="preview-img"/>}{Select_5 ? <p>{Select_5}</p> : null}</li>
                                                    <li>{freeImage6 && <img className="preview-img1" src={freeImage6} alt="preview-img"/>}{Select_6 ? <p>{Select_6}</p> : null}</li>
                                                    <li>{freeImage7 && <img className="preview-img1" src={freeImage7} alt="preview-img"/>}{Select_7 ? <p>{Select_7}</p> : null}</li>
                                                    <li>{freeImage8 && <img className="preview-img1" src={freeImage8} alt="preview-img"/>}{Select_8 ? <p>{Select_8}</p> : null}</li>
                                                </ul>
                                            ) : (Type === 3 || Type === 4 || Type === 5) &&
                                                (Select_1 || Select_2 || Select_3 || Select_4 ||
                                                Select_5 || Select_6 || Select_7 || Select_8) ? (
                                                <ul className="multipleTxt">
                                                    {Select_1 ? <li><label>1</label>{Select_1}</li> : null}
                                                    {Select_2 ? <li><label>2</label>{Select_2}</li> : null}
                                                    {Select_3 ? <li><label>3</label>{Select_3}</li> : null}
                                                    {Select_4 ? <li><label>4</label>{Select_4}</li> : null}
                                                    {Select_5 ? <li><label>5</label>{Select_5}</li> : null}
                                                    {Select_6 ? <li><label>6</label>{Select_6}</li> : null}
                                                    {Select_7 ? <li><label>7</label>{Select_7}</li> : null}
                                                    {Select_8 ? <li><label>8</label>{Select_8}</li> : null}
                                                </ul>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="correct_btn-wrap">
                            <form className="correct_registration-btn" onClick={modifyHandle}><a>수정</a></form>
                        </section>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Correct;