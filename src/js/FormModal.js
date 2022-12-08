import React from 'react';
import { TodoContext } from './TodoContext';

function FormModal (){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="rounded-md bg-gray-50 p-6 text-center">
                <div className='mb-4  text-2xl font-semibold text-gray-600'>Titulo del modal</div>
                <div>
                    <textarea 
                    className='border-1 rounded-md border-gray-600 p-1 outline outline-1 focus:outline-indigo-500 shadow-xl'
                    value={newTodoValue}
                    onChange={onChange}
                    rows="4" 
                    cols="50" 
                    ></textarea>
                </div>
                <div className='text-center space-x-20 mt-3'>
                    <button
                    className='bg-red-500 rounded-sm py-1 px-7 text-white font-medium outline outline-1 outline-red-700 hover:bg-red-800'
                        type="button"
                        onClick={onCancel}
                    > Cancelar </button>
                    <button 
                    className='bg-indigo-400 rounded-sm py-1 px-7 text-white font-medium outline outline-1 outline-indigo-700 hover:bg-indigo-800'
                        type="submit"
                    > Agregar </button>
                </div>
            </div>
        </form>
    );
}

export { FormModal }