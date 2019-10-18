export const initialState = [{
    item: "This is my first todo task",
    completed: false,
    id: 1571438423
}]

export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {...state};
        case "REMOVE_TODO":
            return {...state};
        case "MARK_COMPLETE":
            return {...state};
    }
}