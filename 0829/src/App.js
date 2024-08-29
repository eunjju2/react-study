import logo from './logo.svg';
import './App.css';
import MovieComponent from './components/MovieComponent';
import TodoTask from './components/TodoTask'
import PriceList from './components/PriceList'
import NameList from './components/NameList';

import { useState } from 'react';
import ChildComponent from './components/ChildComponent';
import UserID from './components/UserID'
import UserPW from './components/UserPW'
import Practice from './components/Practice';

function App() {
    //실습2
    // const movieList = [
    //   {
    //     title: "행복의 나라",
    //     open: "2024.08.14",
    //     image : "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88454/88454_320.jpg"
    //   },
    //   {
    //     title: "에이리언-로물루스",
    //     open: "2024.08.14",
    //     image : "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88170/88170_320.jpg"
    //   },
    //   {
    //     title: "트위스터스",
    //     open: "2024.08.14",
    //     image : "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88442/88442_320.jpg"
    //   }
    // ];


    //실습3
    // const todoList = [
    //   { taskName : '빨래하기', finished : false },
    //   { taskName : '공부하기', finished : true }
    //   ];

    //실습4
    // const priceList = [1000, 2000, 3000, 4000]

    //문제1
    // const nameList = ['HTML', 'CSS', 'Javascript', 'React'];

    //문제1 풀이
    // const names = ['HTML', 'CSS', 'Javascript', 'React'];
    // const nameList = names.map((name) => {return <li>{name}</li>})
    // const nameList = names.map((name) => <li>{name}</li>)


    //실습7, 8
    // const [인사, 인사변경] = useState(["안녕하세요", "재미있는", "리액트"])

    //실습8
    // const [font, setFont] = useState("50px")

    // const fonstStyle = {
    //   fontSize : font
    // }

    //실습9
    // const [value, setValue] = useState('안녕하세요')
    // function printValue() {
    //   console.log(value)
    // }

    //실습10
    // const [value, setValue] = useState('안녕하세요');
    // function changeValue() {
    //   setValue('반가워요');
    // }

    //문제2
    // const [value, setValue] = useState(1);
    // function upCounter() {
    //   setValue(value + 1);
    // }

    //문제3
    // const [value, setValue] = useState(1);
    // function upCounter() {
    //   setValue(value + 1);
    // }

    // function resetCounter() {
    //   setValue(0);
    // }
    
    //문제4
    // const [value, setValue] = useState('안녕하세요');
    // function loginFunc() {
    //   setValue('로그인 되었습니다')
    // }
    // function logoutfunc() {
    //   setValue('로그아웃 되었습니다')
    // }

    //실습11
    // const person1 = { name : 'eunjju' };
    // const person2 = { name : 'eunjju', age : 25 };
    // const person3 = { name : 'eunjju', age : 25, region : 'seoul' };

    //실습12
    // const person1 = { name : 'eunjju' };
    // const person2 = person1;
    // person2.age = 20;
    // const person3 = person2;
    // person3.region = 'seoul';

    //실습13
    // const person1 = { name : 'sooa' };
    // const person2 = { ...person1, age : 20 };
    // const person3 = { ...person2, region : 'seoul' };

    //실습14
    // const person1 = { name : 'sooa' };
    // const person2 = { ...person1, age : 20 };
    // const person3 = { ...person2, region : 'seoul' };
    // const person4 = { ...person3, region : 'busan' };
    // const person5 = { region : 'busan', ...person3  };

    //문제5
    // const [values, setValue] = useState(['안녕', '하이'])
    // function changeArr(){
    //   const newValue = [...values]
    //   newValue[1] = 'Hello'

    //   setValue(newValue);
    // }

    //실습15
    // const [value, setValue] = useState('')

    // function addDataHandler(data) { //data : 자식이 작성한 글자
    //   setValue(data); //변수 값을 변경
    // }

    //문제6
    // const [idValue, setID] = useState('')
    // const [pwValue, setPW] = useState('')

    // function idHandler(id) {
    //   //ID 컴포넌트로부터 ID 값을 전달 받아서 처리
    //   setID(id)
    // }

    // function pwHandler(pw) {
    //   //PW 컴포넌트로부터 ID 값을 전달 받아서 처리
    //   setPW(pw)
    // }

    // function correctUser() {
    //   const id = "admin"
    //   const pw =  "1234"
    //   //기존에 저장된 아이디와 비밀번호 비교
    //   const result = id === idValue && pw === pwValue ? '로그인 성공' : '로그인 실패'
        
    //   alert(result)


  return (
    //실습1
    // <>
    //   <MovieComponent title="행복의 나라" open="2024.08.14"/>
    //   <MovieComponent title="에이리언-로물루스" open="2024.08.14 "/>
    //   <MovieComponent title="트위스터스" open="2024.08.14 "/>
    // </>

    //실습2
    // <>
		// {
		// 	movieList.map(movie =>
		// 	<MovieComponent title={movie.title} open={movie.open} image={movie.image} />)
		// }
	  // </> 

    //실습3
    // <>
    //   {
    //     todoList.map(todo => <div>{ todo.taskName }</div>)
    //   }
    // </>

    //실습4
    // <>
    // {
    //   todoList.map(todo => <TodoTask taskName={todo.taskName}/>)
    // }
    // </>

    //실습5
    // <>
    //   <h1>가격 목록</h1>
    //  {
    //   priceList.map((price) => (<PriceList prices={price} key={price}/>))
    //  }
    // </>

    //실습6
    // <>
    // <h1>가격 목록</h1>
    // {
    //   priceList.map((price, index) => (<PriceList prices={price} key={index}/>))
    // }
    // </>

    //문제1
    // <div>
    //   <ul>
    //     {
    //       nameList.map((name, index) => <NameList name={name} key={index}/>)
    //     }
    //   </ul>
    // </div>

    //문제1 풀이
    // <div>
    //   <ul>{nameList}</ul>
    // </div>

    //실습7
    // <>
    //   <h1>{인사[0]}</h1> //안녕하세요
    //   <h1>{인사[1]}</h1> //재미있는
    //   <h1>{인사[2]}</h1> //리액트
    // </>

    //실습8
    // <>
    //   <div style={fonstStyle}>{인사[0]}</div> 
    //   <div style={fonstStyle}>{인사[1]}</div> 
    //   <div style={fonstStyle}>{인사[2]}</div> 
    // </>

    //실습9
    // <>
    //   <h1>{value}</h1>
    //   <button onClick={printValue}>클릭</button>
    // </>

    //실습10
    // <>
    //   <h1>{value}</h1>
    //   <button onClick={upCounter} >클릭</button>
    // </>


    //문제2, 3
    // <>
    //   <h1>{value}</h1>
    //   <button onClick={upCounter} onMouseOut={resetCounter}>클릭</button>
    // </>
    
    //문제 4
    // <>
    //   <h1>{value}</h1>
    //   <button onClick={loginFunc}>로그인</button>
    //   <button onClick={logoutfunc}>로그아웃</button>
    // </>

    //실습11~13
    // <div>
    //   <h1>{JSON.stringify(person1)}</h1>
    //   <h1>{JSON.stringify(person2)}</h1>
    //   <h1>{JSON.stringify(person3)}</h1>
    // </div>

    //실습14
    //   <div>
    //   <h1>{JSON.stringify(person1)}</h1>
    //   <h1>{JSON.stringify(person2)}</h1>
    //   <h1>{JSON.stringify(person3)}</h1>
    //   <h1>{JSON.stringify(person4)}</h1>
    //   <h1>{JSON.stringify(person5)}</h1>
    // </div>

    //문제5
    // <div>
    //   <h1>{values[0]}</h1>
    //   <h1>{values[1]}</h1>
    //   <button onClick={changeArr}>배열 값 변경</button>
    // </div>

    //실습15
    // <>
    //   <h1>ChildComponent로부터 전달받은 데이터 : {value}</h1>
    //   <ChildComponent onAddData={addDataHandler}/>
    // </>

    //문제6
    // <>
    //   <UserID idData={idHandler}/>
    //   <UserPW pwData={pwHandler}/>
    //   <button onClick={correctUser}>Login</button>
    // </>

    //------------------------------------------------------------
    //고차함수 실습
    <>
      <Practice />
    </>
  );
}

export default App;
