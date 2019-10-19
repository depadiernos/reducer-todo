import React , {useState} from 'react'
import NewItem from './NewItem'

export default function TodoButtons({dispatch}) {
    const [isAddingItem, setIsAddingItem] = useState(false)
    return (
        <div>
            {isAddingItem && <NewItem dispatch={dispatch} setIsAddingItem={setIsAddingItem}/>}
            <button onClick={()=> setIsAddingItem(!isAddingItem)}>Add Item</button>
            <button onClick={() => { dispatch({ type: "REMOVE_COMPLETE" }) }}>Remove Completed Items</button>
        </div>
    )
}