

  const CreateUser = async user => {
    const request = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  
    const response = await request.json()
    return response
  }

const fetchPhoto = async (id,file) =>{
    const formdata = new FormData()
    formdata.append('profil_picture', file, file.name)

    const request = await fetch(`http://localhost:5000/auth/${id}`, {
      method: 'POST',
      body: formdata
    })

    const response = await request.json()

    console.log(response)
}

const login = async user => {
    const request = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  
    const response = await request.json()
    return response
  }
  
export { login, CreateUser, fetchPhoto }