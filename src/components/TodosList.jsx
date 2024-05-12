import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo , updateTodo , updateStatus } from '../Features/TodoFeature';
import { MdAutoDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSave } from "react-icons/fa";

const TodosList = () => {
    const todos = useSelector(state => state.todos); // Accessing todos from the Redux store
    const dispatch = useDispatch();
    const [textID, setTextID] = useState(null)
    const [edittext, setEditText] = useState('')
    const handleText = (id, text) => {
        setTextID(id)
        setEditText(text)
        // console.log(textID , "#####" , edittext);
    }

    const update_todo=(id , text)=>{
        dispatch(updateTodo({id:id, text:text}))
        setEditText('')
        setTextID(null)
    }
    return (
        <div className="mt-8">
            {todos.map(todo => (
                <div key={todo.id} className={`flex items-center justify-between ${todo.completed?'bg-purple-500 text-black ' : 'bg-gray-300 text-black'
            } shadow-md rounded-md px-4 py-3 mb-4`}>
                   <div className='flex space-x-2'>
                   <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={()=>dispatch(updateStatus({id:todo.id , completed:todo.completed}))}
                    />
                    {
                        todo.id !== textID ? (
                            <p className={`${todo.completed? 'line-through' : 'text-gray-800'} text-lg`}>{todo.text}</p>
                        )
                            :
                            (
                                <input
                                    className='px-2 rounded-md '
                                    value={edittext}
                                    onChange={(e) => setEditText(e.target.value)} />
                            )
                    }
                   </div>
                    <div className='space-x-4'>
                        {
                            todo.id === textID ?
                                (

                                    <button onClick={()=>update_todo(textID , edittext)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md focus:outline-none">
                                        <FaSave />
                                    </button>
                                )
                                :
                                (
                                    <button onClick={() => handleText(todo.id, todo.text)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md focus:outline-none">
                                    <CiEdit />
                                </button>
                                )
                        }
                        <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md focus:outline-none">
                            <MdAutoDelete />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodosList