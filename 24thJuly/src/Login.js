import { useParams } from "react-router-dom";

function Login(){
    // let msg="Login Component";
    // function doLogin(){
    //     alert("Wow, now I can login also");
    // }
    // return (
    //     <div className="Login">
    //         <h1>{msg}</h1>
    //         <input type="text" name="user name"/>
    //         <input type="password" name="password"/>
    //         <button onClick={doLogin}>Login Now!!</button>
    //     </div>
    // );

    let params=useParams();
    console.log(params);
    function doLogin(){
        alert("Wow, now I can login also");
    }
    return (
        <div className="Login">
            <h1>{params.title}</h1>
            <h2>Token ={params.tokenId}</h2>
            <input type="text" name="user name"/>
            <input type="password" name="password"/>
            <button onClick={doLogin}>Login Now!!</button>
        </div>
    );
}

export default Login;