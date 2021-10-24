import { createContext, useState, useContext, FC } from 'react'
import { IContext, ITodos } from './types'

const TodosContext = createContext<IContext | null>(null)

const TodosProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodos[]>([])

  const createTodo = (todo: ITodos) => {
    setTodos((prevTodos) => [...prevTodos, todo])
  }

  const removeTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  const checkCompleted = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const values = {
    todos,
    createTodo,
    removeTodo,
    checkCompleted,
    setTodos,
  }

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  )
}

export const useTodos = () => useContext(TodosContext)

export default TodosProvider
