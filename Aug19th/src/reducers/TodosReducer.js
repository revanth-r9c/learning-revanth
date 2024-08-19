const initialState = {
    todos: [
        {name:"read book", status:"complete"},
        {name:"go to gym", status:"incomplete"}
    ],
};

// const initialState = {
//     todos: []
//   };

// function TodoReducer(state = initialState, action) {
//     if (action.type === "ADD") {
//         let newTodos = [...state.todos, action.todo];
//         let newState = { ...state, todos: newTodos };
//         return newState;
//     }

//     if (action.type === "DELETE") {
//         let newTodos = state.todos.filter((_, index) => index !== action.index);
//         let newState = { ...state, todos: newTodos };
//         return newState;
//     }

//     if (action.type === "DELETE_ALL") {
//         let newState = { ...state, todos: [] };
//         return newState;
//     }

//     // if (action.type === "UPDATE") {
//     //     let newTodos = state.todos.map((todo, index) =>
//     //         index === action.index ? action.updatedTodo : todo
//     //     );
//     //     let newState = { ...state, todos: newTodos };
//     //     return newState;
//     // }
//     if (action.type === "UPDATE") {
//         let newTodos = state.todos.map((todo, index) =>
//             index === action.index ? action.updatedTodo : todo
//         );
//         return { ...state, todos: newTodos };
//     }
    

//     return state;
// }
// export default TodoReducer;



function TodoReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD":
            return { ...state, todos: [...state.todos, action.todo] };

        case "DELETE":
            return { ...state, todos: state.todos.filter((val, index) => index !== action.index) };

        case "DELETE_ALL":
            return { ...state, todos: [] };

        case "UPDATE":
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.index ? action.updatedTodo : todo
                ),
            };
        
        case "LOAD_TODOS":
            return {
                ...state, todos: action.todos
            };

        default:
            return state;
    }
}

export default TodoReducer;
