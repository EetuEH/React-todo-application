import React, { useRef, useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState();
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
        <form>
            <>
            <input placeholder='Lisättävä tehtävä' value={input} onChange={inputHandler} name="text" ref={inputRef}/>
            <button onClick={submitHandler}>+</button>
            </>
        </form>
    )
}

export default TodoForm