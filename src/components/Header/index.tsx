import React from 'react'
import './Header.css'
import Container from '../UI/Container'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <h1 className='header__title'>To-do App</h1>
        <h2 className='header__subtitle'>What do you need to do?</h2>
      </Container>
    </div>
  )
}

export default Header
