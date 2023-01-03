/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUser, fetchPhoto, login } from "../api/Auth";
import { UserContext } from "../Context/User";
import Button from "./Button";
import Input from "./Input";

const Form = () => {

  const [sign,setSign] = useState(false)
  const [prenom,setPrenom] = useState('')
  const [nom,setNom] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [file,setFile] = useState(null)

  const { setToken, user, setUser } = useContext(UserContext);

  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      navigate("/Profil")
    }
  },[user])

  const handlePrenomChange = e =>{
    setPrenom(e.target.value)
  }
  const handleNomChange = e =>{
    setNom(e.target.value)
  }

  const handleEmailChange = e =>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = e =>{
    setPassword(e.target.value)
  }

  const handleFileChange = e =>{
    setFile(e.target.files[0])
  }

  const handleSwitchClick = () =>{
    if (sign){
      setSign(false)
    }else{
      setSign(true)
    }
  }

  const handleSubmit = async e =>{
    e.preventDefault()

    if (sign){
        const newUser={
          nom,
          prenom,
          email,
          password
        }
        const createUser = await CreateUser(newUser)
        setUser(createUser.user)
        await fetchPhoto(user._id,file)

    }else{
        const user = {
          email,
          password,
        };
    
        const { token } = await login(user);
    
        if (token) {
          setToken(token);
        } else {
          setSign(true)
        }
     }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          {sign && <>
          <Input type="text" label="Prénom" placeholder="enter your firstname..." handleChange={handlePrenomChange} value={prenom} />
          <Input type="text" label="Nom" placeholder="enter your lastname..." handleChange={handleNomChange} value={nom}/>
          </>}
          <Input type="email" label="Email" placeholder="enter your mail..." handleChange={handleEmailChange} value={email}/>
          <Input type="password" label="Password" placeholder="enter you password..." handleChange={handlePasswordChange} value={password}/>
          {sign && <Input type="file" label="Photo de profil" handleChange={handleFileChange}/>}
          <div>
            <Button type="button" text={sign ? "To login": "To signup"} handleClick={handleSwitchClick}/>
            <Button type="submit" text={sign ? "signup": "login"}/>
          </div>

      </form>
    </>
  );
}

export default Form;
