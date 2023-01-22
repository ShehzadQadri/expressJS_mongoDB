import mongoose from "mongoose";
import Author from "./author.js";

//Books schema
const BookSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    author: Author.schema,
    genre: { type: String, required: true, minlength: 3, maxlength: 20 }
})

export default new mongoose.model("book", BookSchema);