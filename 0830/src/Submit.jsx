import React from 'react';
import { useState } from 'react';

const Submit = () => {
    //실습1
    // function submitHandler(e) {
    //     e.preventDefault();
    //     console.log('submit 이벤트 발생')
    // }

    //문제1
    // const [name, setName] = useState('');

    // function submitHandler(e) {
    //     e.preventDefault();
    //     console.log('submit으로부터 받은 데이터 : ' , name)
    // }


    //문제2
    // const regionList = [
    //     {region: '서울', eng : 'seoul'},
    //     {region: '부산', eng : 'busan'},
    //     {region: '제주', eng : 'jeju'},
    // ]
    // const [form, setForm] = useState('value')

    // function submitHandler(e) {
    //     e.preventDefault();
    //     alert(form);

    // }

    // function updateValue(e) {
    //     setForm(e.target.value) //e.target.value = item.eng
    // }


    //문제3
    // const [text, setText] = useState('')
    // function submitHandler(e) {
    //     e.preventDefault();
    //     console.log('submit으로부터 받은 데이터 : ', text)

    // }

    // function updateValue(e) {
    //     setText(e.target.value) //e.target.value = item.eng
    // }

    //문제4
    const [select, setSelect] = useState('');

    function selectHandler(e) {
        setSelect(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log('submit으로부터 받은 데이터 : ', select)
    }

    return (
        //실습1
        // <div>
        //     <h1>Submit 이벤트</h1>
        //     <form onSubmit={submitHandler}>
        //         <input type="submit" value="확인" />
        //     </form>
        // </div>

        //문제1
        // <div>
        //     <h1>이름 : {name}</h1>
        //     <form onSubmit={submitHandler}>
        //         <input type="text" name="userName" onChange={(e)=>{setName(e.target.value)}}/>
        //         <input type="submit" value="전송"/>
        //     </form>
        // </div>

        //문제2
        // <div>
        //     <h1>라디오 버튼의 {form}를 출력</h1>
        //     <form onSubmit={submitHandler}>
        //     {regionList.map((item) => (
        //        <label key={item.eng}>
        //         <input type="radio" 
        //         name="city" //필수
        //         value={item.eng}
        //         onChange={updateValue}
        //         />
        //         {item.region}
        //         </label>
        //     ))}
        //     &nbsp; &nbsp;
        //     <input type="submit" value="확인" />
        //     </form>
        // </div>

        //문제3
        // <div>
        //     <form onSubmit={submitHandler}>
        //         <h1>내용 : {text}</h1>
        //         <textarea value={text} onChange={updateValue}></textarea>  
        //         <input type="submit" value="전송"/>
        //     </form>
        // </div>

        //문제4
        <div>
            <form onSubmit={submitHandler}>
                <h1>선택한 과일 : {select}</h1>
                <select value={select} onChange={selectHandler}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="submit" value="전송"></input>
            </form>
        </div>
    
    );
};

export default Submit;