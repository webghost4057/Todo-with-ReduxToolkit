import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/TodoFeature'
const AddTodo = () => {
    const [text , setText]  = useState('')
    const dispatch  = useDispatch()

    const handleSubmitt= (e)=>{
        e.preventDefault()
        if(text === '' || text === undefined)
        {
            alert("Please add To Do")
        }
        else{
            dispatch(addTodo(text))
            setText('')

        }
    }
  return (
    <form onSubmit={handleSubmitt} className="max-w-sm mx-auto mt-8 flex">
    <input
      type="text"
      placeholder="Enter something..."
      value={text}
      onChange={(e)=>setText(e.target.value)}
      className="border border-gray-300 rounded-l-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
    />
    <button
      type="submit"
      className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-6 rounded-r-md focus:outline-none focus:shadow-outline"
    >
      Add
    </button>
  </form>
  )
}

export default AddTodo