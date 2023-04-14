import React, { useRef } from 'react'
import './styles.css'
import Tasks from './Tasks';

interface Properties {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const Input: React.FC<Properties> = ( {task, setTask, handleAdd }:Properties ) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const iRef = useRef<HTMLInputElement>(null); 
  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e);
      iRef.current?.blur();
    }
    }>
        <input 
        ref={iRef}
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
