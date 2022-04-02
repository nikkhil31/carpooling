import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { tabs } from '../constant/bottomTab'
import { BottomTab } from '../components'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <BottomTab>
      {Object.keys(tabs).map(key => (
        <Tab.Screen
          name={key}
          key={tabs[key]['_id']}
          component={tabs[key]['componant']}
        />
      ))}
    </BottomTab>
  )
}

// const styles = StyleSheet.create({})
