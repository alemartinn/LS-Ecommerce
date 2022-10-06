import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Detail.css'
export default function Detail() {
    const navigate = useNavigate()
  return (
    <main className='detail-main'>
        <div className='detail-banner'>
            <img className='detail-banner-img' src="https://www.wellandgood.com/wp-content/uploads/2015/05/meal_delivery_provenance.jpg" alt="recipe-banner" />
        </div>

        <article className='detail-article'>
            <div className='detail-modal'>
                <div className='detail-container'>
                    <h2 className='detail-title'>Title/Name</h2>
                    <div className='detail-back-add'>
                        <button onClick={()=> navigate('/')}>Go Back</button>
                        <button>ADD</button>
                    </div>
                </div>
                <div className='detail-sub-description'>
                    <p className='detail-subtitle'>Subtitle</p>
                    <p className='detail-description'>Description...Description...Description...Description...Description...Description...</p>
                </div>
                <div className='detail-all-info'>
                    <div className='detail-info'>
                        <p>Tags</p>
                        <p>Allergens</p>
                        <p>Ingredients</p>
                        <p>Recipe Steps</p>
                    </div>
                    <div className='detail-more-info'>
                        <p>Details</p>
                        <p>Time: 20hs</p>
                        <p>Prep time : 1h</p>
                        <p>Difficulty: HARSH</p>
                    </div>
                </div>
            </div>
        </article>
    </main>
  )
}
