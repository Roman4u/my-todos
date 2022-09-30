interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo: ITodo
}