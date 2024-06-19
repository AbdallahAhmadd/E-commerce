import ViewInfoCard from "../../Components/ViewInfoBox/ViewInfoCard.jsx";
import './viewuserspage.css'
import AnalysisImage from './analysis-woman.png'
function ViewUsersPage() {
    return(
    <>
        <div className="view-users-header">
            <p>View Users</p>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div className="info-cards-container">
                <ViewInfoCard />
                <ViewInfoCard />
                <ViewInfoCard />
                <ViewInfoCard />
                <ViewInfoCard />
            </div>

            <div className="view-info-image-container">
                <img src={AnalysisImage} alt="woman working on a computer" />
            </div>
        </div>
        
    </>
    );
}

export default ViewUsersPage;