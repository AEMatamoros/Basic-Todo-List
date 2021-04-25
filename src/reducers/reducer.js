const TodoListReducer = (state,action)=>{
    
    switch (action?.type) {
        case 'addTodo':
            
             return [...state,{id:state.length+1, description:action.payload,done:false}] ;

        break;
        case 'deleteTodo':
            return state.filter(todo => todo.id !== action.payload.id);

        break;
        case 'handleDone':
            console.log(action.payload)
            return state.map(todo=>{
                    if( todo.id===action.payload.id ){
                        console.log('done')
                        return {...todo,done:!todo.done}
                    }else{
                        return todo;
                    }
                })
            

        break;
        default:
            console.log('default')
        
        break;
    }

    return(state)
}

export default TodoListReducer;