import React from 'react'
import './TodoItem.css'
import { useTodos } from '../../context/TodosContext'

interface IProps {
  id: string
  key: string
  description: string
  isCompleted: boolean
}

const TodoItem: React.FC<IProps> = (props) => {
  const { checkCompleted, removeTodo } = useTodos()!

  return (
    <label className='list-item'>
      <div className='list-item__container'>
        <input
          type='checkbox'
          onChange={() => checkCompleted(props.id)}
          checked={props.isCompleted}
        />
        <span>{props.description}</span>
      </div>
      <button
        className='button button--text'
        onClick={() => removeTodo(props.id)}
      >
        remove
      </button>
    </label>
  )
}

export default TodoItem
