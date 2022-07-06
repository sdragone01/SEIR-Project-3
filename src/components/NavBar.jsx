import './NavBar.css'
import { Link } from "react-router-dom"
import * as usersService from '../utilities/users-service'
export default function NavBar({ user, setUser }) {
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        usersService.logOut()
        // Update the state will also cause a re-render
        setUser(null)
    }
    return (
        <nav className='NavBar'>
            <Link className='NavLink'to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
            <Link className='NavLink' to='/orders/new'>New Order</Link>
            &nbsp; | &nbsp;
            Welcome, {user.name}
            &nbsp; | &nbsp;
            <Link className='NavLink' to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}