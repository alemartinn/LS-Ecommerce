import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  modalType: ''
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
      state.modalType = action.payload
    }
  }
})
export const { openModal, closeModal, specifyModal } = modalSlice.actions
export default modalSlice.reducer