import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBin5Fill} from 'react-icons/ri'

function TodoList({items, updateItem, removeItem, completeItem}) {
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
                <div key={index} className={item.isComplete ? "item-complete" : "item-container"}>
                    <div key={item.id} onClick={()=> completeItem(item.id)}> {item.text} </div>
                
                    <div className="icons">
                        <GrEdit onClick={() => setEdit({id: item.id, value: item.text})} className="edit-icon" />
                        <RiDeleteBin5Fill onClick={() => removeItem(item.id)} className="delete-icon" />
                    </div>
                </div>
                </>
            ))}
        </div>
    )
}

export default TodoList;