import {  useSelector } from 'react-redux'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from '../components/Modal'
import ShowForm from '../components/ShowForm';
import DetailsCard from '../components/DetailsCard';
import Alert from '../components/Alert';
import ProfileMenu from '../components/ProfileMenu';
import EditProfile from '../components/dashboard/EditProfile';

function WebsiteLayout(props) {

  const { isOpen, modalType, modalProps } = useSelector((store) => store.modal)
  const {
    alertIsOpen } = useSelector((store) => store.alert)
  const showModal = (nameModal) => {
    let InnerModal
    switch (nameModal) {
      case 'card':
        InnerModal = DetailsCard
        break;
      case 'signIn':
        InnerModal = ShowForm
        break;
      case 'profile':
        InnerModal = ProfileMenu
        break;
      case 'edit-profile':
        InnerModal = EditProfile
        break;
      default:
        InnerModal = () => (<h1>no content</h1>)
        break;
    }
    return (<Modal><InnerModal {...modalProps} /></Modal>)
  }
  return (
    <>
      <Header />
      {isOpen && showModal(modalType)}
      {alertIsOpen? <Alert />:null}
      {props.children}
      <Footer />
    </>
  )
}
export default WebsiteLayout