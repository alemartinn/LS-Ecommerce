import { Link as LinkRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/NewRecipe.css'
import Form from '../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import FormRecipes from '../components/FormRecipes';

const NewRecipe = () => {
    
    const { bcgColor, fontColor, thirdColor } = useSelector(state => state.color);

    return (  
        <div className='newrecipe-main' style={{backgroundColor: bcgColor, color: fontColor}}>
            <div className='newrecipe-container '>
                <section className='newrecipe-container-steps' >
                        <h2 style={{ color: fontColor }}>How to create a recipe?</h2>
                        <div className="new-recipe-guides">
                            <div className="new-recipe-guide-box">
                                    <div className="new-recipe-guide-icon" style={{ backgroundColor: thirdColor }}>
                                        <FontAwesomeIcon icon={fa1} />
                                    </div>
                                    <h4 style={{ color: fontColor }}>Complete the form</h4>
                                    <p style={{ color: fontColor }}>Tell us by detailed way how to do your original recipe!</p>
                            </div>
                            <div className="new-recipe-guide-box">
                                    <div className="new-recipe-guide-icon" style={{ backgroundColor: thirdColor }}>
                                        <FontAwesomeIcon icon={fa2} />
                                    </div>
                                    <h4 style={{ color: fontColor }}>Wait the approvation</h4>
                                    <p style={{ color: fontColor }}>We will communicate with you as soon is possible if the recipe is original and marketable!</p>
                            </div>
                            <div className="new-recipe-guide-box">
                                    <div className="new-recipe-guide-icon" style={{ backgroundColor: thirdColor }}>
                                        <FontAwesomeIcon icon={fa3} />
                                    </div>
                                    <h4 style={{ color: fontColor }}>Start to sell it</h4>
                                    <p style={{ color: fontColor }}>Once your recipe is approoved it, we will sell it and you earn some commission for each sale!</p>
                            </div>
                        </div>
                </section>

                <div className='newrecipe-form'>
                    <FormRecipes/>
                </div>
            </div>
        </div>
    );
}
 
export default NewRecipe;