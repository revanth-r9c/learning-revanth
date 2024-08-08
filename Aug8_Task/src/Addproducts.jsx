import { useState } from "react";
import axios from "axios";
function Addproducts(){

    let [name,setName] = useState("");
    let [description,setDescription] = useState("");
    let [data,setData] =useState ([{name : "name", description: "Description"}]);

    function nameChanged(e){
        e.preventDefault();
        setName(e.target.value);
    }
    function descriptionChanged(e){
        e.preventDefault();
        setDescription(e.target.value);
    }

    function Addproducts(){
        let newdata = {name : name, description: description};
        axios.post("http://localhost:3000/api/v1/categories",newdata)
        .then(function(response){
            console.log(response)
            setData(response.data);
            alert("Product is added successfully");
        })
        .catch(function (err){
            console.log(err);
            alert("server error",err);
        })
    }

    return(
        <div className="addproducts">
            <h1>Category Form</h1>
            <input type="text" value={name} onChange={nameChanged} placeholder="Enter Product Name"></input><br/>
            <textarea value={description} onChange={descriptionChanged} placeholder="Enter Description of the product" rows="4" cols="50"></textarea><br/>
            <button id="submit" onClick={Addproducts}>Submit</button> 
        </div>
    )
}

export default Addproducts;