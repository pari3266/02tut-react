
import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setbgColor] = useState('');
  const handleColor = (e) => {
    setbgColor(e.target.value)
  }
  return (
    <div>
      <div className='s' style={{backgroundColor: bgColor}}>

      </div>
      <input placeholder='Add color name' onChange={(e) => handleColor(e)}/>
    </div>
  );
}

export default App;
