import React from 'react'
import './styles.css'

interface Properties {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const Input: React.FC<Properties> = ( {task, setTask, handleAdd }:Properties ) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  return (
    <form className='input' onSubmit={handleAdd}>
        <input 
        type="input"
        placeholder='Task goes here...'
        className='input--box'
        value={task}
        onChange={handleChange}
        />
        <button type='submit' className='input--add'>ADD</button>
    </form>
  )
}

export default Input
