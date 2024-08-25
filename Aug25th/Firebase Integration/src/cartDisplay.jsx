import ProductsAPI from "./ProductsAPI";

function cartDisplay(props){
    return(
        <div>
            {
                props.id.map(function(value){
                    <p>value</p>
                })
            }
        </div>
    )
}

export default cartDisplay;