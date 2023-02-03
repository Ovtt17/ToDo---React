import React from "react";
import '../styles/CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    }


    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('aqui se deberia abrir el modal')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};