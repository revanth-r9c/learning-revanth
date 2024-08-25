import { useState } from "react"

function LoginHide(){
    let [login,setlogin]=useState(true);
    function change(){

    }
    return(
        <div>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={change}>Login</button>
        </div>
    )
}

export default LoginHide;