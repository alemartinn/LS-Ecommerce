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
                <section className='newrecipe-container-steps'>
                    <div className="hiw-guide">
                        <h2 style={{ color: fontColor }}>How to create a recipe?</h2>
                        <div className="hiw-flex hiw-container">
                            <div className="hiw-box">
                                <img src="https://img.freepik.com/foto-gratis/cosechado-vista-manos-mecanografia-computadora_1262-3196.jpg" alt="Exercise Class" />
                                <div className="hiw-guide-info-container">
                                    <div className="hiw-guide-icon" style={{ backgroundColor: thirdColor }}>
                                        <FontAwesomeIcon icon={fa1} />
                                    </div>
                                    <h4 style={{ color: fontColor }}>Complete the form</h4>
                                    <p style={{ color: fontColor }}>Tell us by detailed way how to do your original recipe!</p>
                                </div>
                            </div>
                            <div className="hiw-box">
                                <img src="https://img.freepik.com/foto-gratis/pensando-cocinero-sexo-masculino-joven-uniforme-chef-gafas-sosteniendo-portatil-usado-aislado-pared-blanca_141793-78442.jpg?w=2000" alt="Chef communicating with you" />
                                <div className="hiw-guide-info-container">
                                    <div className="hiw-guide-icon" style={{ backgroundColor: thirdColor }}>
                                        <FontAwesomeIcon icon={fa2} />
                                    </div>
                                    <h4 style={{ color: fontColor }}>Wait the approvation</h4>
                                    <p style={{ color: fontColor }}>We will communicate with you as soon is possible if the recipe is original and marketable!</p>
                                </div>
                            </div>
                            <div className="hiw-box">
                                <img src="https://cdn.newsbook.com.mt/wp-content/uploads/2018/07/71048-61463.jpg" alt="Woman doing leg press" />
                                <div className="hiw-guide-info-container">
                                    <div className="hiw-guide-icon" style={{ backgroundColor: thirdColor }}>
                                        <FontAwesomeIcon icon={fa3} />
                                    </div>
                                    <h4 style={{ color: fontColor }}>Start to sell it</h4>
                                    <p style={{ color: fontColor }}>Once your recipe is approoved it, we will sell it and you earn some commission for each sale!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='newrecipe-form'>
                    {/* <Form styleProp={{width: '700px'}} modelForm={modelNewRecipe} title={'Create a Recipe!'} handleSubmit={handleSubmit}/> */}
                    <FormRecipes/>
                </div>

                <section className='newrecipes-container-recipe' style={{backgroundColor: '#a7bb9275'}}>
                    <div className='newrecipes-container-recipe-img'>
                        <LinkRouter 
                            to='/recipes' 
                            className='recipes-container-newrecipe-button'
                        >
                            <span>See more recipes</span>
                        </LinkRouter>
                    </div>
                    <div className='newrecipes-container-recipe-text'>
                        <h2>Discover more recipes!</h2>
                        <span>Are you looking for tasty dishes? Or some recipe easy-to-make? Enjoy watching our collection.</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
 
export default NewRecipe;