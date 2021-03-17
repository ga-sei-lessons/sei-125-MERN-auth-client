import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Welcome from './components/Welcome'

import './App.css';

function App() {
    const [response, setResponse] = useState('')

    useEffect(() => {
      const axiosCall = async function() {
        try {
          const response = await axios.get('/api-v1/users/login')
          console.log(response.data)
        } catch(error) {
          console.log(error)
        }
      }

      axiosCall()

    }, [])
  return (
    <Router>

      <header>
        <nav>
          <Link to="/">
              <h4>user app</h4>
          </Link>

          <Link to="/signup">
              sign up
          </Link>

          <Link to="/login">
              login
          </Link>

          <Link to="/logout">
              log out
          </Link>

          <Link to="/profile">
              profile
          </Link>
        </nav>
      </header>

      <div className="App">
          <Switch>
            <Route path="/signup" component={ Signup }/>

            <Route path="/login" component={ Login }/>

            <Route path="/profile" component={ Profile } />

            <Route exact path="/" component={ Welcome } />
          </Switch>

      </div>

    </Router>
  );
}

export default App;
