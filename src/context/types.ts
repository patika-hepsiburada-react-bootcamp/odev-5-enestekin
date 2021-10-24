export interface ITodos {
  id: string
  description: string
  isCompleted: boolean
}

export interface IContext {
  todos: ITodos[]
  createTodo: (todo: ITodos) => void
  removeTodo: (id: string) => void
  checkCompleted: (id: string) => void
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
}
