import '../styles/form/InputForm.css'

const InputForm = (props) => {
    return (  
        <div className='inputForm-field'>
            <label className='inputForm-label'>{props.name}</label>
            <input className='inputForm-input'/>
        </div>
    );
}
 
export default InputForm;