import Form from "./Form";
import GoogleSignIn from "./GoogleSignIn";
import { useDispatch, useSelector } from "react-redux";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import '../styles/form/FormSignIn.css'

const FormSignIn = ({ showSignUpForm }) => {

    const { fontColor } = useSelector(state => state.color)
    const dispatch = useDispatch();
    const [userSignIn] = useUserSignInMutation();
    
    const modelSignIn = [
        {name:'email', type: 'email', required: 'required', autoComplete: 'on'},
        {name:'password', type: 'password', required: 'required', autoComplete: 'on'}
    ]
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputs = Array.from(e.target);
        inputs= inputs.filter((input) => input.name);

        let dataInputs = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{});

        console.log('Sending... ',dataInputs)
        // const {data, error} = await userSignIn(dataUser);
        // if(error){
        //     console.log(error);
        // } else{
        //     console.log(data);
        //      dispatch()
        // }
    };

    return ( 
        <div className='formSignIn-container'>
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
                <button type='button' className="formSign-buttonSignUp" onClick={showSignUpForm}>Sign up</button>
            </div>
        </div>
     );
}

export default FormSignIn;