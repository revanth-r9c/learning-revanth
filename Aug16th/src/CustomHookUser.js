import useUserData from "./useUserData";
const CustomHookUser = () =>{
    const userOb=useUserData();
    return(
        <div>
            Name: {userOb.name} and age = {userOb.age}
        </div>
    );
}

export default CustomHookUser;