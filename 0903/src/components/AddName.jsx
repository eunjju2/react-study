import React, { useEffect, useState } from 'react';

const AddName = () => {
    const [names, setNames] = useState(() => heavyWork())
    const [input, setInput] = useState('')


    //useEffect추가
    //방법1. 콜백함수만 작성 => 렌더링 발생 시마다 실행
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다');
    //     console.log({names});
    // })

    //방법2. 최초에 한번만 실행되도록
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다');
    //     console.log({names});
    // },[])

    //방법3. 특정 값이 update될 때만 실행
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다');
    //     console.log({names});
    // },[names])


    function heavyWork() {
        // for(let i = 0; i < 1000; i++) {
        //     console.log('복잡한 계산 중 ..');
        // }

        return ['자바스크립트', '리액트'];
        
    }

    function inputChange(e) {
        setInput(e.target.value)
    }

    function udloadInput() {
        // setNames([...names, input])
        // setNames((prevState) => [input, ...prevState])
        setNames((prevState) => [...prevState, input])
    }
    return (
        <div>
            <input type="text" onChange={inputChange}/>
            <button onClick={udloadInput}>추가</button>
            <div>
                {names.map((name, idx) => (<p key={idx}>{name}</p>))}
            </div>
        </div>
    );
};

export default AddName;