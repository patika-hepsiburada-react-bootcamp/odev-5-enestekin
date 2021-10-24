import React, { useState } from 'react'
import Container from '../UI/Container'
import './AddTodo.css'
import { useTodos } from '../../context/TodosContext'
const { v4: uuidv4 } = require('uuid')

const Todos = () => {
  const { createTodo, todos } = useTodos()!
  const [description, setDescription] = useState<string>('')

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(),
      description,
      isCompleted: false,
    }
    createTodo(newTodo)
    setDescription('')
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='input'
          placeholder='Something to do'
          name='text'
          value={description}
          onChange={changeHandler}
        />
        <button className='button'>Add Todo</button>
      </form>
    </Container>
  )
}

export default Todos
