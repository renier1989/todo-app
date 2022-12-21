import React from  'react';

function TodoList(props) {
    return (
        <section className="bg-primary-light rounded-md p-5 my-8 dark:bg-gray-500">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
export {TodoList}