import { createSlice } from '@reduxjs/toolkit'

export const colorSlice = createSlice({
  name: 'user',
  initialState: {
    light: true,
    bcgColor: 'var(--bcg-color-light)',
    fontColor: 'var(--font-color-light)',
    mainColor: 'var(--main-color)',
    secondColor: 'var(--second-color)',
    thirdColor: 'var(--third-color)',
    fourthColor: 'var(--fourth-color)',
    fivethColor: 'var(--fiveth-color)',
  },
  reducers: {
    darkMode: (state) => {
      state.light = false
      state.bcgColor = 'var(--bcg-color-dark)'
      state.fontColor = 'var(--font-color-dark)'
      state.mainColor = 'var(--main-color-dark)'
      state.secondColor = 'var(--second-color-dark)'
      state.thirdColor = 'var(--third-color-dark)'
      state.fourthColor = 'var(--fourth-color-dark)'
      state.fivethColor = 'var(--fiveth-color-dark)'
    },
    lightMode: (state) => {
      state.light = true
      state.bcgColor = 'var(--bcg-color-light)'
      state.fontColor = 'var(--font-color-light)'
      state.mainColor = 'var(--main-color)'
      state.secondColor = 'var(--second-color)'
      state.thirdColor = 'var(--third-color)'
      state.fourthColor = 'var(--fourth-color)'
      state.fivethColor = 'var(--fiveth-color)'
    }
  },
})
export const { darkMode, lightMode } = colorSlice.actions

export default colorSlice.reducer