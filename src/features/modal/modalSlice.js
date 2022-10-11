import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  modalType: '',
  modalProps:{}
}
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
      state.modalType = ''
    },
    specifyModal: (state, action) => {
      state.modalType = action.payload.name
      let props = action.payload.props
      props? state.modalProps=props : state.modalProps={}
    }
  }
})
export const { openModal, closeModal, specifyModal } = modalSlice.actions
export default modalSlice.reducer