import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  const toggelCompelete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggelCompelete}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
              <div className="w-full max-w-sm mx-auto"></div>
          </div>
        </div>
    </TodoProvider>
  )
}

export default App