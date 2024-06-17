import './textbox.css';

function Textbox(props){
    const {isHalfWidth=false , placeholder='Enter Text'}= props;

    return(
    <div className='textbox-container'   style={{width:isHalfWidth? '48%':'100%'}}>
        <input type='text' placeholder={placeholder}
                className='textbox-container_input' 
              
        />
    </div>
    );

}

export default Textbox;