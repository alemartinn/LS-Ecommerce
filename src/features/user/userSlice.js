import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    role: null,
    photo: null,
    addresses: []
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = { ...initialState.user }
      localStorage.removeItem('token')
    },
    setCredentials: (state, action) => {
      state.user = {...action.payload.user}
      let token = action.payload.token
      token && localStorage.setItem("token", token)
    },
  },
})
export const { logOut, setCredentials } = userSlice.actions

export default userSlice.reducer