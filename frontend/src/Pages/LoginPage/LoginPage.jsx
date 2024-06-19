import LeftBox from "../../Components/MainBox/LeftBox.jsx";
import LoginRightBox from "../../Components/MainBox/LoginRightbox.jsx";
import shoppingGirl from '../SignUpPage/shopping-woman.png'
import '../SignUpPage/signuppage.css'

function LoginPage(){
    return (
        <div className="signup-page-container">
           <LeftBox/>
           <LoginRightBox/>
           <img src={shoppingGirl} alt="shopping lady" className="shpping-girl-image"/>
        </div>
    );
}

export default LoginPage;