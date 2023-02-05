import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
    const[items, setItems]= useState([]);

    const addItem= (i) => {
        const newItems=[i,...items];
        setItems(newItems);
    }

    const updateItem=(itemId, value) =>{
        setItems((prev) => prev.map((todo) => (todo.id===itemId?value:todo)));
    }

    const removeItem= (itemId) =>{
        const Arr=[...items].filter((item) => item.id !== itemId);
        setItems(Arr);
    }

    return(
        <div>
            <h1 className='header'>To-do lista</h1>
            <TodoForm onSubmit={addItem}/>
            <TodoList items={items} updateItem={updateItem} removeItem={removeItem}/>
        </div>
    )
}

export default Todo;