import styled from "styled-components";

const InputForm = (props) => {
    return (  
        <FieldForm>
            <LabelForm htmlFor={props.name}>{props.name}: </LabelForm>
            <Input {...props}/>
        </FieldForm>
    );
}
 
const FieldForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    font-family: Pangea Display,Helvetica,Arial,sans-serif;
    min-width: 250px;
    width: 270px;
    max-width: 400px;
    font-size: 20px;
    padding: 1vh;
    outline: none;
    border: 1px solid var(--third-color);
    border-radius: 20px;

    &:focus{
        background-color: none;
    }
`;

const LabelForm = styled.label`
    font-weight: 500;
    width: 100px;
    font-family: Pangea Display,Helvetica,Arial,sans-serif;
    text-transform: uppercase;
`;

export default InputForm;