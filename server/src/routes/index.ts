import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/Todo";

const router: Router = Router();

router.get("/get", getAllTodos);
router.post("/add", createTodo);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
