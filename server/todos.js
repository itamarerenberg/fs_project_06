const express = require('express');
const router = express.Router();

const todosDB = require('./db_manager/todos');

router.get('/todos', (req, res) => {
    try{
        const userId = req.query.userId;
        const todos = todosDB.getTodosByUserID(userId);
        res.send(todos);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/todos', (req, res) => {
    try{
        const todos = req.body;
        for(let i = 0; i < todos.length; i++){
            todosDB.updateTodo(todos[i]);
        }
        res.send(todos);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/todos', (req, res) => {
    try{
        const content = req.body;
        const newTodo = todosDB.addTodo(content.title);
        res.send(newTodo);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/todos/:id', (req, res) => {
    try{
        const id = req.params.id;
        const todo = todosDB.getTodoById(id);
        //implement deletion by valid = false
        res.send(todo);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
