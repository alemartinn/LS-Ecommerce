
import InputForm from "../InputForm";
import Button from "../Button";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useGetAllRecipeQuery} from "../../features/recipes/recipesApi";
import { openAlert, specifyMessage } from "../../features/alert/alertSlice";
import { useDispatch } from "react-redux";
import _default from "react-redux/es/components/connect";
import { useAllBoxesQuery } from "../../features/boxes/boxesApi";


function EditBox() {
const dispatch = useDispatch()

const {fontColor,bcgColor, light} = useSelector(state=>state.color)
let {data: resBoxes} = useAllBoxesQuery()
let { data:  resRecipes, isSuccess} = useGetAllRecipeQuery()
const [recipes, setRecipes] = useState([])
const [boxes, setBoxes] =useState([])

const [selectRecipe, setSelectRecipe] = useState()
const [selectBox, setSelectedBox] = useState('')

useEffect(() => {
        
    if (isSuccess){
        let dataRecipes = resRecipes.map(recipe=>{
            return {title:recipe.title, id:recipe._id}})
        dataRecipes?
        setRecipes([...dataRecipes])
        : setRecipes([])
    }
  
}, [resRecipes])
    

useEffect(() => {
    if (resBoxes){
        let dataBoxes = resBoxes.map(box => {
            return {name:box.name, id:box._id, price:box.price, calification: box.calification, serves:box.serves}})
        dataBoxes?
        setBoxes([...dataBoxes])
        : setBoxes([])
    }
}, [resBoxes])


const basicModelForm = [
    {
        label: "Name",
        input: {
            name: 'name',
            key: 'name',
            type: 'text',
            required: 'required',
            defaultValue:selectBox.name,
            autoComplete: 'off'
        }
    },
    {
        label: "Price",
        input: {
            name: 'price',
            key: 'price',
            type: 'number',
            defaultValue: selectBox.price,
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
    <option value={recipe.id} className="recipe-option" key={recipe.id}>{recipe.title} </option>
)
}
const makingBoxesSelect = box => {
return (
    <option value={box.id} className="recipe-option" key={box.id}>{box.name} </option>
)
}


return (
    <>
        <h2> Box Managment</h2>
        <select className="box-panel-role" 
                    onLoad={e => setSelectedBox(e.target.value)}
                    onChange={e => setSelectedBox(e.target.value)}>
                        <option value=" " className="recipe-option" > Select a Box</option>
                        {boxes?.map(makingBoxesSelect)}
                    </select>
                    { selectBox?
    <div className="box-panel-background">
        <select  className="user-panel-role" 
                    onLoad={e => setSelectRecipe(e.target.value)}
                    onChange={e => setSelectRecipe(e.target.value)}>
            <option value="none" className="recipe-option" > Select an approved recipe</option>
        {recipes?.map(makingSelect)}
        </select> 
    <form  className="addbox-form">
            {basicModelForm.map((props) =>
                <InputForm {...props}
                style={{ color: fontColor }}  />)}
            <Button >
                Save
            </Button>
        </form> 
               
    </div> : null }
    </>
)
}

export default EditBox