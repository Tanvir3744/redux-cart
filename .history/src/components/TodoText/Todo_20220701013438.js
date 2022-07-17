import React from 'react';

const Todo = () => {
    const inputData = (event) => {
        const text = event.target.task.value;
        console.log(text)
    }
    return (
        <div >
            <div className='bg-dark'>
                <input name='task' type="text" placeholder="Type here" class="input w-full max-w-xs" />
                <button onChange={inputData} className="btn btn-primary">enter task</button>
            </div>
        </div>
    );
};

export default Todo;