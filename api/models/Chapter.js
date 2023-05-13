import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  chapterNumbers: [{number:Number}],

},
 {timestamps:true}
);

export default mongoose.model("Chapter", ChapterSchema);
