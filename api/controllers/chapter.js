import Chapter from "../models/Chapter.js";
import Book from "../models/Book.js";
// import{ createError } from "../utils/error.js";

export const createChapter = async (req, res, next) =>{
    
    const bookId = req.params.bookid;
    const newChapter = new Chapter(req.body)

    try{
        const savedChapter = await newChapter.save()
        try{
            await Book.findByIdAndUpdate(bookId, {$push : {chapters: savedChapter._id},});
        }catch(err){
            next(err);
        }
        res.status(200).json(savedChapter);
    }catch(err){
        next(err);
    }
};

export const updateChapter = async(req, res, next)=>{
    try{
        const updatedChapter = await Chapter.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedChapter)
    }catch(err){
        next(err);
    }
}

export const deleteChapter = async(req, res, next)=>{
    const bookId = req.params.bookid;
    try{
        await Chapter.findByIdAndDelete(req.params.id);
        try{
            await Book.findByIdAndUpdate(bookId, {$pull : {chapters: req.params.id},});
        }catch(err){
            next(err);
        }
        res.status(200).json("Chapter has been deleted");
    }catch(err){
        next(err);
    }
}

export const getChapter = async(req, res, next)=>{
    try{
        const AChapter = await Chapter.findById(req.params.id);
        res.status(200).json(AChapter);
    }catch(err){
        next(err);
    }
}

export const getChapters = async(req, res, next)=>{
    try{
        const chapters = await Chapter.find()
        res.status(200).json(chapters)
    }catch(err){
        next(err);
    }
}