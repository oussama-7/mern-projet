import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  langue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
  }],
  page: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Book", BookSchema);



// import mongoose from "mongoose";

// const BookSchema = new mongoose.Schema({
//   langue: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   photos: {
//     type: [String],
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   writer: {
//     type: String,
//     required: true,
//   },
//   desc: {
//     type: String,
//     required: true,
//   },
//   Rating: {
//     type: Number,
//     min: 0,
//     max: 5,
//   },
//   chapter: {
//     type: [String],
//   },
//   page: {
//     type: [String],
//   },
//   featured: {
//     type: Boolean,
//     default: false,
//   },
// });

// export default mongoose.model("Book", BookSchema);
