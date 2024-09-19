import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Shree",
    age: 22
  }

  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-500 text-black p-8 rounded-xl' >Chai aur React</h1>
    <Card username="Chai aur Code"/>
    <Card username="React"/>
    </>
  )
}

export default App
