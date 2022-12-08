import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Header } from "./Header";
import { TodoContext } from "./TodoContext";

function AppUX() {
return (
    <React.Fragment>
    <Header />
    <TodoCounter  />
    <TodoSearch  />

    <TodoContext.Consumer>
        {({ error,
            loading, 
            todosFiltered,
            completeTodo,
            deleteTodo,
        })=>(
            <TodoList>
                {error && <p>Hubo un error en la aplicacion....</p>}
                {loading && <p>Cargando la informacion de la BD....</p>}
                {(!loading && !todosFiltered.length) && <p>Crea tu Primera Actividad....</p>}

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
        )}
    </TodoContext.Consumer>


    <CreateTodoButton>+</CreateTodoButton>
    </React.Fragment>
);
}

export { AppUX };
