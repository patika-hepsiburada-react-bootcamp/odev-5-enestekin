import React from 'react'
import Actions from '../Actions'
import AddTodo from '../AddTodo'
import TodoList from '../TodoList'

const TodoContainer = () => {
  return (
    <>
      <Actions />
      <TodoList />
      <AddTodo />
    </>
  )
}

export default TodoContainer
