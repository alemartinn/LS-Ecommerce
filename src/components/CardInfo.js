import React, { useEffect, useState } from 'react'
import { useGetOneRecipeQuery } from '../features/recipes/recipesApi'

export default function CardInfo(props) {
let id = props.id
const {data:recipeRes} = useGetOneRecipeQuery(id)
const [ingredient,setIngredient] = useState([])

useEffect(()=>{
    if(recipeRes){
        setIngredient(recipeRes)
    }
},[recipeRes])

    const renderInfo = (item) => (
            <tr key={item.name}>
                <td>{item.quantity}</td>
                <td>{item.name}</td>
            </tr>
    )
  return (
    <div>
    <table>
        <tbody>
            <tr>
                <th>Ingredients</th>
            </tr>
        {ingredient.ingredients?.slice(0,8).map(renderInfo)}

        </tbody>
    </table>

    </div>
  )
}
