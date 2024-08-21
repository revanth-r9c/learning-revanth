import axios from "axios";
export const addAction = (todo) => ({type:"ADD",todo:todo});
export const asyncAddAction = (todo)=>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch({type:"ADD", todo: todo});
    }, 1000);
  };
};
export const loadData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/todos');
      const data = await response.json();
      dispatch({ type: "LOAD_TODOS", todos: data });
    } catch (error) {
      console.error('Failed to fetch todos', error);
    }
  };
  // return (dispatch) => {
  //     axios.get('/todos')
  //     .then((res)=>dispatch({ type: "LOAD_TODOS", todos: res.data }))
  //     .catch ((error)=> console.error('Failed to fetch todos', error)) 
  // };
};

export const deleteTodo = (index) => ({ type: "DELETE", index });
export const deleteAllTodos = () => ({ type: "DELETE_ALL" });
// export const updateTodo = (index, updatedTodo) => ({ type: "UPDATE", index, updatedTodo });
export const updateTodo = (index, updatedTodo) => ({
    type: "UPDATE",
    index,
    updatedTodo
  });
  