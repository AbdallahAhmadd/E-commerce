import './loginform.css'
import Textbox from '../TextBox/Textbox';
import Button from '../Button/button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function LoginForm(){

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const history = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        const Adminemail = "admin"
        const Adminpassword = "admin"

        if(email === Adminemail && password === Adminpassword){
            history('/ViewUsers')
        }
        else{ 
            alert('Invalid Credentials')
        }
    }

    return(
        <>
        <div className='login-header'>
            <p>Login</p>
        </div>
        <div className='login-text-box-container'>
            <Textbox placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <Textbox placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <Button text='Login' onClick={handleLogin}/>
            
        </div>
        <div className='sign-up-switch-container'>
            
            <p>New User? 
            
            <Link to='/'>SignUp</Link>  
            
            </p>
            
        </div>
        </>
    );
}

export default LoginForm;
