import React from 'react';
import '../styles/TodoListItem.scss'
import { FiMinus } from "react-icons/fi";


const TodoListItem = (props) => {

    const {id, todo, deleteTodo} = props;


    return (
        <div className='todo-item' id={id}>
            <div className='todo-text'>
                <label>
                    <input type="checkbox" className='checkbox'/>
                    <div className="todo-text">{todo}</div>
                </label>
                
            </div>
            <button className='del-item' onClick={() => deleteTodo(id)}><FiMinus /></button>   
        </div>

    );
};

export default TodoListItem;