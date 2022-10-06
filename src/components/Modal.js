import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import "../styles/Modal.css";

const Modal = (props) => {
  const dispatch = useDispatch()
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className='modal' onClick={() => { dispatch(closeModal()) }}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={() => { dispatch(closeModal()) }}>x</button>
        {props.children}
      </div>
    </article>
  )
}
export default Modal;
