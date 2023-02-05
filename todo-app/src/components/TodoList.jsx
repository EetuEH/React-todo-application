import React from 'react';
import TodoForm from './TodoForm';

function TodoList({items}) {
    return (
        <div>
            {items.map((item,index) => (
                <div key={index}>
                    <div key={item.id}> {item.text} </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList;