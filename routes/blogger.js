import { Router } from "express";

import * as bloggerController from "../controllers/blogger.js";

const router = Router();

router.post("/api/bloggers", bloggerController.createBlogger);

router.get("/api/bloggers", bloggerController.getAllBloggers);

router.get("/api/bloggers/:id", bloggerController.getBlogger);

router.put("/api/bloggers/:id", bloggerController.updateBlogger);

router.delete("/api/bloggers/:id", bloggerController.deleteBlogger);

export default router;