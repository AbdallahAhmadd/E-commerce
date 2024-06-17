import signupImage from "./Group 1.png";
import './mainbox.css';
function LeftBox() {
    return (
      <div className="image-container" >
        <img src={signupImage} className="image" />
      </div>
    );
  }

export default LeftBox;