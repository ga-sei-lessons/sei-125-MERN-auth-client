import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Profile(props) {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const privateMessage = async function() {
      try {
        // get the jwt from local storage
        const token = localStorage.getItem('jwtToken')
        // make auth headers
        const authHeaders = {
          'Authorization': token
        }
        // hit auth locked endpoint
        const response = await axios.get('/api-v1/users/auth-locked', { headers: authHeaders })
        setMessage(response.data.msg)
      } catch(error) {
        console.log(error)
        // log the user out if the jwt doesn't pass the auth check
        props.handleLogout()
      }
    }
  
    privateMessage()
  }, [props])
  // if(!props.currentUser) return <Redirect to='/login' component={ Profile } currentUser={ props.currentUser } />
  return (
    <div>
      <h4>hello {props.currentUser.name}</h4>
      <h5>your email is {props.currentUser.email}</h5>

      <div>
      <p>you have a secret message from the auth locked route:</p>

      <p> {message} </p>
      </div>
    </div>
  )
}