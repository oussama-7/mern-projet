import express from "express";
import Book from "../models/Book.js";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
  countByLevel,
  countByType,
} from "../controllers/book.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createBook);

router.get("/countByLevel", countByLevel);
router.get("/countByType", countByType);

//UPDATE
router.put("/:id", verifyAdmin, updateBook);

//DELETE
router.delete("/:id", verifyAdmin, deleteBook);

//GET
router.get("/:id", getBook);

//GET ALL
router.get("/", getBooks);

export default router;
