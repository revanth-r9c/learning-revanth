import { useState } from "react";
import axios from 'axios';

function ProductsAPI(){
    let [data,setData]=useState([]);
    function displayProducts(){
        const url="https://fakestoreapi.com/products";
        axios.get(url)
        .then(function(response){
            setData(response.data);
            console.log(data);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return(
        <div className="ProductsAPI">
            <button onClick={displayProducts}>Show Products</button>
            <div className="ProductsCard">
            { 
                data.map(function(value){
                    return(
                    <div className="inner">
                        <img src={value.image} height={"200px"} width={"200px"}/><br/>
                        <p><b>Title:</b> {value.title}</p><br/>
                        <p><b>Category:</b> {value.category}</p><br/>
                        <p><b>Price:</b> {value.price}</p><br/>
                        <p><b>Rating:</b> {value.rating.rate}</p>
                    </div>
                    );
                })  
            }
            </div>
        </div>
    )
}

export default ProductsAPI;