
const Input = ({
    label,
    type,
    value,
    placeholder,
    handleChange
  }) => {
    return (
      <>
          <label htmlFor={label}>{label}</label>
          <input
            name={label}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
          />
      </>
    )
  }
  
  export default Input