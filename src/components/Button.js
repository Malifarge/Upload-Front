const Button = ({handleClick,text,type}) =>{
    return(
        <button type={type} onClick={handleClick}>{text}</button>
    )
}

export default Button