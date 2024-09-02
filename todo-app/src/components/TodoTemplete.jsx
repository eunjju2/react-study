import React, { useState } from 'react';
import '../styles/TodoTemplete.scss'
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplete = () => {
    const todoArr = [
        {id: 0, text : '할 일'}
    ]
    const [todoList, setTodoList] = useState(todoArr);

    function addTodoList(todo) {
        const newTodoList = [...todoList]
        newTodoList.push({id: newTodoList.length, text:todo})
        setTodoList(newTodoList)
    }

    function deleteTodoList(id) {
        setTodoList(todoList.filter((todo) => todo.id !== id));
      };

    return (
        <div className='templete'>
            <TodoInsert onAddTodo={addTodoList}/>
            <TodoList todoList={todoList} deleteTodoList={deleteTodoList}/>
            
        </div>
    );
};

export default TodoTemplete;