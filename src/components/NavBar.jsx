import { Link } from "react-router-dom"
import * as usersService from '../utilities/users-service'
import './NavBar.css'
export default function NavBar({ user, setUser }) {
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        usersService.logOut()
        // Update the state will also cause a re-render
        setUser(null)
    }
    return (
        <div className="bar">
            <nav className="NavBar">
                <Link className="NavLink" to='/'>Home</Link>

                <Link className="NavLink" to='/user'>Library</Link>

                <Link className="NavLink" to='/games'>Games</Link>

                <Link className="NavLink" to="" onClick={handleLogOut}>Log Out</Link>
            </nav>
        </div>
    )
}