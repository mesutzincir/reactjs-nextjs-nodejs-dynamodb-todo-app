import express from "express";
import {
  getUsers,
  getUser,
  creatUser,
  deleteUser,
  patchUser,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", creatUser);

router.get("/users/:id", getUser);

router.delete("/users/:id", deleteUser);

router.patch("/users/:id", patchUser);

export default router;
