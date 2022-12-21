import React from "react";
import ReactDOM from 'react-dom';

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="modal fade fixed inset-0 grid h-full w-full place-items-center overflow-y-auto bg-gray-900 bg-opacity-60">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};