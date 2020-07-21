import React from 'react'
import Todo from './Todo'
const ToDoList = (props) => {
    // let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
    // }[, thisArg])
    const todos = props.tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} />
    })

    return (
        <div className='list-wrapper'>
            {todos}
        </div>
    );
}

export default ToDoList