import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import booksRoute from './routes/books.js';
dotenv.config();

// 
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/books', booksRoute);
// const PORT = process.env.PORT || 3001;

mongoose
    .connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log('Connected!')
    })
// .catch((err) => {
//     console.log("error with connecting mongodb" + err)
// })


app.use('/', (req, res) => {
    res.send(
        'Hello World!'
    )
    console.log(req.ip, ": requested ip")
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})