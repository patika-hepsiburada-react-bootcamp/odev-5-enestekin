import React from 'react'
import Container from '../UI/Container'
import './TodoList.css'
import { useTodos } from '../../context/TodosContext'
import TodoItem from '../TodoItem'

const TodoList = () => {
  const { todos } = useTodos()!
  const incompleteTodos = todos.filter((todo) => !todo.isCompleted).length

  const emptyTodo = <p className='empty-message'>There are no todos to show</p>

  return (
    <Container>
      <>
        <h1 className='list-title'>You have {incompleteTodos} todos left</h1>
        {todos.length === 0 && emptyTodo}
        {todos.length > 0 &&
          todos.map((todo) => {
            const { id, description, isCompleted } = todo

            return (
              <TodoItem
                id={id}
                description={description}
                isCompleted={isCompleted}
                key={id}
              />
            )
          })}
      </>
    </Container>
  )
}

export default TodoList
