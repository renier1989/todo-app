import React from "react";

function CreateTodoButton(props) {
  const buttonClick = ()=>{
      props.setOpenModal(prevState => !prevState)
  };

  return (
    <div className="hidden lg:flex justify-end " 
        
    >
        <svg
        onClick={buttonClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-plus-circle-fill w-16 h-16 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            className="fill-current text-primary hover:text-primary-dark text-center dark:text-gray-500 dark:hover:text-gray-600"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
          />
        </svg>
    </div>
  );
}

export { CreateTodoButton };
