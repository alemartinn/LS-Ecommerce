import InputForm from "../InputForm"
import Button from "../Button"
import { useSelector } from "react-redux"

function BoxPanel() {
    const {fontColor,bcgColor, light} = useSelector(state=>state.color)

    const basicModelForm = [
        {
            label: "Photo",
            input: {
                name: 'name',
                key: 'name',
                type: 'text',
                required: 'required',
                defaultValue: 'Name de box!',
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
                defaultValue: 'How much will cost?',
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
                defaultValue: 'from 1 to 5',
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
                defaultValue: 'from 1 to 5',
                autoComplete: 'off'
            }
        }
    ]

const makingSelect = recipe => {
    return (
        <option value={recipe} className="recipe-option" key={recipe._id}>{recipe} </option>
    )
}

    const addBox = (e) => {
        e.preventDefault()
    }

    return (
        <div>
        <select>
            <option value="none" className="recipe-option" > Select an Approved recipe</option>
            {recipe?.map(makingSelect)}
        </select>
        <form onSubmit={addBox} className="edit-profile-form">
                {basicModelForm.map((props) =>
                    <InputForm {...props}
                    style={{ color: fontColor }} />)}
                <Button >
                    Save
                </Button>
            </form> 
        </div>
    )
}

export default BoxPanel