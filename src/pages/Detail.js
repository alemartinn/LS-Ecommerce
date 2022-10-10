import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetOneRecipeQuery } from '../features/recipes/recipesApi'
import '../styles/Detail.css'
export default function Detail() {
    const id = "63401a20e2b05a7ab0e27c0b"
    const {data:recipeRes} = useGetOneRecipeQuery(id)
    const navigate = useNavigate()

    const printRecipe = (item) => (
        <article className='detail-article'>
            <div className='detail-modal'>
                <div className='detail-container'>
                    <h2 className='detail-title'>{item.title}</h2>
                    <div className='detail-back-add'>
                        <button onClick={()=> navigate('/')}>Go Back</button>
                        <button>ADD</button>
                    </div>
                </div>
                <div className='detail-sub-description'>
                    <p className='detail-subtitle'>{item.category}</p>
                    <img src={item.image} />
                    <p className='detail-description'>{item.description}</p>
                </div>
                <div className='detail-all-info'>
                    <div className='detail-info'>
                        {/* <p>Tags</p> */}
                        <p>Allergens: {item.allergens.map(item => item)}</p>
                        <p>Ingredients:</p>
                        <p>{item.ingredients.map(item => (
                            <div style={{display:"flex",gap:"30px",justifyContent:"space-between",fontSize:"24px"}}>
                                <span>{item.quantity} </span> 
                                <span>{item.name}</span>
                            </div>
                        ))}</p>
                        {/* <p>Recipe Steps</p> */}
                    </div>
                    <div className='detail-more-info'>
                        <p>Details</p>
                        <p>Time: {item.preptime} min</p>
                        {/* <p>Prep time : 1h</p> */}
                        {/* <p>Difficulty: HARSH</p> */}
                        <p>Calories: {item.calories}</p>
                    </div>
                </div>
            </div>
        </article>
    )

  return (
    <main className='detail-main'>
        <div className='detail-banner'>
            <img className='detail-banner-img' src="https://www.wellandgood.com/wp-content/uploads/2015/05/meal_delivery_provenance.jpg" alt="recipe-banner" />
        </div>
        {printRecipe(recipeRes)}
        
    </main>
  )
}
