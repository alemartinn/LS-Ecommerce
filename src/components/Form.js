import InputForm from "./InputForm";
import Button from "./Button";
import '../styles/form/Form.css'
import { useSelector } from "react-redux";

const Form = ({modelForm, Title, handleSubmit}) => {
    const {fontColor, fourthColor} = useSelector(state=>state.color)
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <span className="form-title" style={{color:fontColor}}>{Title}</span>
            {modelForm.map(atrib => 
                <InputForm 
                    name={atrib.name}
                    label={atrib.label}
                    type={atrib.type}
                    id={atrib.name}
                    key={atrib.name}
                    autoComplete="on"
                    style={{
                        color: fontColor,
                        backgroundColor: fourthColor
                    }}
                />
            )}
            <Button>
                Send
            </Button>
        </form>
    );
}

export default Form;