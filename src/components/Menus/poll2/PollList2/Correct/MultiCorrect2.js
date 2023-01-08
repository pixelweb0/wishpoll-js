import React, { useState } from "react";
import Dropzone from 'react-dropzone';
import "./Correct.css";

function MultiCorrect(props){
    const [imgArray, setImgArray] = useState([])
    imgArray[0]=props.freeImage1;
    imgArray[1]=props.freeImage2;
    imgArray[2]=props.freeImage3;
    imgArray[3]=props.freeImage4;
    imgArray[4]=props.freeImage5;
    imgArray[5]=props.freeImage6;
    imgArray[6]=props.freeImage7;
    imgArray[7]=props.freeImage8;

    const [delSelArray, setDelSelArray] = useState([])
    delSelArray[0]=props.setSelect_Image_1;
    delSelArray[1]=props.setSelect_Image_2;
    delSelArray[2]=props.setSelect_Image_3;
    delSelArray[3]=props.setSelect_Image_4;
    delSelArray[4]=props.setSelect_Image_5;
    delSelArray[5]=props.setSelect_Image_6;
    delSelArray[6]=props.setSelect_Image_7;
    delSelArray[7]=props.setSelect_Image_8;

    const [delfreArray, setDelfreArray] = useState([])
    delfreArray[0]=props.setfreeImage1;
    delfreArray[1]=props.setfreeImage2;
    delfreArray[2]=props.setfreeImage3;
    delfreArray[3]=props.setfreeImage4;
    delfreArray[4]=props.setfreeImage5;
    delfreArray[5]=props.setfreeImage6;
    delfreArray[6]=props.setfreeImage7;
    delfreArray[7]=props.setfreeImage8;
    
    const [text, setText] = useState([])
    text[0]=props.Select_1
    text[1]=props.Select_2
    text[2]=props.Select_3
    text[3]=props.Select_4
    text[4]=props.Select_5
    text[5]=props.Select_6
    text[6]=props.Select_7
    text[7]=props.Select_8
    
    return (
        <>
            {props.countDiv.map((i) => (
                <div className="box-wrap" key={i}>
                    <div className="box draggable"
                        draggable
                        onDragEnd={() => console.log('드래그 놓았다')}
                        >
                        <div className="tit">
                            <input className="ex-box" type="text" name={i}
                            value={text[i] || ""}
                            onChange={(e) => {
                                    switch( i ){
                                        case 0 :
                                            props.setSelect_1(e.target.value);
                                            e.target.value="";
                                            break;
                                        case 1 :
                                            props.setSelect_2(e.target.value);
                                            break;
                                        case 2 :
                                            props.setSelect_3(e.target.value);
                                            break;
                                        case 3 :
                                            props.setSelect_4(e.target.value);
                                            break;
                                        case 4 :
                                            props.setSelect_5(e.target.value);
                                            break;
                                        case 5 :
                                            props.setSelect_6(e.target.value);
                                            break;
                                        case 6 :
                                            props.setSelect_7(e.target.value);
                                            break;
                                        case 7 :
                                            props.setSelect_8(e.target.value);
                                            break;
                                    }
                                }} placeholder="보기를 입력해주세요." maxLength="25"/>
                                <Dropzone onDrop={acceptedFiles => {

                                    const reader = new FileReader();

                                    switch(i){
                                        case 0: props.setSelect_Image_1(acceptedFiles[0]);
                                        props.setfreeImage1(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {
                                                props.setfreeImage1(reader.result);
                                                resolve();
                                            };
                                        }); break;

                                        case 1: props.setSelect_Image_2(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {
                                                props.setfreeImage2(reader.result);
                                                resolve();
                                            };
                                        }); break;

                                        case 2: props.setSelect_Image_3(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {
                                                props.setfreeImage3(reader.result);
                                                resolve();
                                            };
                                        }); break;

                                        case 3: props.setSelect_Image_4(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {
                                                props.setfreeImage4(reader.result);
                                                resolve();
                                            };
                                        }); break;

                                        case 4: props.setSelect_Image_5(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {
                                                props.setfreeImage5(reader.result);
                                            resolve();
                                            };
                                        }); break;
                                    
                                        case 5: props.setSelect_Image_6(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {
                                                props.setfreeImage6(reader.result);
                                            resolve();
                                            };
                                        }); break;

                                        case 6: props.setSelect_Image_7(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {
                                                props.setfreeImage7(reader.result);
                                            resolve();
                                            };
                                        }); break;

                                        case 7: props.setSelect_Image_8(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {   
                                                props.setfreeImage8(reader.result);
                                            resolve();
                                            };
                                        }); break;
                                    }

                                }}>
                                        
                                    {({getRootProps, getInputProps}) => (
                                        <div id="btnAtt2" {...getRootProps()}>
                                            <input {...getInputProps()}/>
                                        </div>      
                                    )}
                                </Dropzone>

                                {imgArray[i] ? <div id="photo-view">
										<img className="preview-img" src={imgArray[i]} alt="preview-img"/>
										<input type="button" value="X" className="deleteImg" onClick={() => props.ondelete({i})}/>
									</div> : null}    

                            {props.countDiv.length - 1 === 0 ? false : <button onClick={ () =>
                                {props.onRemove({i}); props.deleteAll({i});}}>삭제</button>}
                        </div>
                        <p className="comment">권장 크기: 1,000 x 1,000</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MultiCorrect;