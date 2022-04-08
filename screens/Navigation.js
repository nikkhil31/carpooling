import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { tabs } from '../constant/bottomTab'
import { BottomTab } from '../components'
import Home from './Home'
import LocationSearch from './LocationSearch'
import SearchResults from './SearchResults'
import RideDetails from './RideDetails'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTab {...props} />}
    >
      {Object.keys(tabs).map(key => (
        <Tab.Screen
          name={key}
          key={tabs[key]['_id']}
          component={tabs[key]['componant']}
        />
      ))}
    </Tab.Navigator>
  )
}

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName='Home'
  >
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Search' component={LocationSearch} />
    <Stack.Screen name='Result' component={SearchResults} />
    <Stack.Screen name='RideDetail' component={RideDetails} />
  </Stack.Navigator>
)

export { HomeStack }
