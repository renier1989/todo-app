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
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const jsonItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, jsonItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}

function App() {

  const [todos ,saveTodos ] = useLocalStorage('TODOS_V1',[]);

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
  console.log('RENDER antes de Use Effect');
  
  // se ejecuta cuando se cumple cierta condicion o ve amcbios en alguna seccion que le digamos por ejemplo la cambio en el total de todos 
  React.useEffect(()=>{
    console.log('Codigo de Use Effect');
  },[totalTodos]);
  
  console.log('RENDER Despues de Use Effect');
  return (
    <AppUX
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
