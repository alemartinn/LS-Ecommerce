import { useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom';
import '../styles/CardRecipe.css'

const CardRecipe = (props) => {

    const { bcgColor, fontColor } = useSelector(state => state.color)

    return (  
        <div className="card-recipe">
            <div className="card-recipe-info" style={{backgroundColor: bcgColor, color: fontColor}}>
                <LinkRouter to={`/details/${props.id}`} className='card-recipe-link'>
                    <img 
                        alt='food' 
                        className='card-recipe-img' 
                        src={props.image}
                        // src='https://img.hellofresh.com/ar_1,w_384,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/peppercorn-steak-w06-e4014085.jpg'
                    />
                </LinkRouter>
                <div className='card-recipe-container-name'>
                    <p className='card-recipe-name'>{props.title}</p>
                </div>
            </div>
        </div>
    );
}
 
export default CardRecipe;