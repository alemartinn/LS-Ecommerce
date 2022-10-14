import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {closeModal} from "../features/modal/modalSlice"
import { Link } from 'react-router-dom';
import { useGetOneBoxQuery } from '../features/boxes/boxesApi';
import '../styles/ModalCard.css'

export default function ModalCard({id}) {

  const {data:boxRes} = useGetOneBoxQuery(id)
  const dispatch = useDispatch()
  const[box,setBox] = useState({})
  useEffect(()=>{
    if(boxRes){
      setBox(boxRes)
    }
  },[boxRes])

  const { fontColor } = useSelector(state => state.color)

  const printBox = (item) =>(
    <div className="modal-card-container">
      <div className="modal-card-background"></div>
      <div className='modal-card-title'>
        <p className='modal-card-title-p'>{item.name}</p>
      </div>
      <div className='modal-card-description'>
        <div className="modal-card-img-container">
          <img
            className='modal-card-img'
            alt={item.recipe.title}
            src={item.recipe.image} />
        </div>
        <div className='modal-card-sub-description'>
          <span className='modal-card-span'>Calification: {"⭐".repeat(item.calification)}</span>
          <span className='modal-card-span'>Price: ${item.price}</span>
          <span className='modal-card-span'>Serves :  {item.serves} people</span> 
        </div>
        </div>
        <div className='modal-card-link-add'>
          <Link to={`/details/${item.recipe._id}`} className="btn-main" style={{textDecoration: 'none'}}
            onClick={()=> dispatch(closeModal())}
          >Recipe Details</Link>
        </div>
    </div>
  )

  return (
    <>
      {box.recipe?printBox(box):<p>loading...</p>}
    </>
  );
}