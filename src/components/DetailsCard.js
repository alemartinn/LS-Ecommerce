import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetOneBoxQuery } from '../features/boxes/boxesApi';
import '../styles/ModalCard.css'

export default function ModalCard() {

  const {data:boxRes} =useGetOneBoxQuery("63407e8edb54bcb45e0bc2d4")
  console.log(boxRes)

  const[box,setBox] = useState([])
  useEffect(()=>{
    if(boxRes){
      setBox(boxRes)
    }
  },[boxRes])

  const printBox = (item) =>(
    <div className="modal-card-container">
      <div className='modal-card-title'>
        <p className='modal-card-title-p'>{item.name}</p>
      </div>
      <div className='modal-card-description'>
        <h2 style={{textAlign:"center"}}>Description:</h2>
        <div className='modal-card-sub-description'>
          <span className='modal-card-span'>Calification: {"⭐".repeat(item.calification)}</span>
          <span className='modal-card-span'>Price: ${item.price}</span>
          <span className='modal-card-span'>Serves :  {item.serves} peoples</span> 
        </div>
        <div className='modal-card-link-add'>
          <Link to={`/details/${item.recipe}`} className="modal-card-recipe">Recipe Link</Link>
          <button className='modal-card-button'>Add to Cart</button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {printBox(box)}
    </>
  );
}