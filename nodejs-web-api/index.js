import dotenv from "dotenv";
import express from "express";
//import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import { createDB } from "./database/dynomoDb.js";
import todoRouter from "./routes/todos.js"; // don't forget extension ".js"

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/users", userRoutes); //middleware to route /users

app.use("/todos", todoRouter); // middleware to /todos

app.get("/", (request, response) => {
  response.end("hello home page");
});

createDB();

app.listen(
  PORT,
  /* callback function */
  () => console.log(`Wellcome Nodejs web api. PORT:${PORT}`)
);
