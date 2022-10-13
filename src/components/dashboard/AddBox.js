import InputForm from "../InputForm";
import Button from "../Button";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useGetAllRecipeQuery} from "../../features/recipes/recipesApi";
import { useCreateBoxesMutation } from "../../features/boxes/boxesApi";
import { openAlert, specifyMessage } from "../../features/alert/alertSlice";
import { useDispatch } from "react-redux";

function AddBox() {
    const dispatch = useDispatch()

    const {fontColor,bcgColor, light} = useSelector(state=>state.color)
    let { data:  resRecipes, isSuccess} = useGetAllRecipeQuery()

    const [recipes, setRecipes] = useState([])
    const [boxCreate] =useCreateBoxesMutation()
    useEffect(() => {
        
        if (isSuccess){
            let dataRecipes = new Set(resRecipes.map(recipe=>recipe.title))
            dataRecipes?
            setRecipes([...dataRecipes])
            : setRecipes([])
        }
    }, [resRecipes])
        


    const basicModelForm = [
        {
            label: "Name",
            input: {
                name: 'name',
                key: 'name',
                type: 'text',
                required: 'required',
                defaultValue: 'Name the box!',
                autoComplete: 'off'
            }
        },
        {
            label: "Price",
            input: {
                name: 'price',
                key: 'price',
                type: 'number',
                required: 'required',
                autoComplete: 'off'
            }
        },
        {
            label: "Calification",
            input: {
                name: 'calification',
                key: 'calification',
                type: 'number',
                required: 'required',
                autoComplete: 'off'
            }
        },
        {
            label: "Serves",
            input: {
                name: 'serves',
                key: 'serves',
                type: 'number',
                required: 'required',
                autoComplete: 'off'
            }
        }
    ]

const makingSelect = recipe => {
    return (
        <option value={recipe} className="recipe-option">{recipe} </option>
    )
}

const [selectRecipe, setSelectRecipe] = useState()
console.log(selectRecipe)

    const addBox = (e) => {
        e.preventDefault()

        let inputs = Array.from(e.target);
        inputs= inputs.filter((input) => input.name);
        
        let dataInputs = inputs.reduce((data, inputValue)=>{
            data[inputValue.name] = inputValue.value
            return data
        },{});

            let box = {
                name: dataInputs.name ,
                recipe: selectRecipe,
                price: dataInputs.price,
                calification: dataInputs.calification,
                serves: dataInputs.serves,
            }
            boxCreate(box).unwrap().then(res => {
                dispatch(specifyMessage(res.message))
                dispatch(openAlert(res.success))
            }).catch(err => {
                dispatch(specifyMessage(err.data.message))
                dispatch(openAlert(false))
            })
    }

    return (
        <div>
            <h2> Box Creation!</h2>
            <select  className="user-panel-role" 
                        onLoad={e => setSelectRecipe(e.target.value)}
                        onChange={e => setSelectRecipe(e.target.value)}>
            <option value="none" className="recipe-option" > Select an Approved recipe</option>
            {recipes?.map(makingSelect)}
        </select> 
        <form onSubmit={addBox} className="addbox-form">
                {basicModelForm.map((props) =>
                    <InputForm {...props}
                    style={{ color: fontColor }}  />)}
                <Button >
                    Save
                </Button>
            </form> 
        </div>
    )
}

export default AddBox