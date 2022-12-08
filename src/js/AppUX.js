import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Header } from "./Header";
import { FormModal } from "./FormModal";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";


function AppUX() {
    const { error,
            loading, 
            todosFiltered,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            } = React.useContext(TodoContext);
return (
    <React.Fragment>
    <Header />
    <TodoCounter  />
    <TodoSearch  />

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

    {!!openModal && (
        <Modal>
            <FormModal />
        </Modal>
    )}


    <CreateTodoButton
    setOpenModal = {setOpenModal}
    >+</CreateTodoButton>
    </React.Fragment>
);
}

export { AppUX };
