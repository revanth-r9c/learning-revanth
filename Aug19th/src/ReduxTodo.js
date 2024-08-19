// // import { useDispatch, useSelector } from "react-redux"
// // import { Link, Outlet } from 'react-router-dom';
// // import { addAction, deleteTodo, deleteAllTodos,updateTodo } from "./actions/todoactions";

// // const ReduxTodo = () => {
// //     const dispatch = useDispatch();
// //     const todos = useSelector((state) => {
// //         console.log(state);
// //         return state.todos.todos;
// //     });
// //     const addTodo = (e) => {
// //         e.preventDefault();
// //         const todo = {name:e.target.name.value , status: e.target.status.value}
// //         dispatch(addAction(todo));
// //     };
// //     return (
// //         <div className="outer">
            

// //             <form onSubmit={addTodo}>
// //                 <input type="text" name="name" />
// //                 <select name="status">
// //                     <option value="complete">Completed</option>
// //                     <option value="incomplete">Incompleted</option>
// //                 </select>
// //                 <button>Add Todo</button><br/>
// //             </form>
// //             {todos.map((val,index) => {
// //                 return(
// //                     <div>
// //                         <br/>
// //                         <h3> Name:{val.name}</h3>
// //                         <h3> Status:{val.status}</h3>
// //                         <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
// //                         <Link to={`edit/${index}/${name}/${status}`}>UpdateTodo</Link>
// //                     </div>
// //                 );
// //             })}
// //             <Outlet/><br/>
// //             <button onClick={() => dispatch(deleteAllTodos())}>Delete All</button>

// //         </div>
// //     )
// // }
// // export default ReduxTodo;

// import { useDispatch, useSelector } from "react-redux";
// import { Link, Outlet } from 'react-router-dom';
// import { addAction, deleteTodo, deleteAllTodos, asyncAddAction, updateTodo, loadData } from "./actions/todoactions";
// import { useEffect } from "react";

// const ReduxTodo = () => {
//     const dispatch = useDispatch();
//     const todos = useSelector((state) => state.todos.todos);

    

//     useEffect(() => {
//         dispatch(loadData());
//         console.log('State after dispatching loadData:', todos); 
//     }, [dispatch]);

//     const addTodo = (e) => {
//         e.preventDefault();
//         const todo = { name: e.target.name.value, status: e.target.status.value };
//         dispatch(asyncAddAction(todo));
//     };

//     return (
//         <div className="outer" style={{textAlign:'center'}}>
//             <h1 style={{textAlign:'center'}}>Todo List Manager</h1>
//             <form onSubmit={addTodo}>
//                 <input type="text" name="name" />
//                 <select name="status">
//                     <option value="complete">Completed</option>
//                     <option value="incomplete">Incompleted</option>
//                 </select>
//                 <button>Add Todo</button><br/>
//             </form>
//             {todos.map((todo, index) => (
//                 <div key={index} style={{textAlign:'center'}}>
//                     <br/>
//                     <h3>Name: {todo.name}</h3>
//                     <h3>Status: {todo.status}</h3>
//                     <button id="red" onClick={() => dispatch(deleteTodo(index))}>Delete</button>
//                     <Link id="update" to={`edit/${index}/${todo.name}/${todo.status}`}>UpdateTodo</Link>
//                 </div>
//             ))}
//             <Outlet/><br/><br/>
//             <button id="red" onClick={() => dispatch(deleteAllTodos())}>Delete All</button>
//         </div>
//     );
// };

// export default ReduxTodo;

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import { addAction, deleteTodo, deleteAllTodos, asyncAddAction, updateTodo, loadData } from "./actions/todoactions";
import { useEffect } from 'react';

const ReduxTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    useEffect(() => {
        dispatch(loadData());
    }, []);

    const addTodo = (e) => {
        e.preventDefault();
        const todo = { name: e.target.name.value, status: e.target.status.value };
        dispatch(asyncAddAction(todo));
    };

    return (
        <div className="outer" style={{textAlign:'center'}}>
            <h1 style={{textAlign:'center'}}>Todo List Manager</h1>
            <form onSubmit={addTodo}>
                <input type="text" name="name" />
                <select name="status">
                    <option value="complete">Completed</option>
                    <option value="incomplete">Incompleted</option>
                </select>
                <button>Add Todo</button><br/>
            </form>
            {todos.map((todo, index) => (
                <div key={index} style={{textAlign:'center'}}>
                    <br/>
                    <h3>Name: {todo.name}</h3>
                    <h3>Status: {todo.status}</h3>
                    <button id="red" onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                    <Link id="update" to={`/edit/${index}/${todo.name}/${todo.status}`}>UpdateTodo</Link>
                </div>
            ))}
            <Outlet/><br/><br/>
            <button id="red" onClick={() => dispatch(deleteAllTodos())}>Delete All</button>
        </div>
    );
};

export default ReduxTodo;

