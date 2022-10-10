import Button from '../components/Button'
import ButtonRecipes from '../components/ButtonRecipes'
import React, { useEffect, useState } from 'react';
import '../styles/Recipes.css'
import { useSelector } from 'react-redux';
import InputSearch from '../components/InputSearch';
import CardRecipe from '../components/CardRecipe';
import { useGetAllRecipeQuery } from '../features/recipes/recipesApi';

const Recipes = () => {

    
    const [inputRecipe, setInputRecipe] = useState('');
    const [ categoryRecipe, setCategoryRecipe] = useState();
    const [ allRecipes, setAllRecipes] = useState();
    const { bcgColor, fontColor } = useSelector(state => state.color);
    
    const handleChange = (e) => {
        setInputRecipe(e.target.value);
    };

    const { data } = useGetAllRecipeQuery(`/?recipe=${inputRecipe}/?category=${categoryRecipe}`);

    useEffect(()=>{
        if( data ){
            setAllRecipes(data)
        }
    },[data])

    const changeCategorySelected = (category) => {
        setCategoryRecipe(category)
    }

    const showRecipesCategories = (recipes) => {
        let allCategories = recipes.map( recipe => recipe.category )
        let categories = [...new Set(allCategories)]
        return (
            <section className='recipes-container-categories'>
                <span className='recipes-container-title-category'>Categories</span>
                <div className='recipes-categories-buttons'>
                    <ButtonRecipes changeCategorySelected={changeCategorySelected} category=''>All</ButtonRecipes>
                    {categories.map((category, index) => <ButtonRecipes category={category} key={index} changeCategorySelected={changeCategorySelected}>{category}</ButtonRecipes>)}
                </div>
            </section>
        )
    }

    const showRecipesCards = (recipes) => {
        return(
            <section className='recipes-container-recipes-cards'>
                <div className='recipes-container-recipe-card'>
                    {recipes.map((recipe, index) => <CardRecipe id={recipe._id} image={recipe.image} title={recipe.title} key={index}/>)}
                </div>
                <Button type='button' btnColor={'btn-main-green-light'}>More recipes</Button>
            </section>
        )
    }

    return (  
        <main className="recipes-main" style={{backgroundColor: bcgColor, color: fontColor}}>
            <div className="recipes-container">

                <div className='recipes-container-search-input'>
                    {/* <input type='search' className='recipes-search-input'/> */}
                    {/* <InputForm type='search' placeholder={'Search a recipe'} onChange={(e) => handleChange(e)}/> */}
                    <InputSearch placeholder={'Search'} type={'search'} inputRecipe={inputRecipe} handleChange={handleChange}/>
                </div>

                {
                    allRecipes && showRecipesCategories(allRecipes)
                }

                <article className='recipes-container-article'>
                    <h3>An ocassion, a recipe</h3>
                    <span>In our company we take care of provide a lot recipes for each moment you need it.</span>
                    <p>Get fun discovering a lot of recipes in our menues.</p>
                </article>
                
                {
                    allRecipes && showRecipesCards(allRecipes)
                }
                
                <section className='recipes-container-recommended'>
                    <span>Recommended</span>
                    <div className='recipes-container-recipe-card'>
                        <CardRecipe title={'Recommended Recipe'}/>
                        <CardRecipe title={'Recommended Recipe'}/>
                        <CardRecipe title={'Recommended Recipe'}/>
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