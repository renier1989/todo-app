import React from "react";

function TodoItem(props) {
  // console.log(props);

  // const onComplete = () => {
  //   console.log(`Completaste la Tarea ${props.text}`);
  // };
  
  // const onDelete = () => {
  //   console.log(`Borraste la Tarea ${props.text}`);
  // };


  return (
    <div className="w-full text-secondary">
      <li className="flex my-3 bg-primary p-5 rounded-lg justify-center relative">
        <span className="absolute left-5" 
        onClick={props.onComplete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-file-check-fill w-6 h-6 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path className={`fill-current  text-secondary hover:text-secondary-dark ${props.completed && 'text-secondary-light hover:text-secondary' }`} 
            d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
          </svg>
        </span>
        <p 
        // eslint-disable-next-line no-template-curly-in-string
        className={`text-lg font-bold pl-10  ${props.completed ? 'line-through' : null }`}
        // className="text-lg font-bold text-gray-700 line-through"
        // style={{ textDecoration: props.completed && "line-through" }}
        
        >{props.text}</p>
        <span className="absolute -top-1 right-2 cursor-pointer"
        onClick={props.onDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-file-minus-fill w-5 h-5"
            viewBox="0 0 16 16"
          >
            <path
              className="fill-current text-primary-dark hover:text-red-700"
              d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"
            />
          </svg>
        </span>
      </li>
    </div>
  );
}

export { TodoItem };
