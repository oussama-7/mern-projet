import express from "express";
import Chapter from "../models/Chapter.js";
import { createChapter, deleteChapter, getChapter, getChapters, updateChapter} from "../controllers/chapter.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:bookid",verifyAdmin,createChapter);

//UPDATE
router.put("/:id",verifyAdmin,updateChapter);

//DELETE
router.delete("/:id/:bookid",verifyAdmin,deleteChapter);

//GET
router.get("/:id",getChapter);

//GET ALL
router.get("/",getChapters);

export default router