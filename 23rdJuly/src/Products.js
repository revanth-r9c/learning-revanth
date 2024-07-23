import { useEffect, useState } from "react";
import axios from "axios";

function Products(){
    let [data,setData] = useState([]);


    function getGender(){
        axios
        .get("https://fakestoreapi.com/products")
        .then(function(response){
            setData(response.data);
            console.log(response.data);
        }).catch(function(error){
            console.log(error);
        })
    };

    return(
        <div className="Jai">
            <h1>Product Info</h1>
            <button className="showProduct" onClick={getGender}>Show Products</button>
            { data.map(function(val,i){
                return <div className="outercontainer">

                <div className="lst">
                    <p class="one">Title = {val.title}</p> <br />
                    <p class="one">Price = {val.price}</p> <br />
                    <p class="one" id="small">Description = {val.description}</p> <br />
                    <p class="one">Category = {val.category}</p>  <br />              
                    <p class="one">Rating = {val.rating.rate}</p>  <br />       
                    <img src={val.image} alt="product Img" width={"100px"} height={"100px"}/>
                    <hr/><hr/>
                </div>
                </div>
            }) }
        </div>
    )
}
export default Products;