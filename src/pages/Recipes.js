import Button from '../components/Button'
import ButtonRecipes from '../components/ButtonRecipes'
import React from 'react';
import InputForm from '../components/InputForm'

import '../styles/Recipes.css'
import { useSelector } from 'react-redux';

const Recipes = () => {

    const { bcgColor, fontColor } = useSelector(state => state.color)
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (  
        <main className="recipes-main" style={{backgroundColor: bcgColor, color: fontColor}}>
            <div className="recipes-container">

                <div className='recipes-container-search-input'>
                    {/* <input type='search' className='recipes-search-input'/> */}
                    <InputForm type='search' placeholder={'Search a recipe'} onChange={(e) => handleChange(e)}/>
                </div>

                <section className='recipes-container-categories'>
                    <span className='recipes-container-title-category'>Categories</span>
                    <div className='recipes-categories-buttons'>
                        {/* <Button type='button' btnColor={'btn-main-green-light'} onClick={console.log('eaaaaaa')}>Pasta Recipes</Button> */}
                        <ButtonRecipes>Pasta Recipes</ButtonRecipes>
                        <ButtonRecipes>Soup</ButtonRecipes>
                        <ButtonRecipes>Soup</ButtonRecipes>
                        <ButtonRecipes>Soup Soup Soup Soup</ButtonRecipes>
                    </div>
                </section>

                <article className='recipes-container-article'>
                    <h3>An ocassion, a recipe</h3>
                    <span>In our company we take care of provide a lot recipes for each moment you need it.</span>
                    <p>Get fun discovering a lot of recipes in our menues.</p>
                </article>
                
                <section className='recipes-container-recipes-cards'>
                    container cards
                    <div className='recipes-container-recipe-card'>
                        card
                    </div>
                    <Button type='button' btnColor={'btn-main-green-light'} onClick={console.log('eaaaaaa')}>More recipes</Button>

                </section>
                
                <section className='recipes-container-recommended'>
                    <span>Recommended</span>
                    <div className='recipes-container-recommended-cards'>
                        Cards recommended
                    </div>
                </section>

                <article className='recipes-category-described'>
                    Some text descripting a category choosed
                </article>
            </div>
        </main>
    );
}
 
export default Recipes;