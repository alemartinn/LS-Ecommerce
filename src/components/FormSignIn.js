import Form from "./Form";
import GoogleSignIn from "./GoogleSignIn";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../features/user/userSlice"
import { closeModal } from "../features/modal/modalSlice"
import { useUserSignInMutation } from "../features/actions/usersAPI";
import '../styles/form/FormSignIn.css'

const FormSignIn = ({ showSignUpForm }) => {

    const { fontColor, fourthColor, thirdColor } = useSelector(state => state.color)
    const dispatch = useDispatch();
    const [userSignIn] = useUserSignInMutation();
    
    const modelSignIn = [
        {name:'email',label:"Name", type: 'email', required: 'required', autoComplete: 'on'},
        {name:'password',label:"Password", type: 'password', required: 'required', autoComplete: 'on'}
    ]
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputs = Array.from(e.target);
        inputs= inputs.filter((input) => input.name);

        let dataInputs = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{});

        userSignIn(dataInputs).unwrap().then(res => {
            if (res.success) {
                dispatch(setCredentials(res.response))
                dispatch(closeModal())
            }
            // aca se activaria la alerta y se usaria la respuesta
        })
    };

    return ( 
        <div className='formSignIn-container'
            style={{
                color: fontColor,
                backgroundColor: fourthColor
            }}>
            <div className="formSignIn-content"
                style={{
                borderColor: thirdColor
            }}>
            <Form modelForm={modelSignIn} handleSubmit={handleSubmit} Title={'Sign In'}/>
            <span className='formSignIn-lineForm'>
                <div className='formSignIn-DivOrForm'>
                    <span className='formSignIn-SpanOrForm'>
                        or
                    </span>
                </div>
            </span>
            <GoogleSignIn/>
            <div className='formSign-optionSignUp'>
                <span>Don't have an account? </span>
                    <button type='button'
                        className="formSign-buttonSignUp"
                        onClick={showSignUpForm}
                        style={{backgroundColor:fourthColor, color:fontColor}}
                    >Sign up</button>
            </div>
            </div>
        </div>
     );
}

export default FormSignIn;