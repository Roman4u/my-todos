import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos =
  async (): Promise<AxiosResponse<ApiDataType> | any> => {
    try {
      const todos: AxiosResponse<ApiDataType> = await axios.get(
        `${baseUrl}/todos/get`
      );
      return todos;
    } catch (error) {
      console.error(error);
    }
  };

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType> | any> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };

    const addedTodo: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/todos/add`,
      todo
    );
    return addedTodo;
  } catch (error) {
    console.error(error);
  }
};
export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse | any> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };

    const updatedTodo: AxiosResponse = await axios.patch(
      `${baseUrl}/todos/update/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse | any> => {
  try {
    const deletedTodo: AxiosResponse = await axios.delete(
      `${baseUrl}/todos/delete/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    console.error(error);
  }
};
