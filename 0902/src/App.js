import './App.css';
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled from 'styled-components';
// import FirstScssComponent from './components/FirstScssComponent'
// import SecondScssComponent from './components/SecondScssComponent'
// import ThirdScssComponent from './components/ThirdScssComponent';
// import NestingComponent from './components/NestingComponent'
import Operations from './components/Operations'


function App() {

  //실습3
  // const Title = styled.h1`
  // font-size: 1.5em;
  // text-align: center;
  // color : palevioletred;
  // `;

  // const Wrapper = styled.div`
  // padding : 4em;
  // background-color: papayawhip;
  // `;


  //실습4
  // const Button = styled.button`
  //   background: ${(props) => (props.primary ? "palevioletred" : "white")};
  //   color: ${(props) => (props.primary ? "white" : "palevioletred")};
  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  // `;

  //문제1
  const Container = styled.div`
    background-color: black;
    width: 1024px;
    padding: 1rem;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      width: 100%;
    }
  `;


  const Button = styled.button`
    background: ${(props) => (props.main ? "blue" : "white")};
    color: ${(props) => (props.main ? "white" : "black")};
    border: ${(props) => (props.main ? "3px solid yellow" : "black")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `;

  return (
    //실습1,2
    // <div>
    //   <Button1 />
    //   <Button2 />
    // </div>

    //실습3
    // <div>
    //   <Wrapper>
    //     <Title>안녕하세요</Title>
    //   </Wrapper>
    // </div>

    //실습4
    // <div>
    //     <Button>Normal</Button>
    //     <Button primary>Primary</Button>
    // </div>

    //문제1
    // <div>
    //   <Container>
    //   <Button>버튼1</Button>
    //   <Button main>버튼2</Button>
    //   </Container>
    // </div>

    //실습5
    // <div>
    // <FirstScssComponent />
    // {/* <SecondScssComponent /> */}
    // <ThirdScssComponent />
    // </div>

    //실습6
    // <div>
    //   <NestingComponent />
    // </div>

    //실습7
    <>
    <Operations />
    </>
  );
}

export default App;
