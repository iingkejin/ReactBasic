/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import State from './component/State'
import {useState} from 'react'

function App() {
  let num = 0;
  const [count, setCount] = useState(0)
  let increase = () => {
    num = num + 1;
    setCount(count + 1)
    console.log("num", num, "state", count)
  }

  return (
    <div className='App'>
      {/* <State/> */}
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
}

export default App;