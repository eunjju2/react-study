import React, { useEffect, useState, useRef } from 'react';

const RefPrac = () => {
    
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);


    useEffect(()=>{
        // setRenderCount(renderCount + 1) //랜더링 발생시키는 함수 => 무한로딩 발생
        renderCount.current = renderCount.current + 1 //useRef이용
        console.log('렌더링 완료')
    }, [count]);

    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>랜더링 횟수 : {renderCount.current}</h1>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
};

export default RefPrac;