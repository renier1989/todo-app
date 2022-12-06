import React from "react";

function CreateTodoButton() {
  return (
    <div className="flex justify-end"
      onClick={()=>console.log('hola')}
    >
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-plus-circle-fill w-16 h-16 cursor-pointer "
          viewBox="0 0 16 16"
        >
          <path
            className="fill-current text-cyan-500 hover:text-cyan-600 text-center"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
          />
        </svg>
    </div>
  );
}

export { CreateTodoButton };
