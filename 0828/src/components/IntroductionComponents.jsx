import React from 'react';

const IntroductionComponents = (props) => {
    const {name, age, address, nameColor, ageColor, addrColor} = props;
    return (
        <div>
            <h1>
            안녕하세요. 제 이름은 <span style={{ color : nameColor }}>{name}</span>입니다. <br />
            저는 <span style={{ color : ageColor }}>{age}</span>살이고, <span style={{ color : addrColor }}>{address}</span>에 살고 있습니다.
            </h1>
        </div>
    );
};

IntroductionComponents.defaultProps = {
    name : "이은수"
}

export default IntroductionComponents;