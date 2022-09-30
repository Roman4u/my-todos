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

export const addTodo = async ( formData: ITodo ): Promise<AxiosResponse<ApiDataType> | void> => {
    try{
        const todo: Omit<ITodo, "_id"> = {
            name: formData.name,
            description: formData.description,
            status: false
        };

        const addedTodo: AxiosResponse<ApiDataType> = await axios.post(`${baseUrl}/todos/add`, todo);
        return addedTodo; 
        
    }catch(error){
        console.error(error);
    }
}
export const updateTodo = async (): Promise<AxiosResponse | void> => {}
export const deleteTodo = async (): Promise<AxiosResponse | void> => {}