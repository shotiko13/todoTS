import React from 'react';
import './App.css';
import Input from './Input'

const App: React.FC = () => {
  return (
    <div className="App">
      <span className='Name'>Task Maker</span>  
      <Input />
    </div>
  );
}

export default App;
