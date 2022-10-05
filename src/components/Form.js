import InputForm from "./InputForm";
import Button from "./Button";
import { useSelector } from "react-redux";
import '../styles/form/Form.css'

const Form = ({modelForm, Title, handleSubmit}) => {
    
    const { thirdColor, fontColor } = useSelector(state => state.color)

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
            <Button bcgcolor={thirdColor} fontcolor={fontColor}>
                Send
            </Button>
        </form>
    );
}

export default Form;