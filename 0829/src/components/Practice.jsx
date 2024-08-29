import React from 'react';

const Practice = () => {
        //실습1
        // const numbers = [5, 10, 15, 20, 25, 30];
        // numbers.forEach((number, index) => {
            
        //     if(number % 2 === 0) {
        //         numbers.splice(index, 1)
        //     } 
        // })
        

        //실습2
        // const fruits = [
        //     {name : 'apple', amount : 2, price : 1000},
        //     {name : 'banana', amount : 3, price : 2500},
        //     {name : 'orange', amount : 5, price : 5000},
        // ]
        
        // const findName = 'banana'

        // const findFruit = fruits.find((fruit) => fruit.name === findName)

        //실습3-1(find()만 사용해야 하는데,, 이게 맞나?)
        const array = ["javascript", "css", "react", "html"];
        const findItem = [];
        for(let i=0; i < array.length; i++) {
            findItem.push(array.find(item => item.length >= 5))
            array.splice(i,1)
        }

        //실습3-2
        // const array = ["javascript", "css", "react", "html"];
        
        // array.forEach((item) => {})
        // const findItem = array.filter(item => item.length >= 5)

        //실습4
        // const numbers = [5, 19, 42, 36, 70];
        // const newArr = numbers.map(number => {
        //     const num = number * 2;
        //     number = (num % 3 === 0) ? num * 2 : num ;
        //     return number;
        // })

    return (
        //실습1
        // <div>
        //     <h1>배열의 남은 요소 : {numbers.join(',')}</h1>
        // </div>
        
        //실습2
        // <div>
        //     <h3>이름 : {findFruit.name}</h3>
        //     <h3>수량 : {findFruit.amount}</h3>
        //     <h3>가격 : {findFruit.price}</h3>
        // </div>
       
        //실습3-1
           <div>
            {
                findItem.map(item => <h3>{item} : {item.length}</h3>)
            }
        </div>

        //실습3-2
        // <div>
        //     {
        //         findItem.map(item => <h3>{item} : {item.length}</h3>)
        //     }
        // </div>

        //실습4
        // <div>
        //     <h3>결과 : {newArr.join(',')}</h3>
        // </div>
    );
};

export default Practice;