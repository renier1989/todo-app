import React from 'react';
import { TodoContext } from './TodoContext';

function TodoCounter() {

    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <div className=' w-full h-1/3  bg-primary my-5 rounded-md p-5 text-center text-secondary dark:bg-gray-500'>
                <h2 className='font-extrabold text-3xl '> TODO APP</h2>
                <h2 className='font-semibold '> Has completado {completedTodos} de {totalTodos} Tareas</h2>
            </div>
        </React.Fragment>
    );
}

export {TodoCounter};