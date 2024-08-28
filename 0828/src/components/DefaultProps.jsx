import React from 'react';

//방법2
//파라미터에 지정
const DefaultProps = ({name = "이은수"}) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name}입니다.
        </div>
    );
};

//방법1
// DefaultProps.defaultProps = {
//     name : '이은수'
// }
export default DefaultProps;