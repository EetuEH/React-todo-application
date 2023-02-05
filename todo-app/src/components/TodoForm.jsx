import React, { useRef, useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit?props.edit.value:"");
    const inputRef= useRef(null);

    const inputHandler= (i) => {
        setInput(i.target.value);
    }

    const submitHandler= (i) => {
        i.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })
    }

    return (
        <form className="todo_form">
            {props.edit?(
            <>
            <input placeholder='Päivitettävä tehtävä' value={input} onChange={inputHandler} name="text" ref={inputRef} className="input-edit" />
            <button onClick={submitHandler} className="edit-button">Päivitä</button>
            </>):(
            <>
            <input placeholder='Lisättävä tehtävä' value={input} onChange={inputHandler} name="text" ref={inputRef} className="input-add" />
            <button onClick={submitHandler} className="add-button">Lisää</button>
            </>)}
        </form>
    )
}

export default TodoForm