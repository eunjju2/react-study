import React from 'react';

const NameList = (props) => {
    const {name} = props;
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default NameList;