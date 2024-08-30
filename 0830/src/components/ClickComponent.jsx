import React, { useState } from 'react';
import '../App.css';

const ClickComponent = (props) => {
    // const [value, setValue] = useState(0)
    // function changeValue() {
    //     setValue(value + 1)
    //     props.onAddData(value + 1);
    // }

    //최종문제 풀이
    const [number, setNumber] = useState(0);
    function upCounter() {
        setNumber(number + 1)
        props.onCount();
    }
    return (
        //최종문제
        // <div>
        //     <div className="box">
        //         <h1>{value}</h1>
        //         <button className="btn" onClick={changeValue}>클릭</button>
        //     </div>
        // </div>

        //최종문제 풀이
        <div className='countDiv'>
            <h1>{number}</h1>
            <button className='countBtn' onClick={upCounter}>
                클릭
            </button>
        </div>
    );
};

export default ClickComponent;