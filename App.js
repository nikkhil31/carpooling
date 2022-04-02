import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './screens/Navigation'
import { Provider } from 'react-redux'
import { store } from './app/store'

const App = () => {
  // return <Home />
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
