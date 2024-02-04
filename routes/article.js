import { Router } from "express";
import * as articleController from "../controllers/article.js";

const router = Router();

router.post("/api/articles", articleController.createArticle);

router.get("/api/articles", articleController.getAllArticles);

router.get("/api/articles/:id", articleController.getArticle); 

router.put("/api/articles/:id", articleController.updateArticle);

router.delete("/api/articles/:id", articleController.deleteArticle);

export default router;

