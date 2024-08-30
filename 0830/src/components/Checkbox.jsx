import React from 'react';
import { useState } from 'react';

const Checkbox = (props) => {
    //방법1
    // const {cap, shoes, bag}= props;
    // const [total, setTotal] = useState(0);

    // function changeHandler(checkbox) {
    //     //e.target.value로 하면 checkbox = value
    //     //e.target => checkbox =<input type="checkbox" value=1>

    //     //체크가 되면 checked 자동 생성
    //     if(checkbox.checked){
    //         // setTotal(total + parseInt(checkbox.value))
    //         //prevState : 바뀌기 이전의 값. 좀 더 리액트 스타일의 코드로 작성
    //         setTotal((prevState) => prevState + parseInt(checkbox.value))
    //     }else {
    //         setTotal((prevState) => prevState - parseInt(checkbox.value))
    //     }
    // }

    //방법2
    // const {pList} = props
    // const [itemPrice1, itemPrice2, itemPrice3]= pList.map(item => item.price)
    // const [item1, item2, item3] = pList.map(item => item.itemname)
    // const [total, setTotal] = useState(0);

    // function changeHandler(checkbox) {
    //     //e.target.value로 하면 checkbox = value
    //     //e.target => checkbox =<input type="checkbox" value=1>

    //     //체크가 되면 checked 자동 생성
    //     if(checkbox.checked){
    //         // setTotal(total + parseInt(checkbox.value))
    //         //prevState : 바뀌기 이전의 값. 좀 더 리액트 스타일의 코드로 작성
    //         setTotal((prevState) => prevState + parseInt(checkbox.value))
    //     }else {
    //         setTotal((prevState) => prevState - parseInt(checkbox.value))
    //     }
    // }

    //방법2 풀이
    const {list} = props
    const [total, setTotal] = useState(0);
    function changeHandler(checkbox) {
        //e.target.value로 하면 checkbox = value
        //e.target => checkbox =<input type="checkbox" value=1>

        //체크가 되면 checked 자동 생성
        if(checkbox.checked){
            // setTotal(total + parseInt(checkbox.value))
            //prevState : 바뀌기 이전의 값. 좀 더 리액트 스타일의 코드로 작성
            setTotal((prevState) => prevState + parseInt(checkbox.value))
        }else {
            setTotal((prevState) => prevState - parseInt(checkbox.value))
        }
    }
    return (
        //방법1
        // <div>
        //     <input type="checkbox" value={cap} onChange={(e) => {changeHandler(e.target)}} /> 모자 1만원 <br />
        //     <input type="checkbox" value={shoes} onChange={(e) => {changeHandler(e.target)}} /> 신발 3만원 <br />
        //     <input type="checkbox" value={bag} onChange={(e) => {changeHandler(e.target)}} /> 가방 9만원 <br />
        //     <div>합계 : {total}만원</div>
        // </div>

        //방법2
        // <div>
        //     <input type="checkbox" value={itemPrice1} onChange={(e) => {changeHandler(e.target)}} /> {item1} {itemPrice1}만원 <br />
        //     <input type="checkbox" value={itemPrice2} onChange={(e) => {changeHandler(e.target)}} /> {item2} {itemPrice2}만원 <br />
        //     <input type="checkbox" value={itemPrice3} onChange={(e) => {changeHandler(e.target)}} /> {item3} {itemPrice3}만원 <br />
        //     <div>합계 : {total}만원</div>
        // </div>

        //방법2 풀이
        <div>
            {list.map((item) => (
                <label key={item.name}>
                    <input 
                    type="checkbox"
                    value={item.price}
                    onChange={(e) => {changeHandler(e.target)}}
                    />
                    {item.name}
                    <br />
                </label>
            ))}
            <div>합계 : {total}만원</div>
        </div>
    );
};

export default Checkbox;