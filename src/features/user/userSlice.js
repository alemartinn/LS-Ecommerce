import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    role: null,
    photo: null,
    addresses: []
  },
  token: localStorage.getItem('token')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state = { ...initialState }
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