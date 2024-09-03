import React from 'react';

const Button = (props) => {
    const {number, changeValue} = props 

    function sendValue() {
        changeValue(number)
    }
    return (
        <div>
            <button onClick={sendValue}>{number}</button>
        </div>
    );
};

export default Button;