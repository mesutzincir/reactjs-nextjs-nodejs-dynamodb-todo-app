import express from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  patchTodo,
} from "../controllers/todosController.js";

const todoRouter = express.Router();

todoRouter.get("/", getTodos);

todoRouter.post("/", createTodo);

todoRouter.get("/:id", getTodo);

todoRouter.delete("/:id", deleteTodo);

todoRouter.patch("/:id", patchTodo);
export default todoRouter;
