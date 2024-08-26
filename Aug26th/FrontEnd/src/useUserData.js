import { useState, useEffect } from "react";
import axios from "axios";
const useUserData=()=>{
    const [userOb, setuserOb]= useState({});
    useEffect(()=>{
        axios.get("user.json").then((res)=>{
            setuserOb(res.data);
        })
    }, []);
    return userOb;
};

export default useUserData;