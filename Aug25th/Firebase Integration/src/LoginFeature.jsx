import axios from 'axios';
import { useState } from 'react';

function LoginFeature(){
    let [username,setusername]=useState("");
    let [password,setpassword]=useState("");
    function login(){
        console.log(username);
        console.log(password);
        const newdata={username:{username},password:{password}};
        axios.post("http://localhost:3000/api/v1/auth/login",newdata)
        .then(function(response){
            console.log(response);
            console.log("Posted succesfully");
        })
        .catch(function(err){
            console.log(err);
        });
        
    }
    return(
        <div className='loginBox'>
            <h2>Login Feature</h2>
            <input type='text' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)}></input><br/>
            <input type='password' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}></input><br/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LoginFeature;