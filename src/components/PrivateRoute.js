// this is not used

import { useEffect } from 'react'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  console.log('private route!')
  return (
      <Route {...rest} render={(props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }}
    />
  )
}

export default PrivateRoute