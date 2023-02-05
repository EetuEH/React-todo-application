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

    const completeItem= (itemId) =>{
        let updatedItems=items.map((item) => {
            if(item.id === itemId){
                item.isCompleted= !item.isCompleted;
            }
        return item;
        });
        setItems(updatedItems);
    }

    return(
        <div>
            <h1 className='header'>To-do lista</h1>
            <TodoForm onSubmit={addItem}/>
            <TodoList items={items} updateItem={updateItem} removeItem={removeItem} completeItem={completeItem} />
        </div>
    )
}

export default Todo;