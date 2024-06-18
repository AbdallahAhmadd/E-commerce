import './loginform.css'
import Textbox from '../TextBox/Textbox';
import Button from '../Button/button';
function LoginForm(){
    return(
        <>
        <div className='login-header'>
            <p>Login</p>
        </div>
        <div className='login-text-box-container'>
            <Textbox placeholder='Email' type='email' />
            <Textbox placeholder='Password' type='password' />
            <Button text='Login' />
            
        </div>
        <div className='sign-up-switch-container'><p>New User?<a href='#'>SignUp</a></p></div>
        </>
    );
}

export default LoginForm;
