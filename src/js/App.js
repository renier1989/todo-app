import React from "react";

import { AppUX } from "./AppUX";

// const defaultTodos = [
//   { id: "1", text: "hacer arepas", completed: 1 },
//   { id: "2", text: "hacer Almuerzo", completed: 0 },
//   { id: "3", text: "hacer desayuno", completed: 0 },
//   { id: "4", text: "hacer CENA", completed: 0 },
// ];

// React Hook Personalizado

function useLocalStorage(itemName , initialValue) {

  const [error, setError] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);
  React.useEffect(()=>{
    try {
      // simulamos que se esta cargando la data de la BD
      setTimeout(()=>{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }, 1000)
    } catch (error) {
      setError(error)
    }
    
  });
  

  const saveItem = (newItem) => {
    try {
      const jsonItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, jsonItem);
      setItem(newItem);
    } catch (error) {
      setError(error)
    }
    
  };

  return {
    item ,
    saveItem ,
    loading,
    error,
  };
}

function App() {

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
  
  return (
    <AppUX
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedjTodos={completedjTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosFiltered={todosFiltered}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
