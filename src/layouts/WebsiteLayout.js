import { useDispatch, useSelector } from 'react-redux'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from '../components/Modal'
import FormSignIn from '../components/FormSignIn';
import ModalCard from '../components/ModalCard';

function WebsiteLayout(props) {
  const { isOpen, modalType } = useSelector((store) => store.modal)
  const showModal = () => {
    switch (modalType) {
      case 'card': return <Modal><ModalCard></ModalCard></Modal>
        break;
      case 'signIn': return <Modal><FormSignIn></FormSignIn></Modal>
        break;
    }
  }
  return (
    <>
      <Header />
      {isOpen && showModal()}
      {props.children}
      <Footer />
    </>
  )
}
export default WebsiteLayout