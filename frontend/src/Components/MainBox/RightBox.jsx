import SignUpData from '../SignUpForm/SignUpData'
import './mainbox.css'

function RightBox(){
    return(
        <div className='form-container'>
            <div className='form-container_header' >
                <h2>Create Account</h2>
            </div>

            <SignUpData/>

            <div className='form-container_login-option'>
                <p>Already have an account? <a href='#'>Login</a></p>
            </div>
        </div>
    );
}

export default RightBox;