import React, { useEffect, useState } from 'react';

const EffectPrac = () => {

    //실습1
    // const [value, setValue] = useState(0)
    // const [textValue, setTextValue] = useState('')

    // function updateValue() {
    //     setValue((prev) => prev + 1)
    // }

    // function updateTextValue(e) {
    //     setTextValue(e.target.value)
    // }


    // useEffect(() => {
    //     console.log('렌더링이 되었습니다')
    // }, [])

    // useEffect(() => {
    //     console.log('count 값이 변경되었습니다');
    // }, [value])

    // useEffect(() => {
    //     console.log('text 값이 변경되었습니다')
    // }, [textValue])


    const [count, setCount] = useState(0)

    const increment = () => {
        console.log('Before updating : ' ,count);
        setCount(count + 1);
        console.log('After updating : ' ,count);
    }

    useEffect(() => {
        console.log('count 값이 변경되었습니다 : ', count);
    }, [count])

    return (
        //실습1
        // <div>
        //     <h1>{value}</h1>
        //     <button onClick={updateValue}>+1</button>
        //     <hr />
        //     <input type="text" onChange={updateTextValue}/>
        //     <h1>{textValue}</h1>
        // </div>

        //실습2
        <div>
            <p>count : {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default EffectPrac;

