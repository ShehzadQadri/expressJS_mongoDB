import express from 'express';
import Book from '../models/books.js';

const router = express.Router();

//POST: Create a new book

router.get('/', (req, res) => {
    res.send('helow worlds')
})


router.post('/', (req, res) => {
    let BookCreated = new Book({
        name: req.body.bookName,
        author: {
            name: req.body.authorName,
            age: req.body.authorAge
        },
        genre: req.body.genre
    });
    BookCreated
        .save()
        .then(book => {
            res.send(book);
        })
        .catch(err => {
            res.status(500).send("Book was not stored in DB", err);
            console.log(err);
        })
})

export default router;