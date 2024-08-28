import React from 'react';
import PropTypes from 'prop-types';

const ProTypesComponent = ({item, price}) => {
    return (
        <div>
            아이템 : {item}
            <br />
            가격 : {price}
        </div>
    );
};

//props에 타입 지정
//부모가 item : number 전달
//자식은 item : string 이길 바랄 때
ProTypesComponent.propTypes = {
    item : PropTypes.string,
    price : PropTypes.number.isRequired
} //개발할 때는 문제가 되지만, 출력에는 문제가 없음

export default ProTypesComponent;