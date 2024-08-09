export const addAction = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
});

export const deleteAction = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
});

export const editAction = (todo) => ({
    type: 'EDIT_TODO',
    payload: todo,
});
