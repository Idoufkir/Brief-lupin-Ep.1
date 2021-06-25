import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {

    // --------------user login context ------------------


    const [userLoggedIn , setUserLoggedIn] = useState(undefined);
    const [userRole , setUserRole] = useState(undefined);
    const [idUsr , setIdUser] = useState(undefined);
    let iduser
    

    async function getLoggedInUser(){
        let token = localStorage.getItem('token')
        const loggedInUserRes = await axios.get(`http://localhost:2121/loggedInUser?token=${token}`);
        console.log("*****************");
        console.log(token);
        console.log(loggedInUserRes);
        console.log(loggedInUserRes.data.loggedIn);
        console.log(loggedInUserRes.data.role);
        console.log(loggedInUserRes.data.id);
        console.log("*****************");

        setUserLoggedIn(loggedInUserRes.data.loggedIn);
        setUserRole(loggedInUserRes.data.role);
        //setIdUser(loggedInUserRes.data.id)
       localStorage.setItem('iduser',loggedInUserRes.data.id )
    }


    useEffect(()=>{
        // getLoggedAdminIn();
        getLoggedInUser();

    },[])


    return ( 
        <AuthContext.Provider value={{userLoggedIn,userRole,getLoggedInUser,iduser}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 export default AuthContext;
export {
    AuthContextProvider,
};