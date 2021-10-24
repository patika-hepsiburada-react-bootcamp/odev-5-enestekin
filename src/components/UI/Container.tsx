import React from 'react'
import './Container.css'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

const Container: React.FC<IProps> = ({ children }) => {
  return <div className='container'>{children}</div>
}

export default Container
