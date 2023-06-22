const express = require('express');
const router = express.Router();

const todosDB = require('./db_manager/todos');

router.get('/todos', async (req, res) => {
    try{
        const userId = req.query.userId;
        const todos = await todosDB.getTodosByUserID(userId);
        res.send(todos);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.put('/todos', async (req, res) => {
    try{
        const todos = req.body;
        for(let i = 0; i < todos.length; i++){
            await todosDB.updateTodo(todos[i]);
        }
        res.send(todos);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/todos', async (req, res) => {
    try{
        const content = req.body;
        const id = await todosDB.addTodo(content.title);
        res.send({...content, id:id});
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.delete('/todos/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const todo = await todosDB.getTodoById(id);
        todo.deletd = true;
        await todosDB.updateTodo(todo)
        res.send(todo);
    }
    catch (error) {
        res.status(400).send({error: error.message})
    }
})

module.exports = router;
