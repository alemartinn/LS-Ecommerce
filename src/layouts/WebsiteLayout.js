import {  useSelector } from 'react-redux'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from '../components/Modal'
import ShowForm from '../components/ShowForm';
import DetailsCard from '../components/DetailsCard';

function WebsiteLayout(props) {

  const { isOpen, modalType } = useSelector((store) => store.modal)

  const showModal = () => {
    if (modalType === 'card'){
      return  (<Modal><DetailsCard/></Modal>)
    } else if (modalType === 'signIn'){
      return (<Modal><ShowForm/></Modal>)
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