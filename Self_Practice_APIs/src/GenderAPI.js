import axios from 'axios';
import { useState } from 'react';

function GenderAPI(){
    let [defaultValue,setDefaultValue]=useState("Default Value");
    let [name,setName]=useState("");
    let [value,setValue]=useState("");
    function changeDefault(e){
        setDefaultValue(e.target.value);
        setName(e.target.value);
        console.log(e.target.value);
        let url="https://api.genderize.io?name="+name;
        axios.get(url)
        .then(function(response){
            setValue(response.data.gender);
        })
        .catch(function(error){
            alert("server is not responding");
        })
    }
    return(
        <div className='GenderAPI'>
            <h1>GENDER API DETECTOR</h1>
            <input type="text" placeholder="Enter your name" value={defaultValue} onChange={changeDefault} />
            <h3>{value}</h3>
        </div>
    )
}

export default GenderAPI;