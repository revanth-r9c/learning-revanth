
import axios from 'axios';
import { useState } from 'react';

function DogAPI(){
    let [imgurl,setimgURL]=useState("");
    function randomGen(){
        let url="https://dog.ceo/api/breeds/image/random";
        axios.get(url)
        .then(function(response){
            console.log(response.data.message);
            setimgURL(response.data.message);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return(
        <div className='DogAPI'>
            <h1>DOG API IMAGE GENERATOR</h1>
            <button onClick={randomGen}>Generate</button><br/><br/>
            <img src={imgurl} height={"200px"} width={"200px"}/>
        </div>
    );
}

export default DogAPI;