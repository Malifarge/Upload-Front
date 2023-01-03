/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { UserContext } from "../Context/User";

const Profil = () =>{

    const {user, logout} = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate("/")
        }
    },[user])

    const handleLogoutClick = () =>{
        logout()
    }

    return (
        <>
            {user && <>
                <h1>{user.prenom} {user.nom}</h1>
                <small>{user.email}</small>
                <img src={user.profile_picture} alt="profile_picture"/>
                <Button text='Logout' handleClick={handleLogoutClick} />
            </>}
        </>
    )
} 

export default Profil