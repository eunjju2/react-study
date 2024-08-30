import React from 'react';
import image from '../images/logo192.png'
import { useState } from 'react';

const ImageComponent = () => {

    //실습2
    // const [src, setSrc] = useState('/images/grapefruit.png');

    // function selectHandler(e) {
    //     setSrc(e.target.value)
    // }

    // function submitHandler(e) {
    //     e.preventDefault();
    //     console.log('submit으로부터 받은 데이터 : ', src)
    // }

    //실습2 풀이
    const selectList =['grapefruit', 'mango', 'banana', 'lime']
    const [select, setSelect] = useState('')
    //select = 이미지 경로
    function updateValue(e) {
        setSelect(e.target.value) //경로
    }



    return (
        
        //실습1
        // <div>
        //     <h1>src 폴더 내부 이미지 : import를 이용</h1>
        //     <img src={image} width="150px" alt="이미지" />
        //     <hr />

        //     <h1>src 폴더 내부 이미지 : require()을 이용</h1>
        //     <img src={require('../images/logo192.png')} width="150px" alt="이미지" />
        //     <hr />

        //     <h1>public 폴더 이미지</h1>
        //     <img src="/images/logo192.png" width="150px" alt="이미지" />
        //     <hr />

        //     <h1>외부 서버 이미지</h1>
        //     <img src="https://www.google.com/logos/doodles/2024/paris-games-basketball-6753651837110534-law.gif" width="150px" alt="이미지" />
        //     <hr />
        // </div>

        //실습2
        // <div>
        //     <form onSubmit={submitHandler}>
        //         <h1>선택한 과일 : {src}</h1>
        //         <select value={src} onChange={selectHandler}>
        //             <option value="/images/grapefruit.png">Grapefruit</option>
        //             <option value="/images/lime.png">Lime</option>
        //             <option value="/images/banana.png">Coconut</option>
        //             <option value="/images/mango.png">Mango</option>
        //         </select>
        //         <img src = {src} width="150px" alt="과일" />
        //     </form>
        // </div>

        //실습2 설명
        <div>
            <h1>선택한 과일 : {select}</h1>
            <select value={select} onChange={updateValue}>
                {
                    selectList.map((item) => (
                        <option value={`/images/${item}.png`}>{item}</option>
                    ))
                }
            </select>
            <img src={select} width='150px' alt='과일' />
        </div>
    );
};

export default ImageComponent;