import React from "react";

import  {AppUX} from "./AppUX"

// const defaultTodos = [
//   { id: "1", text: "hacer arepas", completed: 1 },
//   { id: "2", text: "hacer Almuerzo", completed: 0 },
//   { id: "3", text: "hacer desayuno", completed: 0 },
//   { id: "4", text: "hacer CENA", completed: 0 },
// ];

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedjTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let todosFiltered = [];

  if(!searchValue.length >=1){
    todosFiltered = todos;
  }else{
    todosFiltered = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const todoSearch = searchValue.toLowerCase();

      return todoText.includes(todoSearch);
    });
  }

  const saveTodos = (newTodos) =>{
    const jsonTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', jsonTodos);
    setTodos(newTodos)
  }

  const completeTodo = (id) =>{
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // setTodos(newTodos);
    saveTodos(newTodos);
  }
  
  const deleteTodo = (id) =>{
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    // setTodos(newTodos);
  }

  return (
    <AppUX 
      totalTodos = {totalTodos}
      completedjTodos = {completedjTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      todosFiltered = {todosFiltered}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
