import { createSlice } from '@reduxjs/toolkit'

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        alertIsOpen: false,
        message: '...',
        success: true
    },
    reducers: {
        openAlert: (state, action) => {
            state.success = action.payload
            state.alertIsOpen = true
        },
        closeAlert: (state) => {
            state.alertIsOpen = false
            state.message = '...'
        },
        specifyMessage: (state, action) => {
            state.message = action.payload
        }
    }
})
export const { openAlert, closeAlert, specifyMessage } = alertSlice.actions
export default alertSlice.reducer