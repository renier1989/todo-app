import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item :todos ,
        saveItem : saveTodos, 
        loading,
        error,
      }  = useLocalStorage('TODOS_V1',[]);
  
    const [searchValue, setSearchValue] = React.useState("");
  
    const completedjTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
  
    let todosFiltered = [];
  
    if (!searchValue.length >= 1) {
      todosFiltered = todos;
    } else {
      todosFiltered = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const todoSearch = searchValue.toLowerCase();
  
        return todoText.includes(todoSearch);
      });
    }
  
    const completeTodo = (id) => {
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      // setTodos(newTodos);
      saveTodos(newTodos);
    };
  
    const deleteTodo = (id) => {
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
      // setTodos(newTodos);
    };

    return(
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedjTodos,
        searchValue,
        setSearchValue,
        todosFiltered,
        completeTodo,
        deleteTodo,
    }}>
        {props.children}
    </TodoContext.Provider>
    );
}

export {TodoContext , TodoProvider}
