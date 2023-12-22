import { Router } from 'express';
import { authRequired } from '../middlewares/validatetoken';
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/auth.controller.js"

const router = Router();
router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTasks);

router.post("/tasks", authRequired, createTasks);

router.delete("/tasks:id", authRequired, deleteTasks);

router.put("/tasks:id", authRequired, updateTasks)