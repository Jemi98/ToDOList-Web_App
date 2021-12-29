import React from 'react';

const ToDoList = (props) => {

    

    return (
    <>
    <div className="todo">
    <i className="fa fa-times" aria-hidden="true" onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    <li>{props.text}</li>
    </div>
    </>
    );    
}

export default ToDoList;