const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const postsRoutes = require('./posts');
const userRoutes = require('./user');
const todosRoutes = require('./todos');
const commentsRoutes = require('./comments');

app.use('/', postsRoutes);
app.use('/', userRoutes);
app.use('/', todosRoutes);
app.use('/', commentsRoutes);
// app.get('/', (req, res) => res.send({data: "hello world!"}));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening to port ${port}`));
