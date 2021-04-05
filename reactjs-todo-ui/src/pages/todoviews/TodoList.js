import { Button, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Todo from "../../component/Todo";

function TodoList() {
  const [todoArr, setTodoArr] = useState([
    {
      id: 1,
      title: "Develop Nodojs web api",
      desc:
        "Develop a nodejs web api with dynamodb. Use docker image for dynamodb",
      status: 0,
    },
    {
      id: 2,
      title: "Develop react UI",
      desc: "create a react api to use nodejs web api",
      status: 0,
    },
    {
      id: 3,
      title: "create a nextjs app",
      desc: "create a nextjs app",
      status: 0,
    },
  ]);

  useEffect(() => {
    const apiULR = process.env.REACT_APP_TODO_API_BASEURL + "todos/";
    fetch(apiULR)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodoArr(data);
      })
      .catch((err) => console.log(JSON.stringify(err)));
  }, []);

  const handleDeleteClick = async (id) => {
    try {
      const result = await fetch("http://localhost:9090/todos/" + id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      });
      const data = await result.json();

      console.log(JSON.stringify(data));
      const newTodos = todoArr.filter((todo) => todo.id != id);
      setTodoArr(newTodos);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  const showTodos = todoArr.map((t) => (
    <div key={t.id}>
      <Todo todo={t} handleDeleteClick={handleDeleteClick} />
    </div>
  ));
  return (
    <div>
      <Typography variant="h3" color="primary">
        Todo List
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/newtodo"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        hrefto="/newtodo"
      >
        Add Todo
      </Button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        {showTodos}
      </div>
    </div>
  );
}

export default TodoList;
