import React, { useState } from 'react';
import './App.css';
import Input from './Input'
import {Task} from "./Task"
import Tasks from './Tasks'

const App: React.FC = () => {

  const [task,setTask] = useState<string>("")

  const [taskList, setTaskList] = useState<Task[]>([])
  
  const add = (event: React.FormEvent) => {
    event.preventDefault();
    if (task) {
      setTaskList([...taskList,{id:Date.now(), tasked:task, done:false}]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <span className='Name'>Task Maker</span>  
      <Input task={task} setTask={setTask} handleAdd={add} />
      <Tasks tasks={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
