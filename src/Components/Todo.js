import React from 'react'

const Todo = (props) => {
    return(
        <div className='list-item'>
            {props.content}
            <button class='delete is-pulled-right'></button>
        </div>
    );
}

export default Todo