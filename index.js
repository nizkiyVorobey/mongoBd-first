const express = require('express');
const mongoose = require('mongoose');

const {createServer} = require('http');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://root:root@cluster0.kwp6y.mongodb.net/first-base?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
.then(() => console.log('connected sucsess'))
.catch(() => console.log('connected Error'))

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Users = mongoose.model("users", userSchema)

app.get('/', (req, res) => {
    Users.create({
        name: 'senya',
        email: 'test@gmail.com',
    })
    .then((user) => res.send(user))
    .catch((err) => res.send(err))
})

const server = createServer(app);

server.listen(port, () => console.log(`server listening on port ${port}`))