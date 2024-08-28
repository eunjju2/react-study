import logo from './logo.svg';
import './App.css';
import './components/MenuComponent.css'
import TodaysPlan from './TodaysPlan';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import MenuComponent from './components/MenuComponent';
import FirstProps from './components/FirstProps';
import BooleanComponent from './components/BooleanComponent';
import DefaultProps from './components/DefaultProps'
import Wrapper from './components/Wrapper';
import IntroductionComponents from './components/IntroductionComponents';
import ChildComponent from './components/ChildComponent';
import PropTypesComponent from './components/PropTypesComponent';

function App() {

  //실습3~6, 8
  const name = 'eunjju'

  //실습9
  // const style = {
  //   backgroundColor : 'red',
  //   fontSize : '12px'
  // }


  //문제2
  // const isTrue = true;

  //문제3
  // const style3 = {
  //   backgroundColor : "blue",
  //   color : 'yellow',
  //   fontSize : '50px',
  //   fontWeight : '700'
  // }



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //실습1
    // <div>
    //   <div>안녕하세요.</div>
    //   <div>이은수입니다.</div>
	  // </div>

    //실습2
    // <>
    //   <div>안녕하세요.</div>
    //   <div>이은수입니다.</div>
    // </>

    //실습3
    // <div>
    //   <div>안녕하세요.</div>
    //   <div>{name}</div>
    // </div>



    //실습4
    // <div>
    // { name === 'Sooa' ? (<h1>선생님</h1>) : (<h1>학생</h1>) }
    // </div>

    //실습5
    // <div>
    // { name === 'Sooa' && <h1>선생님</h1> }
    // </div>

    //실습6
    // <div>
    // { name === 'Sooa'  ? (<h1>선생님</h1>) : null } 
    // </div>

    //실습7
    // <div>
    //   <div>안녕하세요.</div>
    //   <img src="logo512.png" />
	  // </div>
    
    //실습8
    // <div className = "myclass">
    //   <div>안녕하세요.</div>
    //   <div>{name}</div>
	  // </div>
    
    //실습9
    // <div style={style}>
    //   <div>안녕하세요.</div>
    //   <div>{name}</div>
    // </div>

    //실습10
    // <div style={{ backgroundColor: 'red', fontSize: '12px' }}>
    //   <div>안녕하세요.</div>
    //   <div>{name}</div>
    // </div>

    //실습11
    // <div>
		// {/* 주석 사용 방법*/}
		// <div>안녕하세요.</div>
		// <div>{name}</div>
	  // </div>


    //문제 1
    // <div>
    //   <h1>첫번째</h1><br/>
    //   <h2>리액트 실습</h2><br/>
    //   <h3>화이팅</h3>
    // </div>

    //문제 2
    // <div>
    //   {isTrue ? (<h1>리액트입니다</h1>) : (<h1>리액트가 아닙니다</h1>) }
    // </div>


    //문제 3
    // <div style = {style3}>
    //   <h1>리액트</h1>
    // </div>

    //문제 4
    //App.css 파일
    // <div className="question4">
    // <h1>리액트</h1>
    // </div>

    //문제 5
    // <div>
    //   {/* 리액트에서 주석을 작성하는 방법*/}
    //   <div>
    //     {name}
    //   </div>
    //   // 이런 주석이나
    //   /* 이런 주석은 화면에 그대로 출력됩니다 */
    // </div>

    //실습12
    //import TodaysPlan from './TodaysPlan';
    // <>
    //   <TodaysPlan />
    //   <TodaysPlan />
    // </>

    //실습 13
    // <>
    // <HeaderComponent />
    // <BodyComponent />
    // <FooterComponent />

    // </>
    
    //실습 14
    // <>
    //   <MenuComponent />
    //   <MenuComponent />
    //   <MenuComponent />
    // </>

    //실습 15
    // <>
    //   <FirstProps name="이은수" />
    // </>

    //실습 16
    // <>
    // <FirstProps name="이은수" color="pink" />
    // </>

    //실습 18
      // <>
      // <MenuComponent 
      // imgSrc = "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      // alt="pasta" 
      // name="Carbonara" 
      // food="pasta" 
      // price="15,000"/>

      // <MenuComponent 
      // imgSrc = "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      // alt="pizza" 
      // name="Margherita" 
      // food="pizza" 
      // price="25,000"/>

      // <MenuComponent 
      // imgSrc = "https://plus.unsplash.com/premium_photo-1723874465750-870e02eca9d4?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      // alt="steak" 
      // name="Rib Eye Steak" 
      // food="steak" 
      // price="50,000"/>
      // </>

      //실습 19
      // <>
      // <BooleanComponent boolValue />
      // <BooleanComponent />
      // </>

      //실습 20
      // <>
      //   <DefaultProps name="은수이" />
      //   <DefaultProps  />
      // </>

      //실습 21
      // <>
      //   <Wrapper>
      //     <HeaderComponent />
      //     <BodyComponent />
      //     <FooterComponent />
      //   </Wrapper>
      // </>

      //문제 6
      // <>
      //   <IntroductionComponents name="은수이" age={25} address="의정부" nameColor="blue" ageColor="red" addrColor="orange" />
      //   <IntroductionComponents  age={26} address="수원" nameColor="blue" ageColor="red" addrColor="orange"/>
      // </>

      //문제 7
      // <>
      //   <ChildComponent>리액트</ChildComponent>
      // </>

      //실습 22
      <>
        <PropTypesComponent item="3" price={1000}/>
        {/* <PropTypesComponent item="3" />  */}
        {/* The prop `price` is marked as required in `ProTypesComponent`, but its value is `undefined` */}
      </>
  );
}

export default App;
