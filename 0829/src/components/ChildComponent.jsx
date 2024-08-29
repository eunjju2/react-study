import React from 'react';

const ChildComponent = (props) => {
    function updateValue(e) {
        console.log(e.target.value)
        props.onAddData(e.target.value);
    }
    return (
        <div>
            <h1>
                입력 : <input type="text" onChange={updateValue}></input>
            </h1>
        </div>
    );
};

export default ChildComponent;