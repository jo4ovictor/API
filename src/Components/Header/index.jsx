import './header.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header>
                <Link className='logo' to="/">App</Link>
                <Link className='favoritos' to="/favoritos">Meus filmes</Link>
            </header>
        </div>
    )
}
export default Header;