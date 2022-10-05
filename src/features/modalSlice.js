import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
      modalChildren: {}
    },
    reducers: {
      clearModal: (state) => {
        state.modal = {}
      },
      loadModal: (state, action) => {
        let modalChildren = action.payload.modal
        modalChildren? state.modal = modalChildren : state.modal = {}
      },
    },
  })
  export const { clearModal, loadModal } = modalSlice.actions
  
  export default modalSlice.reducer