import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  

  const handleSumbit = async e => {
    try { 
      e.preventDefault()
      // post to backend with form submission
      const requestBody = {
        email: email,
        password: password
      }

      const response = await axios.post('/api-v1/users/login', requestBody)
      
      // destructure response
      const { token } = response.data

      // Save token to localStorage
      localStorage.setItem('jwtToken', token);

      // get user data from the token
      const decoded = jwt_decode(token)

      // set the current user in the top app state
      props.setCurrentUser(decoded)
      
    } catch(error) {
      // if the email/pass didn't match
      if(error.response.status === 400) {
        setMessage('bad username or password')
      } else {
        // otherwise log the error for debug
        console.log(error)
      }
    }
  }

  if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={ props.currentUser } />

  return (
    <div>
      <h3>Login Form:</h3>

      <p>{message}</p>

      <form onSubmit={handleSumbit}>
        <label htmlFor='email-input'>email:</label>

        <input
          id='email-input'
          type='email'
          placeholder='user@domain.com'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor='password-input'>password:</label>

        <input 
          id='password-input'
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
        />

        <input 
          type='submit'
          value='login'
        />
      </form>
    </div>
  )
}