/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPhoto } from "../api/Auth";
import Button from "../components/Button";
import Input from "../components/Input";
import { UserContext } from "../Context/User";

const Profil = () =>{

    const [changePp, setChangePp] = useState(false)
    const [file,setFile] = useState(null)

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

    const handleChangePpClick = () =>{
        setChangePp(true)
    }

    const handleFileChange = e =>{
        setFile(e.target.files[0])
      }

    const handleSubmit = async e =>{
        e.preventDefault()
        await fetchPhoto(user._id,file)
    }

    return (
        <>
            {user && <>
                <h1>{user.prenom} {user.nom}</h1>
                <small>{user.email}</small>
                <img src={user.profile_picture} alt="profile_picture"/>
                {changePp ? <form onSubmit={handleSubmit}>
                        <Input type="file" label="Photo de profil" handleChange={handleFileChange}/>
                        <Button text="Change" type="submit"/>
                    </form>
                     : 
                     <Button text="change profile_picture" handleClick={handleChangePpClick}/>}
                <Button text='Logout' handleClick={handleLogoutClick} />
            </>}
        </>
    )
} 

export default Profil