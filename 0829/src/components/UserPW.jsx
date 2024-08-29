import React from 'react';

const UserPW = (props) => {
    function updateValue(e) {
        props.pwData(e.target.value);
    }
    return (
        <div>
            <h1>
                PW : <input type="password" onChange={updateValue}></input>
            </h1>
        </div>
    );
};

export default UserPW;