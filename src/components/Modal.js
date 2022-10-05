import "../styles/Modal.css";

const Modal = ({ isOpen, closeModal, text, result }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>x</button>
        {result ?
          <img className="modal-image" src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="ok-icon" />
          :
          <img className="modal-image" src="https://cdn-icons-png.flaticon.com/512/6711/6711656.png" alt="ok-icon" />
        }
        <p>{text}</p>
      </div>
    </article>
  )
}
export default Modal;
