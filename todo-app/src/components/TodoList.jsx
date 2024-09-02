import React from 'react';
import '../styles/TodoList.scss'
import TodoListItem from './TodoListItem';


const TodoList = (props) => {
    const {todoList, deleteTodoList} = props;
    return (
        <div className='todo-list'>
        {todoList.map((todo) => (
            <TodoListItem key={todo.id} id={todo.id} todo={todo.text} deleteTodo={deleteTodoList}/>    
        ))}  
        </div>
    );
};

export default TodoList;