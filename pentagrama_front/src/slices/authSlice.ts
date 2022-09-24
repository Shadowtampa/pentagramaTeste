import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  auth: boolean
}

const initialState: AuthState = {
  auth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.auth = !state.auth;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleLoggedIn} = authSlice.actions

export default authSlice.reducer