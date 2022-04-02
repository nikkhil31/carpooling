import { createSlice } from '@reduxjs/toolkit'
import allLoctions from '../constant/allLocations'

const initialState = {
  locations: [],
  history: [],
  trending: [],
}

export const locationsSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    searchLocation: (state, action) => {
      state.locations = allLoctions.filter(
        location =>
          action.payload.search.length >= 3 &&
          location.title.includes(action.payload.search)
      )
    },

    addHistroy: (state, action) => {
      state.history = state.history.push(action.payload)
    },

    removeLocation: state => {
      state.locations = []
    },
  },
})

export const { searchLocation, addHistroy, removeLocation } =
  locationsSlice.actions

export default locationsSlice.reducer
