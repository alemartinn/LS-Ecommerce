import InputForm from "./InputForm";
import styled from "styled-components"
import Button from "./Button";
import { useSelector } from "react-redux";

const Form = ({modelForm, Title, handleSubmit}) => {
    
    const { thirdColor, fontColor } = useSelector(state => state.color)

    return (  
        <FormUsers onSubmit={handleSubmit}>
            <FormTitle>{Title}</FormTitle>
            {modelForm.map(atrib => 
                <InputForm 
                    name={atrib.name}
                    type={atrib.type}
                    id={atrib.name}
                    key={atrib.name}
                    autoComplete="on"
                />
            )}
            <Button bcgcolor={thirdColor} fontcolor={fontColor}>
                Send
            </Button>
        </FormUsers>
    );
}

const FormUsers = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2vh;
    min-width: 290px;
    width: 456px;
    max-width: 600px;
    color: rgb(36, 36, 36);
    margin: 0px;
    padding-top: 1vh;
    font-family: Agrandir, Verdana, Geneva, sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    @media (max-width: 768px){
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2vh;
        padding: 1vh 0;
        width: 100%;
        border: none;
    }
`

const FormTitle = styled.span`
    margin: 0;
    font-size: 28px;
`

export default Form;