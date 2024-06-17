import './textbox.css';

function Textbox(props){
    const {type='text' , isHalfWidth=false , placeholder='Enter Text', onChange,value}= props;

    return(
    <div className='textbox-container'   style={{width:isHalfWidth? '48%':'100%'}}>
        <input type={type} placeholder={placeholder}
                className='textbox-container_input' 
                onChange={onChange} //change handler
                value={value}
              
        />
    </div>
    );

}

export default Textbox;