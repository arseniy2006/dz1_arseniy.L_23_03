import { Outlet, NavLink } from "react-router-dom"
import '../../App.css'

const activeMenu = ({isActive}) => isActive ? 'activeMenu' : ''

export default function Layout () {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={'/about'} className={activeMenu}>About</NavLink></li>
                    <li><NavLink to={'/posts'} className={activeMenu}>Posts</NavLink></li>
                    <li><NavLink to={'/create'} className={activeMenu}>Create Post</NavLink></li>
                </ul>
            </nav>

            <div className='content'><Outlet/></div>

            <footer>Footer</footer>
        </>
    )
}