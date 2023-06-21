const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const postsRoutes = require('./posts');
const loginRoutes = require('./login');

app.use('/', postsRoutes);
app.use('/', loginRoutes);
app.get('/', (req, res) => res.send({data: "hello world!"}));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening to port ${port}`));
