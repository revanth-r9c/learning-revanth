import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const RestaurantDetails = () => {
    const [restaurant, setRestaurant] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:1337/api/restaurants/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                setRestaurant(res.data.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:1337/api/restaurants/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(() => {
                navigate("/"); 
            })
            .catch((err) => console.log(err));
    };

    const handleEdit = () => {
        navigate(`/edit/${id}`); 
    };

    return (
        <div style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid grey',
            borderRadius: '4px',
            maxWidth: '600px',
            margin: 'auto'
        }}>
            {restaurant ? (
                <>
                    <h3>Details for {restaurant.attributes.name}</h3>
                    <p><b>Name: </b> {restaurant.attributes.name}</p>
                    <p><b>Email: </b> {restaurant.attributes.email}</p>
                    <p><b>Status: </b> {restaurant.attributes.status ? "true" : "false"}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleEdit}
                        style={{ marginLeft: '10px' }}
                    >
                        Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RestaurantDetails;
