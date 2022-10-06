import { Link } from 'react-router-dom';
import '../styles/ModalCard.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1200,
  minWidth: 290,
  width: '80%',
  height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function ModalCard() {

  return (
    <>
      <div className='modalCard-img-description'>
        <img className='modalCard-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg'></img>
        <div className='modalCard-description'>
          <h2>Description</h2>
          <span>Serves 2 or 4 people</span>
          <span> Time</span>
          <span> Kcal</span>
        </div>
      </div>
      <div className='modalCard-star-ingredients'>
        <span>⭐⭐⭐</span>
        <span>Ingredients</span>
      </div>
      <div className='modalCard-link-add'>
        {/* <span>Recipe Link</span> */}
        <Link to={"/detail"} className="modalCard-recipe">Recipe Link</Link>
        <button className='modalCard-button'>ADD to Cart</button>
      </div>
    </>
  );
}