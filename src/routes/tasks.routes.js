const {Router}= require('express');
const {getAllTasks, getTask, createTask, deleteTask, updateTask}=require('../controllers/tasks.controller');
const pool = require('../db'); 
const router = Router();

router.get('/task',getAllTasks)

router.get('/task/:id',getTask)


router.post('/task',createTask)

router.delete('/task/:id',deleteTask)

router.put('/task/:id',updateTask)

module.exports= router;