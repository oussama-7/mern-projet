import Book from "../models/Book.js";

export const createBook = async(req, res, next)=>{
    const newBook = new Book(req.body);
    try{
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    }catch(err){
        next(err);
    }
}

export const updateBook = async(req, res, next)=>{
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedBook)
    }catch(err){
        next(err);
    }
}

export const deleteBook = async(req, res, next)=>{
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("Book has been deleted");
    }catch(err){
        next(err);
    }
}

export const getBook = async(req, res, next)=>{
    try{
        const ABook = await Book.findById(req.params.id);
        res.status(200).json(ABook);
    }catch(err){
        next(err);
    }
}

export const getBooks = async(req, res, next)=>{
    try{
        const books = await Book.find()
        res.status(200).json(books)
    }catch(err){
        next(err);
    }
}



export const countByLevel = async (req,res,next)=> {
    const levels = req.query.levels.split(",");
    
    try {
      const list = await Promise.all(
        levels.map((level) => {
          return Book.countDocuments({level: level})
        }))
      res.status(200).json(list);
    }catch (err) {
      next(err);
    }
  };

  export const countByType = async (req,res,next)=> {
    const types = req.query.types.split(",");
    
    try {
      const list = await Promise.all(
        types.map((type) => {
          return Book.countDocuments({type: type})
        }))
      res.status(200).json(list);
    }catch (err) {
      next(err);
    }
  };
  


//   export const countByLevel = async (req, res, next) => {
//     const levels = req.query.levels.split(",");
//     try {
//       const list = await Promise.all(
//         levels.map((level) => {
//           return Book.countDocuments({ level: level });
//         })
//       );
//       res.status(200).json(list);
//     } catch (err) {
//       next(err);
//     }
//   };
