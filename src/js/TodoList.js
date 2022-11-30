import React from  'react';

function TodoList(props) {
    return (
        <section className="bg-indigo-300 rounded-md p-5 my-8">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
export {TodoList}