import '../styles/form/InputForm.css'

const InputForm = (props) => {
    return (  
        <div className='inputForm-field'>
            <label className='inputForm-label' style={{ ...props.style }}>
                <p>{props.label}</p>
                <input className='inputForm-input' {...props.input}
                    style={{ ...props.style }} />
            </label>
        </div>
    );
}
 
export default InputForm;