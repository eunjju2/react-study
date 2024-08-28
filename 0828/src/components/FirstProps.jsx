import React from 'react';

function FirstProps (props) {
    //실습18
    const {name, color} = props;
    return (
        //실습 15, 16
        //매개변수 : props
        // <div>
        //     <h1>
        //         안녕하세요. 제 이름은 {props.name}입니다.
        //         <br />
        //         제가 좋아하는 색은 {props.color}입니다.
        //     </h1>
        // </div>

        //실습 17
        //매개변수 : {name, color}
        // <div>
        // <h1>
        //     안녕하세요. 제 이름은 {name}입니다.
        //     <br />
        //     제가 좋아하는 색은 {color}입니다.
        // </h1>
        // </div>

        //실습 18
        //매개변수 : props
        <div>
        <h1>
            안녕하세요. 제 이름은 {name}입니다.
            <br />
            제가 좋아하는 색은 {color}입니다.
        </h1>
        </div>
    );
};

export default FirstProps;