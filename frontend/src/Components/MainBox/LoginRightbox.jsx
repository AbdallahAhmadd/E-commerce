import LoginForm from '../LoginForm/LoginForm';
import './mainbox.css'

function RightBox(){
    return(
        <div className='form-container'>
            <div className='form-container_header' >
            <LoginForm/>
            </div>
            
        </div>
    );
}

export default RightBox;