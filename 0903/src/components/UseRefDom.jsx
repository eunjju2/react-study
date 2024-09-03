import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const UseRefDom = () => {

    //실습6
    // const inputRef = useRef();
    // useEffect(() => {
    //     console.log(inputRef) //현재 저장되어있는 값
    //     console.log(inputRef.current) //inputRef.current => input 태그를 가리킴
    //     inputRef.current.focus(); //input 태그에 focus 설정
    // },[]) //최초 렌더링 시 1번만 실행

    //문제2
    // const inputRef = useRef();
    // const [inputValue, setInputValue] = useState('')

    // function sendValue() {
    //     //input 태그 안의 내용 = inputRef.current.value
    //     setInputValue(inputRef.current.value) //렌더링
        
    // }

    //문제3
    const style = {
        margin : "30px"
    }

    const [name, setName] = useState('이은수');
    const [age, setAge] = useState(25);
    const nameRef = useRef();
    const ageRef = useRef();


    return (
        //실습6
        // <div>
        //     {/* Dom 객체와 ref객체의 연결고리가 생김 */}
        //     ID : <input type="text" ref={inputRef} /> 
        // </div>

        //문제2
        // <div>
        //     <input type="text" ref={inputRef}/>
        //     <button onClick={sendValue}>전송</button>
        //     <h1>전송된 단어 : {inputValue}</h1>
        // </div>

        //문제3
        <div>
            <div style={style}>
                <h1>input 태그 value 값 지정</h1>
                이름 : <input type="text" ref={nameRef} value={name} onChange={(e) => setName(nameRef.current.value)}/> 
                나이 : <input type="number" ref={ageRef} value={age} onChange={(e) => setAge(ageRef.current.value)}/>
            </div>
        </div>
    );
};

export default UseRefDom;


