import { useSelector, useDispatch } from "react-redux";
import { addAction, deleteAction, editAction } from "./actions/todoaction";
import { useState } from "react";
import "./ReduxTodo.css";

const ReduxTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const [editTodo, setEditTodo] = useState(null); // State to manage the todo being edited

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const status = e.target.elements.status.value;

        if (editTodo) {
            dispatch(editAction({ ...editTodo, name, status }));
            setEditTodo(null); // Clear the edit state after editing
        } else {
            dispatch(addAction({ name, status }));
        }
        e.target.reset(); // Reset the form after submission
    };

    const handleEdit = (todo) => {
        setEditTodo(todo); // Set the todo to be edited
    };

    const handleDelete = (id) => {
        dispatch(deleteAction(id)); // Dispatch delete action
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={editTodo ? editTodo.name : ''} />
                <select name="status" defaultValue={editTodo ? editTodo.status : 'incomplete'}>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button type="submit">{editTodo ? 'Update Todo' : 'Add Todo'}</button>
            </form>
            {todos.map((todo) => (
                <div key={todo.id} className="todo-item">
                    <div>Name: {todo.name}</div>
                    <div>Status: {todo.status}</div>
                    <button onClick={() => handleEdit(todo)} id="edit">Edit</button>
                    <button onClick={() => handleDelete(todo.id)} id="delete">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ReduxTodo;
