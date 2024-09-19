import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  
  // let counter = 15

  let addValue = () => {
    if (counter < 20) {
      // counter = counter + 1
      setCounter(counter + 1)
    } else {
      setCounter(counter)
      console.log(`The upper limit for add value ${counter} is reached!`);
    }
  }

  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter)
      console.log(`The lower limit for remove value ${counter} is reached!`);
    }
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    <br />
    <button onClick={addValue}>Add Value {counter} </button>
    <br /> <br />
    <button onClick={removeValue}>Remove Value {counter} </button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
