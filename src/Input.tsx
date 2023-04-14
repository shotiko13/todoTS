import React from 'react'
import './styles.css'

const Input = () => {
  return (
    <form className='input'>
        <input type="input" placeholder='Task goes here...' className='input--box' />
        <button type='submit' className='input--add'>ADD</button>
    </form>
  )
}

export default Input
