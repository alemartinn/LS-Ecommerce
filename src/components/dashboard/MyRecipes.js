import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import {  useRecipesFromUserQuery } from "../../features/recipes/recipesApi"
import '../../styles/profile/MyRecipes.css'
import CardRecipe from "../CardRecipe"
export default function MyRecipes(props) {
    const { user } = useSelector(state=>state.user)
    const {data:recipeRes} = useRecipesFromUserQuery() 
    console.log(recipeRes)
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <div>
                <h2>My Recipes</h2>
                <div className="my-recipe">
                    <Link to="create" className="my-recipe-button">create a recipe</Link>
                    <Link to="edit" className="my-recipe-button">edit a recipe</Link>
                </div>
                <Outlet />
                <div style={{display:"flex",margin:"30px 0",gap:"20px"}}>
                   { recipeRes?.map((item,index) => (
                        <CardRecipe image={item.image} title={item.title} key={index}/>
                   ))}
                </div>
            </div>
        </div>
    )
}