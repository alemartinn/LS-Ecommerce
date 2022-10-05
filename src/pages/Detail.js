import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import '../styles/Detail.css'
export default function Detail() {
    const navigate = useNavigate()
  return (
    <div className='container'>
        <Banner>
            <BannerImg src="https://www.wellandgood.com/wp-content/uploads/2015/05/meal_delivery_provenance.jpg" />
        </Banner>

        <div className='main'>
            <div className='detailModal'>
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
                <div className='defail-allInfo'>
                    <div className='detail-info'>
                        <p>Tags</p>
                        <p>Allergens</p>
                        <p>Ingredients</p>
                        <p>Recipe Steps</p>
                    </div>
                    <div className='detail-moreInfo'>
                        <p>Details</p>
                        <p>Time: 20hs</p>
                        <p>Prep time : 1h</p>
                        <p>Difficulty: HARSH</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
`
const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`