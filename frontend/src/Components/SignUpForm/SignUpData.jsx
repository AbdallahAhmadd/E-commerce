import Textbox from "../TextBox/Textbox";
import Button from "../Button/button";
import './signupdata.css';

function SignUpData(){
    return(
        <div className='sign-up-data'>
            <div className="sign-up-data_name">
                <Textbox isHalfWidth={true} placeholder='First Name' />
                <Textbox isHalfWidth={true} placeholder='Last Name'/>
            </div>
            <div className="sign-up-data_credentials">
                <Textbox placeholder='Email'/>
                <Textbox type={'password'} placeholder='Password'/>
                <Button/>
            </div>
        </div>
    );
}

export default SignUpData;