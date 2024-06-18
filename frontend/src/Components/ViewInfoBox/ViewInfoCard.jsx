import './viewinfocard.css'

function ViewInfoCard(props){
    const {onClick}= props;

    return(
        <div className='info-card-container'>
            <div className='info-card-container_info'>

            
            </div>

            <button className='info-card-container_button' onClick={onClick}>Delete</button>

        </div>
    );


}

export default ViewInfoCard