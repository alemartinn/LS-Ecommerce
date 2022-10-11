import { useDispatch, useSelector } from "react-redux";
import { openAlert, specifyMessage } from "../features/alert/alertSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useCreateRecipeMutation } from "../features/recipes/recipesApi";
import { setCredentials } from "../features/user/userSlice";
import Button from "./Button";
import InputForm from "./InputForm";
import '../styles/FormRecipes.css'

const FormRecipes = () => {
    const { fontColor } = useSelector(state=>state.color)

    const dispatch = useDispatch();
    const createRecipe = useCreateRecipeMutation();

    let modelNewRecipe = [
        {name:'title',label:"recipe name", type: 'text', required: 'required'},
        {name:'image',label:"image", type: 'text', required: 'required'},
        {name:'description',label:"description", type: 'text', required: 'required'},
        {name:'calories',label:"calories", type: 'text', required: 'required'},
        {name:'ingredients',label:"ingredients", type: 'text', required: 'required'},
        {name:'preptime',label:"preptime", type: 'number', required: 'required'},
        {name:'allergens',label:"allergens", type: 'text', required: 'required'},
        {name:'category',label:"category", type: 'text', required: 'required'},
    ]

    const handleSubmit = (e) => {
        e.prevent.default();
        let inputs = Array.from(e.target);
        inputs= inputs.filter((input) => input.name);

        let dataInputs = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{});

        createRecipe(dataInputs).unwrap().then(res => {
            if (res.success) {
                dispatch(setCredentials(res.response))
                dispatch(closeModal())
            }
            dispatch(specifyMessage(res.message))
            dispatch(openAlert(res.success))
        }).catch(err => {
            dispatch(specifyMessage(err.data.message))
            dispatch(openAlert(false))
        })
    }

    return (
        <form className="form-recipe-container" onSubmit={handleSubmit}>
            <span className="form-recipe-title" style={{color:fontColor}}>Recipes Form</span>
            {modelNewRecipe.map(atrib => 
                <InputForm 
                    label={atrib.label}
                    input={{
                        name:atrib.name,
                        type:atrib.type,
                        key:atrib.name,
                    }}
                    style={{
                        color: fontColor
                    }}
                    key={atrib.name}
                />
            )}
            <Button>
                Send
            </Button>
        </form>
    );
}
 
export default FormRecipes;