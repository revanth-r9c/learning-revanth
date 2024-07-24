import { useState, useEffect } from "react";
import axios from "axios";

function Todo(){
    // let todosInitialValue=["cook","Gym","Homework","eat"];
    // let [todos,setTodos]=useState(todosInitialValue);
    // let [todoEntered, setTodoEntered]=useState("Default Todo");
    // function changeTodoEntered(e){
    //     console.log(e);
    //     console.log(e.target);
    //     console.log(e.target.value);
    //     setTodoEntered(e.target.value);
    // }
    // function addTodo(){
    //     let newTodoArr=[...todos,todoEntered];
    //     setTodos(newTodoArr);
    // }
    // function deleteTodo(indexToDelete){
    //     let newTodos=todos.filter(function(val,index){
    //         if(index==indexToDelete)
    //         {
    //             return false;
    //         }
    //         return true;
    //     });
    //     setTodos(newTodos);
    // }
    // return(
    //     <div>
    //         <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
    //         <button onClick={addTodo}>Add todo</button>
    //         {
    //             todos.map(function(value,index){
    //               return (<div>{value}<button onClick={function(){deleteTodo(index);}}>
    //                 Delete</button></div>);
    //             })
    //         }
    //     </div>
    // );

    // let todosInitialValue=[{name:"Default name",status:"default status"}];
    // let [todos,setTodos]=useState(todosInitialValue);
    // let [todoEntered, setTodoEntered]=useState("Default Todo");
    // useEffect(function(){
    //     console.log("function called on load");
    //     axios.get("todos")
    //     .then(function(response){
    //         console.log(response.data);
    //         setTodos(response.data);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });
    // },[]);
    // function changeTodoEntered(e){
    //     console.log(e);
    //     console.log(e.target);
    //     console.log(e.target.value);
    //     setTodoEntered(e.target.value);
    // }
    // function addTodo(){
    //     let newTodoArr=[...todos,todoEntered];
    //     setTodos(newTodoArr);
    // }
    // function deleteTodo(indexToDelete){
    //     let newTodos=todos.filter(function(val,index){
    //         if(index==indexToDelete)
    //         {
    //             return false;
    //         }
    //         return true;
    //     });
    //     setTodos(newTodos);
    // }
    // return(
    //     <div>
    //         <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
    //         <button onClick={addTodo}>Add todo</button>
    //         {
    //             todos.map(function(value,index){
    //               return (<div>{value}<button onClick={function(){deleteTodo(index);}}>
    //                 Delete</button></div>);
    //             })
    //         }
    //     </div>
    // );

    let todosInitialValue=[{name:"Default name",status:"default status"}];
    let [todos,setTodos]=useState(todosInitialValue);
    let [todoEntered, setTodoEntered]=useState("Default Todo");
    let [statusEntered, setStatusEntered]=useState("Default Status");
    useEffect(function(){
        console.log("function called on load");
        getTodos();
    },[]);
    function changeTodoEntered(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setTodoEntered(e.target.value);
    }
    function addTodo(){
        let newTodoArr={name:todoEntered,status: statusEntered};
        console.log(newTodoObject);
        axios.post("/todos",newTodoObject)
        .then(function(response){
            console.log(response);
            if(response.data.status==1){
                getTodos();
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    function getTodos(){
        axios.get("todos")
        .then(function(response){
            console.log(response.data);
            setTodos(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    function deleteTodo(indexToDelete){
        // let newTodos=todos.filter(function(val,index){
        //     if(index==indexToDelete)
        //     {
        //         return false;
        //     }
        //     return true;
        // });
        // setTodos(newTodos);
        axios.delete(`/todos/${indexToDelete}`)
        .then(function(response){
            console.log(response);
            getTodos();
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return(
        <div>
            <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
            <select onChange={function(e){
                setStatusEntered(e.target.value);
            }}>
                <option value="completed">Completed</option>
                <option value="incomplete">Not Completed</option>
            </select>
            <button onClick={addTodo}>Add todo</button>
            {
                todos.map(function(value,index){
                  return (<div>{value.name}<button onClick={function(){deleteTodo(index);}}>
                    Delete</button>
                    <div>Status:{val.status}</div>
                    <br/>
                    </div>
                    );
                })
            }
        </div>
    );
}

export default Todo;