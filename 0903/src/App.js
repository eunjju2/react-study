import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import AddName from './components/AddName'
import AddList from './components/AddList';
import EffectPrac from './components/EffectPrac'
import UseRefComponent from './components/UseRefComponent';
import RefPrac from './components/RefPrac';
import UseRefDom from './components/UseRefDom'
import UseMemoPrac from './components/UseMemoPrac'

function App() {

  const [value, setValue] = useState(0);

  function valueHandler(num) {
    setValue((prev) => prev + num)
  }

  return (
    //실습1
    // <div>
    //   <h1>현재 카운터 값은 {value}입니다.</h1>
    //   <Button number={1} changeValue={valueHandler}/>
    //   <Button number={-1} changeValue={valueHandler}/>
    // </div>

    //실습2
    // <AddName />

    //실습3
    // <AddList />

    //실습4
    // <>
    // <EffectPrac />
    // </>

    //실습5
    // <>
    //   <UseRefComponent />
    // </>

    //문제1
    // <>
    //   <RefPrac />
    // </>

    //실습6
    // <>
    // <UseRefDom />
    // </>

    //실습7
    <>
    <UseMemoPrac />
    </>
  );
}

export default App;
