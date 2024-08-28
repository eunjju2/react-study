
import React from 'react';

const BooleanComponent = ({boolValue}) => {
    const message = boolValue ? "공부" : "놀기";
    return (
        <div>
            {message}
        </div>
    );
};

export default BooleanComponent;