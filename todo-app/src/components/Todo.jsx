import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
    const[items, setItems]= useState([]);

    const addItem= (i) => {
        const newItems=[i,...items];
        setItems(newItems);
    }

    return(
        <div>
            <h1 className='header'>To-do lista</h1>
            <TodoForm onSubmit={addItem}/>
            <TodoList items={items}/>
        </div>
    )
}

export default Todo;