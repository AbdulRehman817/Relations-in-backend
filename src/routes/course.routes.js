import express from "express";
import { getCourse, addCourse } from "../controllers/course.controllers.js";

const router = express.Router();

router.post("/course", addCourse);
router.get("/course", getCourse);

export default router;
