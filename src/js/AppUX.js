import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Header } from "./Header";

function AppUX({
totalTodos,
completedjTodos,
searchValue,
setSearchValue,
todosFiltered,
completeTodo,
deleteTodo,
}) {
return (
    <React.Fragment>
    <Header />
    <TodoCounter total={totalTodos} completed={completedjTodos} />
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    <TodoList>
        {todosFiltered.map((todo) => (
        <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
        />
        ))}
    </TodoList>

    <CreateTodoButton>+</CreateTodoButton>
    </React.Fragment>
);
}

export { AppUX };
