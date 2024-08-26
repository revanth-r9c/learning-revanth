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




// import { useDispatch, useSelector } from "react-redux";
// import { Link, Outlet } from 'react-router-dom';
// import { addAction, deleteTodo, deleteAllTodos, asyncAddAction, updateTodo, loadData } from "./actions/todoactions";
// import { useEffect } from 'react';

// const ReduxTodo = () => {
//     const dispatch = useDispatch();
//     const todos = useSelector((state) => state.todos.todos);

//     useEffect(() => {
//         dispatch(loadData());
//     }, []);

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
//                     <Link id="update" to={`/edit/${index}/${todo.name}/${todo.status}`}>UpdateTodo</Link>
//                 </div>
//             ))}
//             <Outlet/><br/><br/>
//             <button id="red" onClick={() => dispatch(deleteAllTodos())}>Delete All</button>
//         </div>
//     );
// };

// export default ReduxTodo;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './ReduxTodo.css';

const ReduxTodo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ name: '', status: 'incomplete' });

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const handleAddTodo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/todos', newTodo);
            setTodos([...todos, response.data]);
            setNewTodo({ name: '', status: 'incomplete' });
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="outer" style={{ textAlign: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Todo List Manager</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={newTodo.name}
                    placeholder='Enter the todo'
                    onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
                />
                <input
                    type="text"
                    value={newTodo.description}
                    placeholder='Enter todo description'
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                />
                <select
                    value={newTodo.status}
                    onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
                >
                    <option value="complete">complete</option>
                    <option value="incomplete">incomplete</option>
                </select>
                <button type="submit">Add Todo</button>
            </form>
            {todos.map((todo) => (
                <div key={todo._id} style={{ textAlign: 'center' }}>
                    <br/><h4>Name: {todo.name}</h4>
                    <h4>Status: {todo.status}</h4>
                    <h4>Description: {todo.description}</h4>
                    <button id="delete" onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
                    <Link to={`/edit/${todo._id}`}>Update Todo</Link>
                </div>
            ))}<br/>
            <button onClick={async () => {
                try {
                    await axios.delete('/todos');
                    setTodos([]);
                } catch (error) {
                    console.error('Error deleting all todos:', error);
                }
            }}>Delete All</button>
        </div>
    );
};

export default ReduxTodo;
