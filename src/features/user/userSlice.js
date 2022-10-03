import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {}
  },
  reducers: {
    logOut: (state) => {
      state.user = {}
    },
    setCredentials: (state, action) => {
      let userData = action.payload.user
      let token = action.payload.token
      userData? state.user = userData : state.user = {}
      token && localStorage.setItem("token",token)
    },
  },
})
export const { logOut, setCredentials } = userSlice.actions

export default userSlice.reducer