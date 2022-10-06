import { Link } from 'react-router-dom';
import '../styles/ModalCard.css'

export default function ModalCard() {

  return (
    <div className="modal-card-container">
      <div className='modal-card-title'>
        <p>Recipe Name</p>
      </div>
      <div className='modal-card-img-container'>
        <img className='modal-card-img' src='https://cocinateelmundo.com/wp-content/uploads/2018/06/comida-asiatica-cocinateelmundo-16.jpg'></img>
      </div>
      <div className='modal-card-description'>
          <h2>Description</h2>
        <div className='modal-card-sub-description'>
          <span>⭐⭐⭐</span>
          <span>Ingredients</span>
          <span>Serves 2 or 4 people</span>
          <span> Time</span>
          <span> Kcal</span>
        </div>
        <div className='modal-card-link-add'>
          <Link to={"/detail"} className="modal-card-recipe">Recipe Link</Link>
          <button className='modal-card-button'>ADD to Cart</button>
        </div>
      </div>
    </div>
  );
}