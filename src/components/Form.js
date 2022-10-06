import InputForm from "./InputForm";
import Button from "./Button";
import '../styles/form/Form.css'

const Form = ({modelForm, Title, handleSubmit}) => {

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <span className="form-title">{Title}</span>
            {modelForm.map(atrib => 
                <InputForm 
                    name={atrib.name}
                    type={atrib.type}
                    id={atrib.name}
                    key={atrib.name}
                    autoComplete="on"
                />
            )}
            <Button>
                Send
            </Button>
        </form>
    );
}

export default Form;