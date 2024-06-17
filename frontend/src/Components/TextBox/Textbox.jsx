import './textbox.css';

function Textbox(props){
    const {isHalfWidth=false , placeholder='Enter Text'}= props;

    return(
    <div className='textbox-container'>
        <input type='text' placeholder={placeholder}
                className='textbox-container_input' 
                style={{width:isHalfWidth? '50%':'100%'}}
        />
    </div>
    );

}

export default Textbox;