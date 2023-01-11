import React, { useState } from "react";
import Dropzone from 'react-dropzone';

function AddDiv(props){
    const [array, setArray] = useState([])

    return (
        <>
            {props.countDiv.map((i) => (
                <div className="box-wrap" key={i}>
                    <div className="box draggable"
                        draggable
                        onDragEnd={() => console.log('드래그 놓았다')}
                        >
                        <div className="tit">
                            <input className="ex-box" type="text" name={i} onChange={(e) => 
                                {
                                    switch( i ){
                                        case 0 :
                                            props.setSelect_1(e.target.value);
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
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {         
                                                props.setfreeImage1(reader.result);   
                                                array[0]=(reader.result)    
                                                resolve();
                                            };
                                        }); break;

                                        case 1: props.setSelect_Image_2(acceptedFiles[0]); 
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {         
                                                props.setfreeImage2(reader.result);
                                                array[1]=(reader.result)          
                                                resolve();
                                            };
                                        }); break;

                                        case 2: props.setSelect_Image_3(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {   
                                                props.setfreeImage3(reader.result);          
                                                array[2]=(reader.result)
                                                resolve();
                                            };
                                        }); break;

                                        case 3: props.setSelect_Image_4(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {   
                                                props.setfreeImage4(reader.result);
                                                array[3]=(reader.result)        
                                                resolve();
                                            };
                                        }); break;

                                        case 4: props.setSelect_Image_5(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {   
                                                props.setfreeImage5(reader.result);
                                                array[4]=(reader.result) 
                                            resolve();
                                            };
                                        }); break;
                                    
                                        case 5: props.setSelect_Image_6(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {   
                                                props.setfreeImage6(reader.result);         
                                                array[5]=(reader.result) 
                                            resolve();
                                            };
                                        }); break;

                                        case 6: props.setSelect_Image_7(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {   
                                                props.setfreeImage7(reader.result);         
                                                array[6]=(reader.result) 
                                            resolve();
                                            };
                                        }); break;

                                        case 7: props.setSelect_Image_8(acceptedFiles[0]);
                                        reader.readAsDataURL(acceptedFiles[0]);
                                        new Promise((resolve) => {reader.onload = () => {   
                                                props.setfreeImage8(reader.result);  
                                                array[7]=(reader.result)        
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

                                {array[i] ? <div id="photo-view">
										<img className="preview-img" src={array[i]} alt="preview-img"/>
										<input type="button" value="X" className="deleteImg" onClick={() => {array[i]=""; console.log(array); console.log(props.setSelect_Image_1)}}/>
									</div> : null}    

                            {props.countDiv.length - 1 === 0 ? false : <button onClick={ () =>
                                {props.onRemove({i})}}>삭제</button>}
                        </div>
                        <p className="comment">권장 크기: 1,000 x 1,000</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AddDiv;