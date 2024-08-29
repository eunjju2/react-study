import React from 'react';

const componentName = (props) => {
    const {taskName} = props;
    return (
        <div>
            {taskName}
        </div>
    );
};

export default componentName;