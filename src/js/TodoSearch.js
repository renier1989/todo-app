import React from 'react';
import { TodoContext } from './TodoContext';

function TodoSearch() {

    const {searchValue , setSearchValue} = React.useContext(TodoContext)

    // const [searchValue , setSearchValue] = React.useState('');

    const  searchValues = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return  (
        <div className='w-full flex justify-center'>
            <input 
            className=' w-full bg-gray-100 rounded-full outline-1 outline- p-4 border-2 border-gray-300 text-center' 
            placeholder="Filtra tus tereas"
            value={searchValue}
            onChange={searchValues}
            />
        </div>
        
    );
}

export {TodoSearch}