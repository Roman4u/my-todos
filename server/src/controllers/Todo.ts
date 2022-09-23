import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import Todo, { ITodo } from "../models/Todo";

const createTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status
    });

    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();

    res.status(201).json({ message: "Todo added", todo: newTodo, todos: allTodos })
  } catch (error) {
    console.error("Create Todo error:", error)
  }
};

const getAuthor = (req: Request, res: Response, next: NextFunction) => {};
const getAllAuthors = (req: Request, res: Response, next: NextFunction) => {};
const updateAuthor = (req: Request, res: Response, next: NextFunction) => {};
const deleteAuthor = (req: Request, res: Response, next: NextFunction) => {};
