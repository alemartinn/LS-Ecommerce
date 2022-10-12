import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import {  useRecipesFromUserQuery } from "../../features/recipes/recipesApi"
import '../../styles/profile/MyRecipes.css'
import CardRecipe from "../CardRecipe"
export default function MyRecipes() {
    const { data: recipeRes } = useRecipesFromUserQuery() 
    const {fontColor} = useSelector(state=>state.color)
    return (
        <div className="my-recipe-container" style={{color:fontColor}}>
                <h2 className="title">My Recipes</h2>
                <div className="my-recipe-nav">
                <Link to="create"
                    className="my-recipe-button"
                    style={{color:fontColor}}>create a recipe</Link>
                <Link to="edit"
                    className="my-recipe-button"
                    style={{color:fontColor}}>edit a recipe</Link>
                </div>
                <Outlet />
                <div className="my-recipe">
                   { recipeRes?.map((item) => (
                        <CardRecipe image={item.image} title={item.title} key={item._id}/>
                   ))}
                </div>
                <section className='newrecipes-container-recipe' style={{backgroundColor: '#a7bb9275', color:fontColor}}>
                    <div className='newrecipes-container-recipe-img'>
                        <Link 
                            to='/recipes' 
                            className='recipes-container-newrecipe-button'
                        >
                            <span>See more recipes</span>
                        </Link>
                    </div>
                    <div className='newrecipes-container-recipe-text'>
                        <h2>Discover more recipes!</h2>
                        <span>Are you looking for tasty dishes? Or some recipe easy-to-make? Enjoy watching our collection.</span>
                    </div>
                </section>
        </div>
    )
}
