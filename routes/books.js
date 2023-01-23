import express from 'express';
import { Book, validateBook } from '../models/books.js';

const router = express.Router();

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

router.get('/', async (req, res) => {
    try {
        // const { id } = req.query;
        // console.log("id", id)
        const allBooks = await Book.find({});
        return res.status(200).send({ allBooks });
    } catch (err) {
        return res.status(401).send({ status: 401, err });
    }
})


router.get('/:bookId', (req, res) => {

    // const { id } = req.query;
    // console.log("id", id)
    Book.findById(req.params.bookId)
        .then(book => {
            if (book) return res.send(book);
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.get('/api', async (req, res) => {
    try {
        const { id } = req.query;
        console.log("id", id)
        const findBook = await Book.find({ "_id": id });
        return res.status(200).send({ findBook });
    } catch (err) {
        return res.status(401).send({ status: 401, err });
    }
})

export default router;  