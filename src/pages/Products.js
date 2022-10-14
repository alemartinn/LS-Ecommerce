import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import ButtonRecipes from '../components/ButtonRecipes';
import Card from '../components/Card';
import InputSearch from '../components/InputSearch';
import { useAllBoxesQuery, useGetBoxesByFilterQuery } from '../features/boxes/boxesApi';
import '../styles/Products.css'

const Products = () => {

    const { bcgColor, fontColor } = useSelector(state=> state.color);

    const [ allBoxes, setAllBoxes ] = useState();
    const [ categorySelected, setCategorySelected] = useState('')
    const [ boxesByFilter, setBoxesByFilter] = useState({name: '', category: ''});
    const [ allFilteredBoxes, setAllFilteredBoxes] = useState();

    const { data } = useAllBoxesQuery();
    const { data: filteredBoxesData } = useGetBoxesByFilterQuery(boxesByFilter);

    useEffect(()=>{
        if( data ) {
            setAllBoxes(data)
        }
    },[data])

    useEffect(()=> {
        console.log(filteredBoxesData)
        if ( filteredBoxesData ){
            setAllFilteredBoxes(filteredBoxesData)
        }
    }, [filteredBoxesData])

    const changeCategorySelected = (category) => {
        setCategorySelected(category)
        setBoxesByFilter({...boxesByFilter, category: category})
    }
    const handleInput = (e) => {
        setBoxesByFilter({...boxesByFilter, name: e.target.value});
    };

    const showBoxesCards = (boxes) => {
        return(
            <section className='recipes-container-recipes-cards'>
                <h2 className='recipes-container-title-category-choosed'>Category: {categorySelected ? categorySelected : 'All'} ({allFilteredBoxes.length})</h2>
                <div className='recipes-container-recipe-card'>
                    {boxes.map((box, index) => <Card item={box} key={index}/>)}
                </div>
                <Button type='button' btnColor={'btn-main-green-light'}>More recipes</Button>
            </section>
        )
    }

    const showBoxesCategories = (boxes) => {
        let allCategories = boxes.map( box => box.recipe.category )
        let categories = [...new Set(allCategories)]
        return (
            <section className='recipes-container-categories'>
                <span className='recipes-container-title-category'>Choose a category</span>
                <div className='recipes-categories-buttons'>
                    <ButtonRecipes changeCategorySelected={changeCategorySelected} category=''>All</ButtonRecipes>
                    {categories.map((category, index) => <ButtonRecipes category={category} key={index} changeCategorySelected={changeCategorySelected}>{category}</ButtonRecipes>)}
                </div>
            </section>
        )
    }
    
    return (  
        <main className="product-main" style={{backgroundColor: bcgColor, color: fontColor}}>
            <div className="product-container">
                <InputSearch placeholder={'Search a box product'} type={'search'} handleInput={handleInput}/>

                {
                    allBoxes && showBoxesCategories(allBoxes)
                }
                
                {
                    allFilteredBoxes && showBoxesCards(allFilteredBoxes)
                }

            </div>
        </main>
    );
}
 
export default Products;