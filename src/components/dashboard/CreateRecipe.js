import { useCreateRecipeMutation } from '../../features/recipes/recipesApi'
import '../../styles/CreateRecipe.css'
export default function CreateRecipe() {

    const arrayInput = [
        {name:"Title"},
        {name:"Image"},
        {name:"Description"},
        {name:"Calories"},
        {name:"Ingredients"},
        {name:"Preptime"},
        {name:"Allergens"},
        {name:"Category"}
    ]
    const [newRecipe] = useCreateRecipeMutation()
    const inputs = (item) => (
        <div key={item.name}>
            <input  className="input-name" placeholder={item.name} />
        </div>  
    )
const create = ()=>{
 
}
return (
        <div className="recipe-container">
            <div className="recipe-container-main">
                <h2>Create Recipe</h2>
                <form>
                    {arrayInput?.map(inputs)}
                    <div className='recipe-button'>
                        <button className='recipe-button-send' onClick={create}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}