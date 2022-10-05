import styled from "styled-components";

const InputForm = (props) => {
    return (  
        <FieldForm>
            <LabelForm htmlFor={props.name}>{props.name}</LabelForm>
            <Input {...props}/>
        </FieldForm>
    );
}
 
const FieldForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5vh;
    width: 80%;

    @media (max-width: 768px){
        width: 70%;
    }
`;

const Input = styled.input`
    font-family: Source Sans Pro, "Trebuchet MS", Helvetica, sans-serif;
    font-weight: 200;
    color: rgb(80, 80, 80);
    padding: 12px;
    font-size: 17px;

    height: 48px;
    width: 100%;
    padding: 1vh;
    outline: none;
    border: 1px solid var(--third-color);
    border-radius: 10px;

    &:focus{
        background-color: transparent;
    }

    @media (max-width: 768px){
        width: 100%;
    }
`;

const LabelForm = styled.label`
    color: rgb(80, 80, 80);
    font-family: Agrandir, Verdana, Geneva, sans-serif;
    font-size: 18px;
    &:first-letter {
        text-transform: uppercase;
    }
`;

export default InputForm;