import React, { useReducer } from 'react'
import { todoReducer, initialState } from 'reducers/todoReducer'

import TodoItem from 'components/TodoItem'
import TodoButtons from 'components/TodoButtons'

export default function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <div>
            {state &&
                state.map((item) => {
                    return <TodoItem key={item.id} item={item} onClick={() => { dispatch({ type: "MARK_COMPLETE", payload: item.id }) }} />
                })
            }
            <TodoButtons dispatch={dispatch}/>

        </div>
    )
}