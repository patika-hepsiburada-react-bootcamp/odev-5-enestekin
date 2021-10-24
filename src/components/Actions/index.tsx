import React, { useState } from 'react'
import './Actions.css'
import { useTodos } from '../../context/TodosContext'
import { ITodos } from '../../context/types'

const Actions = () => {
  const { todos, setTodos } = useTodos()!
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [list, setList] = useState<ITodos[]>(todos)

  const clickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    if (isChecked === false) {
      const incompleteTodos = todos.filter((todo) => !todo.isCompleted)
      setTodos(incompleteTodos)
    } else {
      setTodos([...list])
    }
  }
  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredTodos = todos.filter((todo) =>
      todo.description.includes(e.target.value)
    )
    setTodos(filteredTodos)
  }

  return (
    <div className='actions'>
      <div className='actions__container'>
        <input
          id='search-text'
          className='input'
          type='text'
          placeholder='Filter todos'
          onChange={filterHandler}
        />
        <label className='checkbox'>
          <input type='checkbox' checked={isChecked} onChange={clickHandler} />
          Hide completed
        </label>
      </div>
    </div>
  )
}

export default Actions
