import React, { useState } from "react";
import Dropzone from 'react-dropzone';

function AddDivGuide(props){
    const [array, setArray] = useState([])

    return (
        <>
            {props.countDiv2.map((i) => (
                    <li key={i}>
                        <span><input type="checkbox" id="normal-1" name="" /><label for="normal-1"></label></span>
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
                            }} placeholder="가이드라인 추가" />
                    </li>
            ))}
        </>
    )
}

export default AddDivGuide;