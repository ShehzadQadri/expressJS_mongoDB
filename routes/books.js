import express from 'express';
import Book, { validateBook } from '../models/books.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('helow worlds')
})

//POST: Create a new book
router.post('/', async (req, res) => {
    const message = await validateBook(req.body);
    console.log(message);

    if (message) return res.status(400).send(message);

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
            return res.send(book);
        })
        .catch(err => {
            return res.status(500).send("Book was not stored in DB " + err);
            // console.log(err);
        })
})

export default router;