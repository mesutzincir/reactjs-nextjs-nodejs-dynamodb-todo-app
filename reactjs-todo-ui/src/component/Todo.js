import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Fab, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Todo({ todo, handleDeleteClick }) {
  return (
    <div
      key={todo.id}
      style={{
        flexGrow: 1,
        flexDirection: "column",
        width: "500px",
        border: "1px solid rgba(0,0,0,0.2)",
        padding: "1em",
        margin: "1em 0.5em",

        boxSizing: "border-box",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Typography variant="h5" color="primary">
            {todo.title}
          </Typography>
        </div>
        <IconButton
          aria-label="delete"
          color="secondary"
          onClick={() => handleDeleteClick(todo.id)}
        >
          <DeleteIcon fontSize="large" />
        </IconButton>
        <Link
          to={{
            pathname: "/edittodo",
            state: { editTodo: todo },
          }}
        >
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </Link>
      </div>
      <div
        style={{
          margin: "1em 0",
          flexWrap: "wrap",
        }}
      >
        <p style={{ height: "10em", lineHeight: "1.8em", overflow: "auto" }}>
          {todo.desc}
        </p>
      </div>
      <div
        style={{
          margin: "1em 0",
          flexWrap: "wrap",
        }}
      >
        <p>
          status:
          <span
            style={{
              borderWidth: "1px",
              borderRadius: "5px",
              borderStyle: "solid",
              padding: "0.3em",
              color: "white",
              backgroundColor: "blueviolet",
            }}
          >
            {todo.status}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Todo;
