
import './button.css';
function Button(props){
    const {onClick,text='Create Account'} = props;
    return(
        <div className="create-account-submission">
            <button className="create-account-submission_btn" onClick={onClick}>
                <p style={{color:'white',fontWeight:700,fontSize:'20px'}}>{text}</p>
            </button>
        </div>
       
    );

}

export default Button;