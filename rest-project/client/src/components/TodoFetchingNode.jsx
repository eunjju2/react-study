import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import UseMutationEx from './UseMutationEx'
import axios from "axios";
import './TodoFetchingNode.scss'


const fetchTodo = () => {
  return fetch("http://localhost:5001/api/todo").then((response) =>
    response.json()
  );
};

const addItem = async (newItem) => {
  const response = await axios.post("http://localhost:5001/api/add", newItem);
  return response.data;
};

const updateTodoStatus = async (todo) => {
  const response = await axios.put(
  `http://localhost:5001/api/todo/${todo.id}`,
  { status: !todo.status }
  );
  return response.data;
  };

const deleteTodo = async (todo) => {
  const response = await axios.delete(`http://localhost:5001/api/todo/${todo.id}`)
  return response.data;
}

const TodoFetchingNode = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"], // 쿼리 키
    queryFn: fetchTodo, // 데이터를 가져오는 함수
  });
  
  const addItemMutation = useMutation({
    mutationFn: addItem,
    onSuccess: (result) => {
      console.log("Todo created successfully:", result);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error creating todo:", error);
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodoStatus,
    onSuccess: (result) => {
    console.log("Todo created successfully:", result);
    queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
    console.error("Error adding item:", error);
    alert("Failed to add item. Please try again.");
    },
    });

  const deleteTodoMutation = useMutation({
    mutationFn : deleteTodo,
    onSuccess : (result) => {
      console.log('Delete Todo successfully : ', result);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError : (error) => {
      console.error("Error delete item:", error);
    }
  })
  
  const sendData = () => {
    const todoText = prompt('새로운 할 일을 입력하세요')

    if(todoText) {
      const newTodo = { text: todoText };
      addItemMutation.mutate(newTodo);
    }
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function changeHandler(todo) {
    updateTodoMutation.mutate(todo);
    }

  function deleteHandler(todo) {
    deleteTodoMutation.mutate(todo);
  }

  return (

    <div className="todo-container">
      <h1>🎀이번 주 할 일 리스트🎀</h1>
      <div className="list-container">
      {data.map((todo) => (
        
        <p key={todo.id} className="todo-list">
          <input className="checkbox" type="checkbox" checked={todo.status} onChange={() => changeHandler(todo)} />
          {todo.text}
          <button className="delBtn" onClick={() => deleteHandler(todo)}>❌</button>
        </p> 
      ))}
      </div>
      {/* <UseMutationEx /> */}
      <button className="addBtn" onClick={sendData}>할 일 추가</button>
    </div>

  );
};

export default TodoFetchingNode;
