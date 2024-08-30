import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Checkbox from './components/Checkbox'
import Submit from './Submit';
import ImageComponent from './components/ImageComponent';
import ClickComponent from './components/ClickComponent';

function App() {

  //실습1
  // const [value, setValue] = useState("안녕하세요");
  // function printConsole() {
  //   console.log(value);
  // }

  //문제1
  // const [font, setFont] = useState('30px');

  // function changeFont(size) {
  //   setFont(size)
  // }

  //문제1 풀이
  // const [value, setValue] = useState('안녕하세요')
  // const [font, setFont] = useState('50px')
  // function changeFont(size) {
  //   setFont(size)
  // }

  // const fontStyle = {
  //   fontSize : font
  // }

  //문제2
  // const [color, setColor] = useState('black')


  //문제2 풀이
  // const [color, setColor] = useState('black')

  // const style = {
  //   color : color
  // }

  //문제3
  // const [headValue, setHeadValue] = useState('') 
  // const [consoleValue, setConsoleValue] = useState('')

  // function headFunc(e) {
  //   setHeadValue(e.target.value)
  // }
  
  // function consoleFunc(e) {
  //   setConsoleValue(e.target.value)
  //   console.log(consoleValue)
  // }

  //문제3 풀이
  // const [message, setMessage] = useState('')

  // function printConsole(e) {
  //   console.log(e.target.value)
  // }

  // function printBrowser(e) {
  //   setMessage(e.target.value)
  // }

  //문제4
  // const [name, setName] = useState('')
  // const [content, setContent] = useState('')

  //문제4 풀이
  //useState() 설계 => 초기값 : 객체
  // const [form, setForm] = useState({username : "", message : ""})

  // function onChangeHandler(e) {
  //   //[]로 하면 키가 만들어짐
  //   const newForm = {...form, [e.target.name] :e.target.value}
  //   setForm(newForm)
  // }

  //문제5
  // const [message, setMessage] = useState({title: '제목', color : 'black'})

  // function onChangeHandler(e) {
  //   const newForm = {...message, title : e.target.value}
  //   newForm.color = 'red'
  //   setMessage(newForm)
  // }

  //문제5 풀이
  // const [message, setMessage] = useState({title: '제목', color : 'black'})

  // function changeMessage(msg) {
  //   //console.log(msg) //msg = e.target.value

  //   const newMessage = {...message}
  //   newMessage.title = msg
  //   newMessage.color = 'red'

  //   //원본 객체를 새로운 객체로 변경
  //   setMessage(newMessage)
  // }

  // function showMessage() {
  //   alert(message.title)
  // }

  //문제6
  //방법2
  // const prodictList = [
  //   {itemname : '모자', price : 1},
  //   {itemname : '신발', price : 3},
  //   {itemname : '가방', price : 8},
  // ]

  //방법 2 풀이
  // const prodictList = [
  //   {name : '모자', price : 1},
  //   {name : '신발', price : 3},
  //   {name : '가방', price : 8},
  // ]

  //최종문제
  // const [total, setTotal] = useState(0)
  // function addNumHandler() {
  //   setTotal(total + 1)

  // }

  //최종문제 풀이
  const [count, setCount] = useState(0)
  function onCountHandler() {
    setCount((prev) => prev + 1)

  }


  return (

    //실습1
    // <div>
    //   <h1>{value}</h1>
    //   <button onClick={printConsole}>클릭</button>
    // </div>

    //문제1
    // <>
    //   <h1 style={{fontSize : font}}>안녕하세요</h1>
    //   <button onClick={() => {changeFont('50px')}}>글자크기변경</button>
    // </>

    //문제1 풀이
    // <>
    // <div style={fontStyle}>{value}</div>
    // {/* <button onClick={() => {changeFont('50px')}}>글자크기변경</button> */} 
    // <button onClick={() => {setFont('100px')}}>글자크기변경</button>
    // </>

    //문제2
    // <>
    // <h1 style={{color : color}}>글자색 바꾸기</h1>
    // <button onClick={() => {setColor('red')}}>빨간색</button>
    // <button onClick={() => {setColor('green')}}>초록색</button>
    // <button onClick={() => {setColor('blue')}}>파란색</button>
    // </>
    
    //문제2 풀이
    // <>
    // <h1 style={style}>글자색 바꾸기</h1>
    // <button onClick={() => {setColor('red')}}>빨간색</button>
    // <button onClick={() => {setColor('green')}}>초록색</button>
    // <button onClick={() => {setColor('blue')}}>파란색</button>
    // </>

    //문제3
    // <>
    //   <h1>{headValue}</h1>
    //   <input type="text" onChange={consoleFunc}></input>
    //   <input type="text" onChange={(headFunc)}></input>
    // </>

    //문제3 풀이
    // <>
    //   <h1>{message}</h1>
    //   {/* <input type="text" onChange={printConsole} />
    //   <input type="text" onChange={printBrowser} /> */}
    //   <input type="text" onChange={(e) => {console.log(e.target.value)}}/>
    //   <input type="text" onChange={(e) => {setMessage(e.target.value)}}/>
    // </>


    //문제4
    // <>
    // <h1>사용자 이름 : {name} </h1>
    // <h1>내용 : {content} </h1>
    // <input type="text" placeholder='사용자 이름' onChange={(e)=> {setName(e.target.value)}}/>
    // <input type="text" placeholder='내용을 입력하세요' onChange={(e)=> {setContent(e.target.value)}}/>
    // </>

    //문제4 풀이
    // <>
    // <h1>사용자 이름 : {form.username} </h1>
    // <h1>내용 : {form.message} </h1>
    // <input type="text" placeholder='사용자 이름' name="username" onChange={onChangeHandler}/>
    // <input type="text" placeholder='내용을 입력하세요' name="message" onChange={onChangeHandler}/>
    // </>

    //문제5
    // <>
    //   <h1 style={{color : message.color}}>{message.title}</h1>
    //   <hr />
    //   <input type="text" name="content" onChange={onChangeHandler}/>
    //   <button onClick={()=>alert(message.title)}>클릭</button>
    // </>

    //문제5 풀이
    // <>
    // <h1 style={{color : message.color}}>{message.title}</h1>
    // <hr />
    // <input type="text" name="content" onChange={(e)=>{changeMessage(e.target.value)}}/>
    // <button onClick={showMessage}>클릭</button>
    // </>

    //문제6
    //방법1
    // <>  
    // {/* <Checkbox cap={1} shoes={3} bag={8}></Checkbox> */}
    // </>

    //방법2
    // <>  
    // <Checkbox pList={prodictList}></Checkbox>
    // </>

    //방법2 풀이
    // <>  
    // <Checkbox list={prodictList}></Checkbox>
    // </>


    //오후 실습1
    // <>    
    // <Submit />
    // </>

    //실습2
    // <>
    // <ImageComponent />
    // </>

    //최종 문제
    // <div>
    //   <div className="container">
    //   <h1>Total Count : {total}</h1>
    //   <div className="box-container">
    //     <ClickComponent onAddData ={addNumHandler}/>
    //     <ClickComponent onAddData ={addNumHandler}/>
    //   </div>
    //   </div>
    // </div>

    //최종문제 풀이
    <>
      <div className='title'>
        <h1>Total Count : {count}</h1>
      </div>
      <div className='container'>
        <ClickComponent onCount ={onCountHandler}/>
        <ClickComponent onCount ={onCountHandler}/>
      </div>
    </>

  );
}

export default App;
