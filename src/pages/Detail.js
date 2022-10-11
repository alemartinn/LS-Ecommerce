import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetOneRecipeQuery } from '../features/recipes/recipesApi'
import '../styles/Detail.css'
export default function Detail() {
    const {id} = useParams();
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
                    <img className='detail-img' src={item.image} alt='img-item' />
                    <p className='detail-description'>{item.description}</p>
                </div>
                <div className='detail-all-info'>
                    <div className='detail-info'>
                        <p className='detail-info-p'><span style={{fontWeight:"bold"}}>Allergens:</span> {item.allergens.map(item => item)}</p>
                        <p className='detail-info-p' style={{textAlign:"center",margin:"10px 0"}}><span style={{fontWeight:"bold"}}>Ingredients:</span></p>
                        <div>{item.ingredients.map((item, index) => (
                            <div className='detail-table' key={index} style={{display:"flex",gap:"30px",justifyContent:"space-between",fontSize:"24px"}}>
                                <span className='detail-info-p'>{item.quantity} </span> 
                                <span className='detail-info-p'>{item.name}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='detail-more-info'>
                        <p className='detail-info-p' style={{marginTop:"10px",fontWeight:"bold"}}>Details</p>
                        <p className='detail-info-p'><span style={{fontWeight:"bold"}}>Time:</span> {item.preptime} min</p>
                        <p className='detail-info-p'><span style={{fontWeight:"bold"}}>Calories:</span> {item.calories}</p>
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
        { recipeRes && printRecipe(recipeRes)}
        
    </main>
  )
}
