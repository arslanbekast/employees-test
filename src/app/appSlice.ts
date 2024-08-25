import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isInitialized: false as boolean,
  },
  reducers: {
    setAppInitialized(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload
    },
  },
})

export const appReducer = appSlice.reducer
export const { setAppInitialized } = appSlice.actions
