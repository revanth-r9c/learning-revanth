import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Fake() {
    const [details, setDetails] = useState([]);
    const [filteredDetails, setFilteredDetails] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Function is called on load");
        getDetails();
    }, []);

    useEffect(() => {
        // Filter products based on the selected category
        if (selectedCategory === 'All') {
            setFilteredDetails(details);
        } else {
            setFilteredDetails(details.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory, details]);

    function getDetails() {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (response) {
                console.log(response.data);
                setDetails(response.data);

                // Extract unique categories
                const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
                setCategories(uniqueCategories);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleCategoryClick(category) {
        setSelectedCategory(category);
        // Optionally, you can navigate to a URL based on the category
        // navigate(`/category/${category}`);
    }

    return (
        <div className="fake">
            <h1>Fake Store Details</h1>

            {/* Category filter */}
            <div className="category-filter">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={function()  {handleCategoryClick(cat)}}
                        className={cat === selectedCategory ? 'active' : ''}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product list */}
            <div className="product-list">
                {filteredDetails.map((val, index) => (
                    <div key={index} className="product-card">
                        <b>Title:</b> {val.title}
                        <div>
                            <b>Price:</b> ${val.price}
                        </div>
                        <div>
                            <b>Description:</b> {val.description}
                        </div>
                        <div>
                            <b>Category:</b> {val.category}
                        </div>
                        <div>
                            <b>Image:</b> <img src={val.image} alt={val.title} className="product-image" />
                        </div>
                        <div>
                            <b>Rating:</b> {val.rating.rate}
                            <b>Count:</b> {val.rating.count}
                        </div>
                        <button onClick={() => navigate(`/AllProducts/${val.id}`)}>Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fake;
