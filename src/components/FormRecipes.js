import { useDispatch, useSelector } from "react-redux";
import { openAlert, specifyMessage } from "../features/alert/alertSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useCreateRecipeMutation } from "../features/recipes/recipesApi";
import { setCredentials } from "../features/user/userSlice";
import Button from "./Button";
import InputForm from "./InputForm";
import '../styles/FormRecipes.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FormIngredients from "./FormIngredients";

const FormRecipes = () => {
    const { fontColor } = useSelector(state=>state.color)
    const [ arrIngredients, setArrIngredients ] = useState([{}]);
    
    const dispatch = useDispatch();
    const [createRecipe] = useCreateRecipeMutation();

    let modelNewRecipe = [
        {name:'title',label:"recipe name", type: 'text', required: 'required'},
        {name:'category',label:"category: (Ej: Vegan, High Protein, etc)", type: 'text', required: 'required'},
        {name:'preptime',label:"preptime: (Minutes)", type: 'number', required: 'required'},
        {name:'image',label:"image: (Url)", type: 'text', required: 'required'},
        {name:'allergens',label:"allergens", type: 'text', required: 'required'},
        {name:'calories',label:"calories (Kcal)", type: 'text', required: 'required'},
        {name:'description',label:"description", type: 'text', required: 'required'},
    ]

    const addFieldIngredient = () => {
        setArrIngredients([...arrIngredients, {}]);
    }

    const onChangeInput = (id, ingredient) => {
        let copy = [...arrIngredients]
        copy[id] = ingredient;
        setArrIngredients([...copy])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputs = Array.from(e.target);
        inputs= inputs.filter((input) => input.name);
        
        let dataInputs = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{});

        let recipe = {
            title: dataInputs.title,
            category: dataInputs.category,
            image: dataInputs.image,
            calories: dataInputs.calories,
            preptime: dataInputs.preptime,
            ingredients: arrIngredients,
            allergens: [dataInputs.allergens],
            description: dataInputs.description
        }

        createRecipe(recipe).unwrap().then(res => {
            if (res.success) {
                dispatch(setCredentials(res.response))
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
                        color: fontColor,
                        backgroundColor: 'inherit'
                    }}
                    key={atrib.name}
                />
            )}
            <div className="form-recipes-container-ingredients">
                <div>
                    <span>Ingredients: (Ex: Tomato - Vegetal - 2 Units)</span>
                    <button type="button" onClick={addFieldIngredient} className="add-field-ingredient" style={{backgroundColor: 'inherit', color: fontColor}}>
                        Add <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                { arrIngredients.map((element, index) => <FormIngredients key={index} id={index} onChangeInput={onChangeInput}/>) }
                
            </div>

            <Button>
                Send
            </Button>
        </form>
    );
}
 
export default FormRecipes;