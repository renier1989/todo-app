import React from  'react';

function TodoList(props) {
    return (
        <section className="bg-primary-light rounded-md p-5 my-8">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
export {TodoList}