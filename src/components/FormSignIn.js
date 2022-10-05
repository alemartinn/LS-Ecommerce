import Form from "./Form";
import GoogleSignIn from "./GoogleSignIn";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useUserSignInMutation } from "../features/actions/usersAPI";
import { Link } from "react-router-dom";

const FormSignIn = () => {

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

        let dataUser = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{});
        console.log(dataUser)
        // const {data, error} = await dispatch(userSignIn(dataUser));
        // if(error){
        //     console.log(error);
        // } else{
        //     console.log(data);
        // }
    };
    
    return ( 
        <SignInContainer>
            <Form modelForm={modelSignIn} handleSubmit={handleSubmit} Title={'Sign In'}/>
            <LineForm><DivSpanForm><SpanForm fontcolor={fontColor}>or</SpanForm></DivSpanForm></LineForm>
            <GoogleSignIn/>
            <OptionSignUp>
                <span>Don't have an account? </span>
                <span>Sign up</span>
            </OptionSignUp>
        </SignInContainer>
     );
}
 
const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 456px;
    border: 1px solid var(--third-color);
    border-radius: 10px;
    padding: 3vh 0;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 3vh 0;
        margin: 0;
    }
    
`

const OptionSignUp = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 3vh;
    font-family: Agrandir, Verdana, Geneva, sans-serif;
    font-size: 18px;
`

const LineForm = styled.span`
    color: rgb(187, 187, 187);
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    width: 400px;

    &::before {
        content: "";
        width: 400px;
        border-top-width: 1px;
        border-top-style: solid;
    }

    &::after{
        content: "";
        width: 400px;
        border-top-width: 1px;
        border-top-style: solid
    }
    
    @media (max-width: 768px){
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const DivSpanForm = styled.div`
    padding: 0 15px;
`

const SpanForm = styled.span`
    color: ${props => props.fontcolor};
    font-family: "Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif;
    font-weight: 400;
    margin: 0px;
    font-size: 14px;
    line-height: 20px;
`
export default FormSignIn;