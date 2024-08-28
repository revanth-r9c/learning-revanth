// import { jwtDecode } from 'jwt-decode';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const JwtTokenDecoder = () => {
//   const [decodedLoginToken, setDecodedLoginToken] = useState(null);
//   const [decodedUserToken, setDecodedUserToken] = useState(null);

//   useEffect(() => {
//     axios.post('http://localhost:1337/api/auth/local', {
//       username: 'user4',
//       password: 'user4user4',
//       identifier: 'user4@gmail.com',
//     })
//     .then((loginResponse) => {
//       const loginToken = loginResponse.data.token;
//       const decodedLogin = jwtDecode(loginToken);
//       setDecodedLoginToken(decodedLogin);

//       return axios.get('localhost:1337/api/users');
//     })
//     .then((userResponse) => {
//       const userToken = userResponse.data.token;
//       const decodedUser = jwtDecode(userToken);
//       setDecodedUserToken(decodedUser);

//     })
//     .catch((err) => {
//         console.log(err);
//         console.log("I am in error block");
//     });
//   }, []);


//   return (
//     <div>
//       <h3>Decoded Login Token:</h3>
//       <p>{JSON.stringify(decodedLoginToken)}</p>
//       <h3>Decoded User Token:</h3>
//       <p>{JSON.stringify(decodedUserToken)}</p>
//     </div>
//   );
// };

// export default JwtTokenDecoder;


import { jwtDecode } from "jwt-decode";
import { useEffect , useState } from "react";
import axios from "axios";

const JwtTokenDecoder = () => {

    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [iat , setIat] = useState("");
    const [exp , setExp] = useState("");
    const [id , setId] = useState("");
    const [blocked , setBlocked] = useState();
    const [confirmed , setConfirmed] = useState();

    useEffect(() => {
        axios.post("http://localhost:1337/api/auth/local/", {
            username : "Revanth",
            password : "Revanth@2002",
            identifier : "revanth@gmail.com",
        })
        .then((res) => {
            const decoded = jwtDecode(res.data.jwt);
            setUsername(res.data.user.username);
            setEmail(res.data.user.email);
            setExp(decoded.exp);
            setIat(decoded.iat);
            setId(decoded.id);
            setBlocked(res.data.user.blocked);
            setConfirmed(res.data.user.confirmed);
            console.log(decoded);
        });
    } , []);

    return (

        <div style={{textAlign: 'center'}}>
            <h1>Main Page</h1><hr/>
            <h3>Details of the User are : </h3>
            Username = {username}<br/>
            email = {email}<br/>
            Confirmed = {confirmed?"true":"false"}<br/>
            Blocked = {blocked ? "true":"false"}
            <br/><br/><hr/>
            <h3>Values from the Token are :</h3>
            exp value= {exp}<br/> 
            id = {id}<br/><br/><hr/>
        </div>
    );
};
export default JwtTokenDecoder;