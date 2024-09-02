import React, { useState } from 'react';
import '../styles/TodoInsert.scss'
import { CgMathPlus } from "react-icons/cg";
const TodoInsert = (props) => {
    const {onAddTodo} = props;
    const [todo, setTodo] = useState('')

    function changeTodo(e) {
        setTodo(e.target.value)
    }

    function addTodo() {
        if(todo.trim()) {
            onAddTodo(todo);
            setTodo('');
        }else{
            alert('내용을 입력하세요!')
        }
    }


    return (
        <div className='todo-insert'>
            <input type="text" value={todo} className='insert-text'onChange={changeTodo}/>
            <button className='insert-button' onClick={addTodo}><CgMathPlus /></button>
        </div>
    );
};

export default TodoInsert;