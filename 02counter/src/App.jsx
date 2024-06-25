import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {

    if (counter < 20) {
      counter = counter + 1
      setCounter(counter);
    }

    else {
      alert('You have reached the limit!')
      setCounter(20);
    }
  }

  const subtractValue = () => {

    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
    else {
      alert('You have reached the limit!')
      setCounter(0);
    }
  }
  // let counter = 15;
  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br /><br />
      <button onClick={subtractValue}>Subract</button>
    </>
  )
}

export default App
