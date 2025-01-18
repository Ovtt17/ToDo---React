import React from "react";
import '../styles/TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                    onChange={props.onChange}
                    checked={props.completed}
                />
                <span className="checkmark"></span>
            </label>
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };