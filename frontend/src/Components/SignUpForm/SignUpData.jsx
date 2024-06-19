import Textbox from "../TextBox/Textbox";
import Button from "../Button/button";
import './signupdata.css';
import { useState,useEffect } from 'react';

const SignUpData = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(null);
            }, 4000);
    
            return () => clearTimeout(timer); // This will clear the timeout if the component unmounts before the 5 seconds are up
        }
    }, [success]);

    const handleCreateAccount = async(e) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        const response = await fetch('/api/users', {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }

        })
       const json = await response.json();
        if(!response.ok){
            setError(json.error);
            setSuccess(null);
        }
        if(response.ok){
            setFirstName('')
            setEmail('')
            setLastName('')
            setPassword('')
            setError(null)
            setSuccess('User Created Successfully!')
            console.log('New User Added')

        }
    };
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return(
        <div className='sign-up-data'>
            <div className="sign-up-data_name">
                <Textbox isHalfWidth={true} placeholder='First Name' onChange={handleFirstNameChange} value={firstName} />
                <Textbox isHalfWidth={true} placeholder='Last Name'  onChange={handleLastNameChange} value={lastName}/>
            </div>
            <div className="sign-up-data_credentials">
                <Textbox placeholder='Email' onChange={handleEmailChange} value={email}/>
                <Textbox type={'password'} placeholder='Password' onChange={handlePasswordChange} value={password}/>
                <Button onClick={handleCreateAccount}/>
                {error && <p style={{color:'red',fontSize:'18px'}}>{error}</p>}
                {success && <p style={{color:'green',fontSize:'18px'}}>{success}</p>}
            </div>
        </div>
    );
}

export default SignUpData;