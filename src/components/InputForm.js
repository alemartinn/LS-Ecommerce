import '../styles/form/InputForm.css'

const InputForm = (props) => {
    return (  
        <div className='inputForm-field'>
            {/* {
                props.name && <label className='inputForm-label'>{props.name}</label>
            }
            <input className='inputForm-input' {...props.input}/> */}

            <label className='inputForm-label' style={{ ...props.style }}>
                <p>{props.label}</p>
                <input className='inputForm-input' {...props.input}
                    style={{ ...props.style }} />
            </label>
        </div>
    );
}
 
export default InputForm;