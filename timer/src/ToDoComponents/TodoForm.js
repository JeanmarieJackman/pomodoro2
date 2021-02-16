import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                name='todo'
                type='text'
                placeholder='Enter a task' />
            <button>Add a Task</button>
            <button>Remove Completed</button>
        </form>
    )
}

export default TodoForm;