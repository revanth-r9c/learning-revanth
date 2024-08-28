// var express = require("express");
// var router = express.Router();
// const Todo = require("../models/todo");

// router.post("/", async function(req, res, next) {
//     const todo= new Todo({
//         name: req.body.name,
//         status: req.body.status
//     });

//     try{
//         const newTodo = await todo.save();
//         res.status(201).json(newTodo);
//     }
//     catch(err){
//         res.status(400).json({message: err.message});
//     }
// });

// router.get("/", async function(req, res, next) {
//     try{
//         const todos = await Todo.find();
//         res.json(todos);
//     }
//     catch{
//         res.status(500).json({message: err.message});
//     }
// });

// router.get("/:id", async function(req, res, next) {
//     try{
//         const todo = await Todo.findById(req.params.id);
//         if(todo == null){
//             return res.status(404).json({message: 'Todo not found'});
//         }
//         res.json(todo);
//     }
//     catch(err){
//         res.status(500).json({ message: err.message});
//     }
// });

// router.delete("/:id", async function(req, res, next) {
//     try{
//         const result= await Todo.findByIdAndDelete(req.params.id);
//         if(result == null){
//             return res.status(404).json({message: ' Todo not found'});
//         }
//         res.json({message: 'Todo Deleted Successfully'});
//     }
//     catch(err){
//         res.status(500).json({message: err.message});
//     }
// });

// router.put("/:id", async function(req, res, next) {
//     try{
//         const updatedTodo= await Todo.findByIdAndUpdate(req.params.id, req.body, {new :true});
//         if(updatedTodo==null){
//             return res.status(404).json({message: 'Todo not found'});
//         }
//         res.json(updatedTodo);
//     }
//     catch(err){
//         res.status(400).json({message: err.message});
//     }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Todo = require('../models/todo');

// router.post('/', async (req, res) => {
//     const todo = new Todo({
//         name: req.body.name,
//         status: req.body.status
//     });

//     try {
//         const newTodo = await todo.save();
//         res.status(201).json(newTodo);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// router.get('/', async (req, res) => {
//     try {
//         const todos = await Todo.find();
//         res.json(todos);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         const todo = await Todo.findById(req.params.id);
//         if (!todo) {
//             return res.status(404).json({ message: 'Todo not found' });
//         }
//         res.json(todo);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// router.put("/:id", async function(req, res, next) {
//     try {
//         const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedTodo) {
//             return res.status(404).json({ message: 'Todo not found' });
//         }
//         res.json(updatedTodo);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const result = await Todo.findByIdAndDelete(req.params.id);
//         if (!result) {
//             return res.status(404).json({ message: 'Todo not found' });
//         }
//         res.json({ message: 'Todo deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;

const express = require("express");
const { body, param, validationResult } = require("express-validator");
const router = express.Router();
const {
  PostTodos,
  GetTodos,
  GetTodosById,
  EditTodos,
  DeleteTodos,
} = require("../controllers/todos");

const todoValidationRules = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 1 })
      .withMessage("Name must not be empty"),
    body("status")
      .trim()
      .notEmpty()
      .withMessage("Status is required")
      .isIn(["incomplete", "complete"])
      .withMessage("Status must be either incomplete or complete"),
    body("description")
      .optional()
      .trim()
      .escape()
      .isLength({ max: 1000 })
      .withMessage("Description must be less than 1000 characters"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post("/", todoValidationRules(), validate, PostTodos);

router.get("/", GetTodos);

router.get(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid ID format")],
  validate,
  GetTodosById
);

router.put(
  "/:id",
  [
    param("id").isMongoId().withMessage("Invalid ID format"),
    ...todoValidationRules(),
  ],
  validate,
  EditTodos
);

router.delete(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid ID format")],
  validate,
  DeleteTodos
);

module.exports = router;
