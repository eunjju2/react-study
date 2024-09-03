import React, { useMemo, useState } from 'react';

const UseMemoPrac = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);


    // const hardSum = hardCalculator(hardNumber) //easyCalculator가 작동할 때도 실행되는 문제 발생
    const hardSum = useMemo(() => hardCalculator(hardNumber), [hardNumber]) //hardNumber가 바뀔 때만 실행되고, 그 외에는 안되도록 설정 
    const easySum = easyCalculator(easyNumber)

    function hardCalculator(num) {
        for(let i=0; i< 10; i++) {
            console.log(i)
        }
        return num + 10000;
    }

    function easyCalculator(num) {
        return num + 1;
    }



    return (
        <div>
            <h3>어려운 계산기</h3>
            <input 
                type="number"
                value={hardNumber}
                onChange={(e) => setHardNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {hardSum} </span>
            <h3>쉬운 계산기</h3>
            <input 
                type="number"
                value={easyNumber}
                onChange={(e) => setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1 = {easySum} </span>
        </div>
    );
};

export default UseMemoPrac;