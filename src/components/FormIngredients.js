import { useRef } from "react"
import { useSelector } from "react-redux"


const FormIngredients = ({id, onChangeInput}) => {

    const inputRefName = useRef();
    const inputRefCategory = useRef();
    const inputRefQuantity = useRef();
    const { fontColor } = useSelector(state=>state.color)

    const handleChange = () => {
        const ingredient = {
            name: inputRefName.current.value,
            category: inputRefCategory.current.value,
            quantity: inputRefQuantity.current.value
        }
        onChangeInput(id, ingredient)
    }

    return (
        <fieldset className="field-ingredient-container" style={{
            color: fontColor,
            backgroundColor: 'inherit'
        }}>
            <input 
                name="name"
                className="field-ingredient-input" 
                style={{
                    color: fontColor,
                    backgroundColor: 'inherit'
                }}
                placeholder="Ingredient name"
                ref={inputRefName}
                onChange={handleChange}
            />
            <input 
                name="categoryIngredient"
                className="field-ingredient-input" 
                style={{
                    color: fontColor,
                    backgroundColor: 'inherit'
                }} 
                placeholder="Ingredient category"
                ref={inputRefCategory}
                onChange={handleChange}
            />
            <input 
                name="quantity"
                className="field-ingredient-input" 
                style={{
                    color: fontColor,
                    backgroundColor: 'inherit'
                }} 
                placeholder="Quantity"
                ref={inputRefQuantity}
                onChange={handleChange}
            />
        </fieldset>
    )
}

export default FormIngredients;