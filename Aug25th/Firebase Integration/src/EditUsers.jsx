import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import user_icon from '../src/user_icon.png';
function EditUsers(){

    let [displayName,setdisplayName] = useState("");
    let [email,setemail] = useState("");
    let [username,setusername] = useState("");
    let [password,setpassword] = useState("");
    let [status,setstatus] = useState(true);
    let [imageUrl,setImageUrl]=useState(user_icon);
    const [data, setData] = useState();

    useEffect(function(){
        axios
        .get(`http://localhost:3000/api/v1/users`)
        .then(function(response){
            console.log(response);
            setData(response.users);
        })
    },[])

    function displaynameChanged(e){
        e.preventDefault();
        setdisplayName(e.target.value);
    }
    function emailChanged(e){
        e.preventDefault();
        setemail(e.target.value);
    }
    function usernameChanged(e){
        e.preventDefault();
        setusername(e.target.value);
    }
    function passwordChanged(e){
        e.preventDefault();
        setpassword(e.target.value);
    }
    function statusChanged(e){
        e.preventDefault();
        setstatus(e.target.value);
    }
    function urlChanged(e){
        e.preventDefault();
        setImageUrl(e.target.value);
    }


    function EditUser(){
        let newdata = {avatar: imageUrl, email : email, displayName : displayName, username: username, password: "", status: status};
        axios
        .put(`http://localhost:3000/api/v1/users/66ab87d9d0b72317a4d9a8a8`,newdata)
        .then(function(response){
            console.log(response)
            setData(newdata);
            alert("Updated Successfully!!!");
        })
        .catch(function (err){
            console.log(err)
        })
    }

    return(
        <div className="addproducts">
            <h3>Update User Details</h3>
            <img src={imageUrl} alt='user icon' height={"200px"} width={"200px"}/>
            <input type="text" value={displayName} onChange={(event)=>displaynameChanged(event)} placeholder="displayName"/>
            <input type="email" value={email} onChange={emailChanged} placeholder="email"></input>
            <input type="text" value={username} onChange={usernameChanged} placeholder="username"></input>
            <input type="password" value={password} onChange={passwordChanged} placeholder="password"></input>
            <input type="text" value={imageUrl} onChange={urlChanged} placeholder="image url"></input>
            <select onChange={statusChanged}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select><br/>
            <button onClick={EditUser}>Update</button> 
        </div>
    )
}

export default EditUsers;
