import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1 className='text-5xl font-bold'>Todo-App With Redux Toolkit</h1>
    <AddTodo/>
    <TodosList/>
    </div>
  )
}

export default App
