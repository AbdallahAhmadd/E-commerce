import { Link } from 'react-router-dom';
import './button.css'

function LogoutButton(){

    return(
            <Link to='/' className='logout-link'>
            <button className='logout-button'>
                <p>Logout</p>
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
            </Link>
    );

}
export default LogoutButton;