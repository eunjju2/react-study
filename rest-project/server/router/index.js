const express = require("express");
const router = express.Router();
router.get("/", (request, response) => {
  response.send("Hello Node.js");
});

let todoList = [
  { id: 1, text: "리액트 기초 공부하기", status: false },
  { id: 2, text: "취업 준비하기", status: false },
  { id: 3, text: "여행가기", status: true },
];

let idValue = 3;

router.get("/api/todo", (request, response) => {
  response.json(todoList);
});

router.post("/api/add", (request, response) => {
  console.log(todoList.length);
  console.log(request.body.text);

  idValue ++;
  const newItem = {
    id: idValue,
    text: request.body.text,
    status: false,
  };

  todoList.push(newItem);
  response.send(newItem);
});

router.put("/api/todo/:id", (request, response) => {
  const id = parseInt(request.params.id, 10);
  const { status } = request.body;

  const todoIndex = todoList.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    return response.status(404).json({ message: "Todo not found" });
  }

  todoList[todoIndex].status = status;

  response.send(todoList[todoIndex]);
});


router.delete("/api/todo/:id", (request, response) => {
  const id = parseInt(request.params.id, 10);

  const itemIndex = todoList.findIndex((todo) => todo.id === id);
  if (itemIndex === -1) {
    return response.status(404).json({ message: "Todo not found" });
  }


  todoList = todoList.filter((todo) => todo.id !== id)
  response.send(todoList);
})

module.exports = router;
