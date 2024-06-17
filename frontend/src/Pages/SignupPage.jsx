import LeftBox from "../Components/MainBox/LeftBox";
import RightBox from "../Components/MainBox/RightBox";
import shoppingGirl from './shopping-woman.png'
import './signuppage.css'

function SignupPage(){
    return (
        <div className="signup-page-container">
           <LeftBox/>
           <RightBox/>
           <img src={shoppingGirl} alt="shopping lady" className="shpping-girl-image"/>
        </div>
    );
}

export default SignupPage;