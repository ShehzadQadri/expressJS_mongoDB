import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },
    age: {
        type: Number,
        min: 10,
        max: 100
    }
})

export default new mongoose.model("Author", AuthorSchema);