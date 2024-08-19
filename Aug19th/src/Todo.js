import {useState , useEffect} from "react";
import axios from "axios";
import TodoForms from "./TodoForms";
import TodoList from "./TodoList";

function Todo()
{
    let todosInitialValue=[{name: "Default Name",status: "Default Status"}];
    let [todos,setTodos]=useState(todosInitialValue);
    let [todoEntered, setTodoEntered]=useState("Enter Hobby");
    let [statusEntered,setStatusEntered]=useState("Default Status");
    useEffect(function()
    {
        console.log("function called on load");
        getTodos();
    },[]);

    async function getTodos()
    {
        try {
            let response = await axios.get("/todos");
            console.log(response);
            setTodos(response.data);
        } catch (error){
            alert(error.message);
        }
        // axios
        // .get("todos")
        // .then(function(response)
        // {
        //     console.log(response.data);
        //     setTodos(response.data);
        // })
        // .catch(function(error)
        // {
        //     console.log(error);
        // })
    }
    function changeTodoEntered(e)
    {
        setTodoEntered(e.target.value);
    }
    function addTodo()
    {
        let newTodoObject={name: todoEntered, status:statusEntered};
        axios
        .post("/todos",newTodoObject)
        .then(function(response)
        {
            console.log(response.data);
            if(response.data.status = 1)
            {
                getTodos();
            }
        })
        .catch(function(err)
        {
            console.log(err);
        })
        let newTodoArr=[...todos,todoEntered]
        setTodos(newTodoArr);

    }
    function deleteTodo(index)
    {
        axios
            .delete(`/todos/${index}`)
            .then(function(response)
            {
                console.log(response);
                getTodos();
            })
            .catch(function(error)
            {
                console.log(error);
            });
        let newTodos=todos.filter(function (value,i)
        {
            if(index == i)
            {
                return false;
            }
            else
            {
                return true;
            }
        });
    setTodos(newTodos);
    }
    function reset()
    {
        let newTodos=[];
        setTodos(newTodos);
    }
    // return(
    //     <div className="Hobbies">
    //         <h1> Hobbies </h1>
    //         <input type="text" name="todoitem" value={todoEntered} onChange={changeTodoEntered}/>
    //         <select onChange={function(e)
    //             {
    //                 setStatusEntered(e.target.value);
    //             }
    //         }>
    //             <option value="completed">Completed</option>
    //             <option value="incompleted">Incomplete</option>
    //         </select>
    //         <button className="Hobby" onClick={addTodo}>add Item</button>
    //         <button className="Hobby" onClick={reset}>Reset All</button>
    //         {
    //             // todos.map(function(val,index)
    //             // {
    //             //     return(
    //             //         <div>
    //             //             {val.name}
    //             //             <button className="hobbyBtn" onClick={function ()
    //             //                 {
    //             //                     deleteTodo(index);
    //             //                 }
    //             //             }>Delete</button>
    //             //             <div>
    //             //                 Status:{val.status}
    //             //             </div>
    //             //         </div>

    //             //     );
    //             // })
    //         }
    //     </div>
    // );
    return(
        <div>
            <TodoForms todoEntered={todoEntered} changeTodoEntered={changeTodoEntered}
                setStatusEntered={setStatusEntered} addTodo={addTodo} reset={reset} />
    
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    )

}
export default Todo;