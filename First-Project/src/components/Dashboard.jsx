import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function DashBoard(){
    return (
        <div>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
        </div>
    )
}