import InputForm from "./InputForm";
import styled from "styled-components"
import Button from "./Button";
import { useSelector } from "react-redux";

const Form = ({modelForm, Title, handleSubmit}) => {
    
    const { fontColor } = useSelector(state => state.color)

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
            <Button bcgcolor={'var(--third-color)'} fontcolor={'white'}>
                Send
            </Button>
        </FormUsers>
    );
}

const FormUsers = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    min-width: 290px;
    width: 45%;
    max-width: 600px;

    color: rgb(36, 36, 36);
    margin: 0px;
    padding: 1vh 0;
    font-family: Agrandir, Verdana, Geneva, sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    border: 1px solid var(--third-color);
    border-radius: 20px;
`

const FormTitle = styled.span`
    margin: 2vh 0;
`

export default Form;