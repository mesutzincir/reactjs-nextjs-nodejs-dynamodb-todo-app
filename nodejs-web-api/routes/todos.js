import express from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  patchTodo,
} from "../controllers/todosController.js";

const todoRouter = express.Router();

todoRouter.get("/todos", getTodos);

todoRouter.post("/todos", createTodo);

todoRouter.get("/todos/:id", getTodo);

todoRouter.delete("/todos/:id", deleteTodo);

todoRouter.patch("/todos/:id", patchTodo);
export default todoRouter;
