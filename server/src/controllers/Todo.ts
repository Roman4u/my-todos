import { NextFunction, Request, Response } from "express";

import Todo, { ITodo } from "../models/Todo";

const createTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
    // make sure at least one of these keys exist on the returning data object
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status
    });

    const newTodo: ITodo = await todo.save();

    // use the mongoose model to make a query to the DB
    const allTodos: ITodo[] = await Todo.find();

    res.status(201).json({ message: "Todo added", todo: newTodo, todos: allTodos })
  } catch (error) {
    console.error("Create Todo error:", error)
  }
};

const getAllTodos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({ allTodos });
  }catch(error){
    console.error(error);
  }
};

const updateTodo = (req: Request, res: Response, next: NextFunction) => {};
const deleteTodo = (req: Request, res: Response, next: NextFunction) => {};
 
export { createTodo, getAllTodos, updateTodo, deleteTodo };
