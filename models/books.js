import mongoose from "mongoose";
import Author from "./author.js";
import joi from "joi";

//Books schema
const BookSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    author: Author.schema,
    genre: { type: String, required: true, minlength: 3, maxlength: 20 }
});

//validation through joi
export const validateBook = async (body) => {
    const schema = joi.object(
        {
            bookName: joi.string().required().min(3).max(50),
            authorName: joi.string().required().min(3).max(50),
            authorAge: joi.number().required().integer().min(10, 'age must be greater then one').max(20, 'great'),
            genre: joi.string().required().min(3).max(20),
        }
    );
    return await schema.validateAsync(body, { abortEarly: false })
        .then(body => console.log(body))
        .catch(err => {
            return { message: err.message }
        });

}

//where as book is collection name of database mongodb
export default new mongoose.model("book", BookSchema);