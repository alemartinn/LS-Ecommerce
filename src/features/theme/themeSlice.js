import { createSlice } from '@reduxjs/toolkit'

export const colorSlice = createSlice({
  name: 'user',
  initialState: {
    bcgColor: 'var(--bcg-color-light)',
    fontColor: 'var(--font-color-light)'
  },
  reducers: {
    darkMode: (state) => {
      state.bcgColor = 'var(--bcg-color-dark)'
      state.fontColor = 'var(--font-color-dark)'
    },
    lightMode: (state) => {
        state.bcgColor = 'var(--bcg-color-light)'
        state.fontColor = 'var(--font-color-light)'
    }
  },
})
export const { darkMode, lightMode } = colorSlice.actions

export default colorSlice.reducer