import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leavingTo: {},
  goingTo: {},
}

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    addRoute: (state, action) => {
      state.leavingTo =
        action.payload.type === 0 ? action.payload.location : state.leavingTo
      state.goingTo =
        action.payload.type === 1 ? action.payload.location : state.goingTo
    },
    removeRoute: (state, action) => {
      state.leavingTo = action.payload.type === 0 ? {} : state.leavingTo
      state.goingTo = action.payload.type === 1 ? {} : state.goingTo
    },
  },
})

export const { addRoute, removeRoute } = routeSlice.actions

export default routeSlice.reducer
