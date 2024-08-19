// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// // import { updateTodo } from "./actions/todoactions";
// import { updateTodo } from './actions/todoaction';

// const EditTodo = () => {
//   const { index,name,status } = useParams();
//   const todos = useSelector((state) => state.todos.todos);
//   const todo = todos[Number(index)];

//   const [sname, setsname] = useState('');
//   const [sstatus, setsstatus] = useState('');

//   useEffect(() => {
//     if (todo) {
//       setsname(todo.sname);
//       setsstatus(todo.sstatus);
//     }
//   }, [todo,index,name,status]);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateTodo({ index: Number(index), updatedTodo: { sname, sstatus } }));
//     navigate('/');
//   };

//   return (
//     <div>
//       <h1>Update Todo</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={sname} onChange={(e) => setsname(e.target.value)} placeholder="Todo sname"/>
//         <select value={sstatus} onChange={(e) => setsstatus(e.target.value)}>
//           <option value="Incomplete">Incomplete</option>
//           <option value="Complete">Complete</option>
//         </select>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default EditTodo;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { updateTodo } from './actions/todoactions';

// const EditTodo = () => {
//     const { index } = useParams();
//     const todos = useSelector((state) => state.todos.todos);
//     const todo = todos[Number(index)];

//     const [name, setName] = useState('');
//     const [status, setStatus] = useState('');

//     useEffect(() => {
//         if (todo) {
//             setName(todo.name);
//             setStatus(todo.status);
//         }
//     }, [todo]);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateTodo(Number(index), { name, status }));
//         navigate('/');
//     };

//     return (
//         <div>
//             <h1>Update Todo</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Todo name"
//                 />
//                 <select value={status} onChange={(e) => setStatus(e.target.value)}>
//                     <option value="incomplete">Incomplete</option>
//                     <option value="complete">Complete</option>
//                 </select>
//                 <button type="submit">Save</button>
//             </form>
//         </div>
//     );
// };

// export default EditTodo;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo } from './actions/todoactions';

const EditTodo = () => {
    const { index } = useParams();
    const todos = useSelector((state) => state.todos.todos);
    const todo = todos[Number(index)];

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (todo) {
            setName(todo.name);
            setStatus(todo.status);
        }
    }, [todo]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            dispatch(updateTodo(Number(index), { name, status }));
            navigate('/');
        }
    };

    return (
        <div>
            <h1>Update Todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Todo name"
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditTodo;
