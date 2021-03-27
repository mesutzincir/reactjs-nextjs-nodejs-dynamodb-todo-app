import express from "express";
import {
  getUsers,
  getUser,
  creatUser,
  deleteUser,
  patchUser,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", creatUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

export default router;
