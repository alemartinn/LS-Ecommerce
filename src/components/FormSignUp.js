import Form from "./Form";
import '../styles/form/FormSignUp.css'
import GoogleSignUp from "./GoogleSignUp";

const FormSignUp = ({ showSignInForm }) => {

    const modelSignIn = [
        {name: 'name', type: 'text', required: 'required'},
        {name:'email', type: 'email', required: 'required', autoComplete: 'on'},
        {name:'password', type: 'password', required: 'required', autoComplete: 'on'}
    ]
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let inputs = Array.from(e.target)
        inputs= inputs.filter((input) => input.name)
        
        let dataInputs = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{})
        console.log(dataInputs)
        let dataUser = {
            name: dataInputs.name,
            lastname: '',
            email: dataInputs.email,
            password: dataInputs.password,
            photo: '',
            role: 'user',
            from: 'form',
        }
        console.log('Sending...',dataUser)
    };
    
    return (
        <div className="formSignUp-container">
            <div className="formSignUp-content">
            <Form modelForm={modelSignIn} handleSubmit={handleSubmit} Title={'Sign Up'}/>
            <span className='formSignIn-lineForm'>
                <div className='formSignIn-DivOrForm'>
                    <span className='formSignIn-SpanOrForm'>
                        or
                    </span>
                </div>
            </span>
            <GoogleSignUp/>
            <div className='formSignIn-optionSignIn'>
                <span>Do you have an account? </span>
                <button type='button' className="formSign-buttonSignIn" onClick={showSignInForm}>Sign In</button>
            </div>
            </div>
        </div>
     );
}

export default FormSignUp;