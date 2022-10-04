import InputForm from "./InputForm";
import styled from "styled-components"

const Form = ({modelForm, Title, handleSubmit}) => {
    
    return (  
        <FormUsers onSubmit={handleSubmit}>
            <h2>{Title}</h2>
            {modelForm.map(atrib => 
                <InputForm 
                    name={atrib.name}
                    type={atrib.type}
                    id={atrib.name}
                    key={atrib.name}
                    autoComplete="on"
                />
            )}
            <button type="submit"> send </button>
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
    font-size: 22px;
    border: 1px solid green;
    font-family: "Pangea Display,Helvetica,Arial,sans-serif";
`

export default Form;