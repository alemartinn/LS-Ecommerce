import Form from "./Form";
import '../styles/form/FormSignUp.css'
import GoogleSignUp from "./GoogleSignUp";
import { useUserSignUpMutation } from "../features/actions/usersAPI"
import { useDispatch, useSelector } from "react-redux"
import { openAlert, specifyMessage } from "../features/alert/alertSlice"

const FormSignUp = ({ showSignInForm }) => {

    const { fontColor, fourthColor, thirdColor } = useSelector(state => state.color)
    const modelSignIn = [
        {name: 'name',label:"Name", type: 'text', required: 'required'},
        {name: 'lastname',label:"Last Name", type: 'text', required: 'required'},
        {name:'email',label:"Email", type: 'email', required: 'required', autoComplete: 'on'},
        {name:'password',label:"Password", type: 'password', required: 'required', autoComplete: 'on'}
    ]
    const dispatch = useDispatch()
    const [userSignUp] = useUserSignUpMutation()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let inputs = Array.from(e.target)
        inputs= inputs.filter((input) => input.name)
        
        let dataInputs = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{})
        let dataUser = {
            ...dataInputs,
            photo: 'http://localhost:3000/images/User_pfp.png',
            role: 'user',
            from: 'form',
        }
        userSignUp(dataUser).unwrap().then(res => {
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
    };
    
    return (
        <div className="formSignUp-container"
        style={{
            color: fontColor,
            backgroundColor: fourthColor
        }}>
            <div className="formSignUp-content"
            style={{
                borderColor: thirdColor
            }}>
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
                    <button type='button'
                        className="formSign-buttonSignIn"
                        onClick={showSignInForm}
                        style={{backgroundColor:fourthColor, color:fontColor}}
                    >Sign In</button>
            </div>
            </div>
        </div>
     );
}

export default FormSignUp;