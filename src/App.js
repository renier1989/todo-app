import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
// import './App.css';


const todos = [
  { id:'1',text:'hacer arepas' , completed:false},
  { id:'2',text:'hacer Almuerzo' , completed:false},
  { id:'3',text:'hacer desayuno' , completed:false},
  { id:'4',text:'hacer desayuno' , completed:false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.id} text={todo.text}/>
        ))}
      </TodoList> 

      <CreateTodoButton>+</CreateTodoButton>


    </React.Fragment>
  );
}

export default App;
