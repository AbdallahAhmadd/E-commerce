import './textbox.css';
import {useState} from 'react';
function Textbox(props){
    const {type='text' , isHalfWidth=false , placeholder='Enter Text', onChange,value,isPassword=false}= props;
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState); // Toggle the boolean value
    };

    return(
    <div className='textbox-container'   style={{width:isHalfWidth? '48%':'100%'}}>
        
        <input type={isPassword ? (isPasswordVisible ? 'text' : 'password') : type}
                placeholder={placeholder}
                className='textbox-container_input' 
                onChange={onChange} //change handler
                value={value}/>

        {isPassword && !isPasswordVisible && (<i class="fa-regular fa-eye" onClick={handleTogglePasswordVisibility}></i>) }
        {isPassword && isPasswordVisible && (<i class="fa-regular fa-eye-slash" onClick={handleTogglePasswordVisibility}></i>) }
    </div>
    );

}

export default Textbox;