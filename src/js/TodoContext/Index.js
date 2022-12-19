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
    const [openModal, setOpenModal ] = React.useState(false);
    // const [changeDarkMode, setChangeDarkMode ] = React.useState(false);
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
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
  
    const addTodo = (text) => {
      
      const newTodos = [...todos];
      newTodos.push({
        id : Math.floor(Math.random() * 999999),
        completed : false,
        text : text
      })
      // setTodos(newTodos);
      saveTodos(newTodos);
    };

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

    const changeDarkMode = () => {
      const htmlElement = document.querySelector("html");
      const toggleButton = document.querySelector("#toggle");
      const toggleButtonSm = document.querySelector("#toggle-sm");

      console.log(toggleButtonSm);

      toggleButton.addEventListener("click" , () => toggleDarkMode())
      toggleButtonSm.addEventListener("click" , () => toggleDarkMode())

      const toggleDarkMode = () => {
          htmlElement.classList.toggle("dark")
      }
    }

    return(
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        todosFiltered,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
        changeDarkMode,
    }}>
        {props.children}
    </TodoContext.Provider>
    );
}

export {TodoContext , TodoProvider}
