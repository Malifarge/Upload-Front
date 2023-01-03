import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {

  const [sign,setSign] = useState(false)
  const [prenom,setPrenom] = useState('')
  const [nom,setNom] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [file,setFile] = useState(null)

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

  const handleSubmit = () =>{
    if (sign){
        
    }else{

    }
  }

  return (
    <>
      <form>
          {sign && <>
          <Input type="text" label="Prénom" placeholder="enter your firstname..." handleChange={handlePrenomChange} value={prenom} />
          <Input type="text" label="Nom" placeholder="enter your lastname..." handleChange={handleNomChange} value={nom}/>
          </>}
          <Input type="email" label="Email" placeholder="enter your mail..." handleChange={handleEmailChange} value={email}/>
          <Input type="password" label="Password" placeholder="enter you password..." handleChange={handlePasswordChange} value={password}/>
          {sign && <Input type="file" label="Photo de profil" handleChange={handleFileChange}/>}
          <div>
            <Button type="button" text={sign ? "To login": "To signup"} handleClick={handleSwitchClick}/>
            <Button type="submit" text={sign ? "login": "signup"}/>
          </div>

      </form>
    </>
  );
}

export default Form;
