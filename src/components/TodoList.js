import React, { useReducer,useEffect } from 'react'
import TodoListReducer from '../reducers/reducer'
import useForm from './useForm'

function TodoList() {

    const todos = [{ id: 1, description: 'A Todo', done: false }]

    const init= () =>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todosState, dispatch] = useReducer(TodoListReducer, todos,init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todosState))
    }, [todosState])
    const [formState, handleInputChange] = useForm({
        newTodo: ''
    })

    
    const { newTodo } = formState;

    const addTodo = () => {
        dispatch(
            {
                type: 'addTodo',
                payload: newTodo,
            }
        )


    }

    const deleteTodo = (todo) => {
        dispatch(
            {
                type:'deleteTodo',
                payload:todo
            }
        )
    }

    const handleDone = (todo) =>{
        dispatch(
            {
                type:'handleDone',
                payload:todo
            }
        )
    }

    return (
        <>
            <div className='col-md-5'>
                <h1>TODOS</h1>
                <hr />
                <ul className='list-group'>
                    {
                        todosState ? (

                            todosState.map((todo, index) =>
                                <li
                                    className={`list-group-item mb-2 mt-2 p-3 ${todo.done && 'bg-success text-white'}`} 
                                    key={todo.id}
                                    onClick={()=>{
                                        handleDone(todo)
                                    }}
                                >
                                    
                                    <div className='row' >
                                        <div className='col-md-9 p-2 ml-3-5'>
                                            {index + 1}
                                        -
                                        {todo.description}
                                        </div>
                                        <div className='col-md-3'>
                                            <button className='btn btn-danger float-right' onClick={()=>{
                                                deleteTodo(todo)
                                            }}>Delete</button>

                                        </div>

                                    </div>
                                </li>)

                        )
                            : <li className='list-group-item mb-2' >No hay Todos en tu lista</li>
                    }

                </ul>

            </div>
            <div className='col-md-7'>
                <h2>New todo</h2>
                <form>
                    <input
                        type='text'
                        className='form-control mt-2 mb-2'
                        name='newTodo'
                        value={newTodo}
                        onChange={handleInputChange}
                    />
                    <button className='form-control btn btn-outline-primary ' type='button' onClick={addTodo}> Add </button>
                </form>
            </div>

        </>
    )
}

export default TodoList
