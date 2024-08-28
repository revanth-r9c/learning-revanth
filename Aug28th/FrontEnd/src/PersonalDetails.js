import { useContext } from "react";
import UserContext from './usercontext';

const PersonalDetails=()=>{
    const userContextObject = useContext(UserContext);
    return(
        <div>
            <h3>Personal Details</h3>
            <h3> user component with city = {userContextObject.city}</h3>
            <h3>user component with name ={userContextObject.name}</h3>
        </div>
    );
}

export default PersonalDetails;