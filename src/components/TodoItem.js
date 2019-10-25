import React from 'react'

export default function TodoItem(props){
    return (
        <div onClick={props.onClick}>
            <h1>{props.item.item}{props.item.completed && <span>done!</span>}</h1>
        </div>
    )
}