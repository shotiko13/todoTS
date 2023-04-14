import React from 'react'
import { Task } from './Task';
import './styles.css';

interface Properties {
    tasks: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}

const Tasks = ({tasks, setTaskList}: Properties) => {
  
  return (
    <div className='tasks'>
        {tasks.map((t) => (
            <li>{t.tasked}</li>
        ))}      
    </div>
  )
}

export default Tasks
