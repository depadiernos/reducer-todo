export const initialState = [
    {
        item: "This is my first todo task",
        completed: false,
        id: 1571438423
    },
    {
        item: "This is my second todo task",
        completed: false,
        id: 1571318423
    }
]

export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "REMOVE_COMPLETE":
            return state.filter((item) => item.completed !== true);
        case "MARK_COMPLETE":
            return state.map((item) => item.id === action.payload ? { ...item, completed: !item.completed } : item);
        default:
            return state;
    }
}