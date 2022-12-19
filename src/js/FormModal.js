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
            <div className=" rounded-md bg-secondary py-6 lg:p-6 text-center text-primary">
                <div className='mb-4  text-2xl font-semibold '>Titulo del modal</div>
                <div>
                    <textarea 
                    className='border-1 rounded-md border-gray-600 w-5/6 lg:w-full lg:p-1 outline outline-1 focus:outline-primary-dark shadow-xl font-semibold'
                    value={newTodoValue}
                    onChange={onChange}
                    rows="4" 
                    cols="50"
                    placeholder='Ir al supermercado por pan.' 
                    ></textarea>
                </div>
                <div className='text-center space-x-20 mt-3 font-semibold'>
                    <button
                    className='bg-red-600 rounded-sm py-1 px-7 text-secondary  outline outline-1 outline-red-600 hover:bg-red-800'
                        type="button"
                        onClick={onCancel}
                    > Cancelar </button>
                    <button 
                    className='bg-white rounded-sm py-1 px-7 text-primary  outline outline-1 outline-primary-light hover:bg-secondary-dark'
                        type="submit"
                    > Agregar </button>
                </div>
            </div>
        </form>
    );
}

export { FormModal }