import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = async (): Promise<AxiosResponse<ApiDataType> | void> => {
    try{
        const todos: AxiosResponse<ApiDataType> = await axios.get(`${baseUrl}/todos/get`);
        return todos; 
    }catch(error){
        console.error(error);
    }
};

export const addTodo = async (): Promise<AxiosResponse | void> => {}
export const updateTodo = async (): Promise<AxiosResponse | void> => {}
export const deleteTodo = async (): Promise<AxiosResponse | void> => {}