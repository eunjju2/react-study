/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";

const UseRefComponent = () => {

    //실습1
    // const ref = useRef("안녕하세요");
    // console.log("변경 전 ref 값 : ", ref.current);

    // ref.current = "Hello";
    // console.log("변경 후 ref 값 : ", ref.current);

    //실습2
    // const [stateValue, setStateValue] = useState(0)
    // const refValue = useRef(0)

    // function updateState() {
    //     console.log('state 변경')
    //     setStateValue(stateValue + 1)
    // }

    // function updateRef() {
    //     refValue.current += 1 //화면에서는 안바뀜. 렌더링이 되어야 보임
    //     console.log(refValue.current) 
    // }


    //실습3
    const [stateValue, setStateValue] = useState(0)
    const refValue = useRef(0)

    var value = 0


    function updateRef() {
        refValue.current += 1 
        console.log(refValue.current) 
    }

    function updateVar() {
        value += 1
        console.log(value)
    }

    function renderFunc() {
        setStateValue(stateValue + 1) //실제 사용할 값X, 오로지 화면을 새로고침하기 위한 함수
    }

return (
    //실습2
    // <div>
    //     <h1>State 값 : {stateValue}</h1>
    //     <h1>Ref 값 : {refValue.current}</h1>
    //     <button onClick={updateState}>State</button>
    //     <button onClick={updateRef}>Ref</button>
    // </div>
    
    //실습3
    <div>
        
        <h1>Ref 값 : {refValue.current}</h1>
        <h1>변수 값 : {value}</h1>
        <button onClick={updateRef}>Ref</button>
        <button onClick={updateVar}>Var</button>
        <button onClick={renderFunc}>Rendering</button>
    </div>
)
};

export default UseRefComponent;