import React, { useState } from 'react'

export default function NewItem(props) {
    const [newItem, setNewItem] = useState({
        item: '',
        completed: false,
        id: ''
    });

    const handleChange = (event) => {
        setNewItem({
            item: event.target.value,
            completed: false,
            id: Math.floor(new Date().getTime() / 1000)
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch({ type: "ADD_TODO", payload: newItem });
        props.setIsAddingItem(false)
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type='text'
                value={newItem.item}
                onChange={(e) => handleChange(e)} />
            <button>Add</button>
        </form>
    )
}