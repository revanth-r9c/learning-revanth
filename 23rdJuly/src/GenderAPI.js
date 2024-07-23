import { useState,useEffect } from "react";
import axios from 'axios';

function GenderAPI(){
    function search(){
        let value=document.querySelector("input").value;
        let url="https://api.genderize.io/?name="+value;
        fetch(url)
        .then(function(response){
            console.log(response.value);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return(
        <div>
            <input type="text" placeholder="Enter Name"/>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default GenderAPI;