import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import devToolsEnhancer from 'remote-redux-devtools'
import locationsSlice from '../slices/locationsSlice'
import routeSlice from '../slices/routeSlice'

const reducer = {
  route: routeSlice,
  location: locationsSlice,
}

export const store = configureStore({
  reducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: true,
})
