import { Link } from "react-router-dom"
import Logo from '../pages/AuthPage/logo.svg'
import * as usersService from '../utilities/users-service'
import './NavBar.css'
import SearchBar from "./SearchBar"
import AddGameForm from './AddGameForm'
export default function NavBar({ user, setUser, findGame }) {
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


                <img className="logo-nav" src={Logo} alt="" />
                <Link className="NavLink" to='/'>Home</Link>

                <Link className="NavLink" to='/library'>Library</Link>

                <Link className="NavLink" to='/games'>Games</Link>

                <Link className="NavLink" to='/new'>Upload</Link>

                <Link className="NavLink" to="" onClick={handleLogOut}>Log Out</Link>

                {/* <SearchBar className='NavLink' findGame={findGame} /> */}
            </nav>
        </div>
    )
}