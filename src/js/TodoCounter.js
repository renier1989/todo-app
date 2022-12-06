import React from 'react';

function TodoCounter({total, completed}) {
    return (
        <React.Fragment>
            <div className=' w-full h-1/3  bg-indigo-300 my-5 rounded-md p-5 text-center'>
                <h2 className='font-extrabold text-3xl text-gray-800'> TODO MACHINE</h2>
                <h2 className='font-semibold text-gray-600'> Has completado {completed} de {total} Tareas</h2>
            </div>
        </React.Fragment>
    );
}

export {TodoCounter};