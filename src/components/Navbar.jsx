import { Link } from 'react-router-dom' 

export default function Navbar() {
  return (
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
  )
}
