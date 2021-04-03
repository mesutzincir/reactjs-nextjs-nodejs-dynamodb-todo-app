import { Button, ButtonGroup, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

function EditTodo(props) {
  let location = useLocation();
  console.log(location.state.editTodo);
  const todo = location.state.editTodo;
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);
  const [status, setStatus] = useState(todo.status);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: todo.id,
        title: title,
        desc: desc,
        status: status,
      }),
    };
    console.log(JSON.stringify(requestOptions));
    try {
      const result = await fetch(
        "http://localhost:9090/todos/" + todo.id,
        requestOptions
      );
      history.goBack();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const handleCancelClick = (event) => {
    console.log("handleCancelClick");

    history.goBack();
  };
  return (
    <div>
      <Typography variant="h3" color="primary">
        Edit Todo
      </Typography>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1em",
          fontSize: "1.2em",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          style={{ height: "2em", fontSize: "1.2em", marginBottom: "1em" }}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="desc">Desciription:</label>
        <textarea
          id="id"
          name="desc"
          placeholder="Desciription"
          style={{ height: "5em", fontSize: "1.2em", marginBottom: "1em" }}
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          style={{ height: "2em", fontSize: "1.2em", marginBottom: "1em" }}
          value={status}
          onChange={(event) => setStatus(Number(event.target.value))}
        >
          <option value="0">pending</option>
          <option value="1">Start</option>
          <option value="2">completed</option>
        </select>
        <div>
          <ButtonGroup color="primary" variant="contained">
            <Button type="submit">Submit</Button>
            <Button onClick={(event) => handleCancelClick(event)}>
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </form>
    </div>
  );
}

export default EditTodo;
