import './Navbar.css';
import {useAuth} from '../auth/AuthProvider';

export default function Navbar() {
    const {isAuthenticated} = useAuth();

    return (
        <div className='navbar'>
            <nav>
                <ul> <a href="/Mesero/Home">Home</a> </ul>
                <ul> <a href='#'>Como</a> </ul>
                <ul className=''>{isAuthenticated && <button>Cerrar Sesión</button>}</ul>
            </nav>
        </div>
    )
}
