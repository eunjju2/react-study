import React from 'react';

const UserID = (props) => {
    function updateValue(e) {
        props.idData(e.target.value);
    }
    return (
        <div>
            <h1>
                ID : <input type="text" onChange={updateValue}></input>
            </h1>
        </div>
    );
};

export default UserID;