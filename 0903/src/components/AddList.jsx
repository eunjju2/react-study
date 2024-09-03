import React, { useState } from 'react';

const AddList = () => {
    const [list, setList] = useState(['초콜릿', '사탕'])
    const [input, setInput] = useState('')

    function inputChange(e) {
        setInput(e.target.value)
    }

    function udloadInput() {
        setList((prevState) => [input, ...prevState])
    }
    return (
        <div>
            <input type="text" onChange={inputChange}/>
            <button onClick={udloadInput}>추가</button>
            <div>
                <ul>
                    {list.map((item, idx) => (<li key={idx}>{item}</li>))}
                </ul>
                
            </div>
        </div>
    );
};

export default AddList;