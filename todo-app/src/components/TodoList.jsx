import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBin5Fill} from 'react-icons/ri'

function TodoList({items, updateItem, removeItem}) {
    const [edit, setEdit] = useState({
        id:null,
        value:""
    })

    const submitUpdate= (value) =>{
        updateItem(edit.id, value);
        setEdit({
            id:null,
            value:""
        });
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div>
            {items.map((item,index) => (
                <>
                <div key={index}>
                    <div key={item.id}> {item.text} </div>
                </div>
                <div>
                    <GrEdit onClick={() => setEdit({id: item.id, value: item.text})} />
                    <RiDeleteBin5Fill onClick={() => removeItem(item.id)} />
                </div>
                </>
            ))}
        </div>
    )
}

export default TodoList;