export default function Profile(props) {

  // if(!props.currentUser) return <Redirect to='/login' component={ Profile } currentUser={ props.currentUser } />
  return (
    <div>
      hello {props.currentUser.name}
    </div>
  )
}