import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
    .connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log('Connected!')
    })
    .catch((err) => {
        console.log("error with connecting mongodb" + err)
)


const app = express();
const PORT = process.env.PORT;
// const PORT = process.env.PORT || 3001;


app.get('/', (req, res) => {
    console.log(req.ip, ": requested ip")
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})