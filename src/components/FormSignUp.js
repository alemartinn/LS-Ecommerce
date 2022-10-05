import Form from "./Form";
import styled from "styled-components";


const FormSignUp = () => {

    const modelSignIn = [
        {name:'email', type: 'email', required: 'required', autoComplete: 'on'},
        {name:'password', type: 'password', required: 'required', autoComplete: 'on'}
    ]
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let inputs = Array.from(e.target)
        inputs= inputs.filter((input) => input.name)
        
        let dataUser = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{})
        console.log(dataUser)
    };
    
    return ( 
        <SignUpContainer>
            <Form modelForm={modelSignIn} handleSubmit={handleSubmit} Title={'Sign Up'}/>
        </SignUpContainer>
     );
}
 

const SignUpContainer = styled.div`
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

export default FormSignUp;