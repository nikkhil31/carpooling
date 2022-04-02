import { View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CurrentLocation, SearchBox, SearchResult } from '../components'
import styles from '../components/LocationSearch/styles'
import { useSelector, useDispatch } from 'react-redux'
import { removeLocation } from '../slices/locationsSlice'
import Icon from 'react-native-vector-icons/Feather'
import { useFocusEffect } from '@react-navigation/native'
import { addRoute } from '../slices/routeSlice'

export default function LocationSearch({ route, navigation }) {
  const dispatch = useDispatch()
  const { locations, history } = useSelector(state => state.location)

  const { type } = route.params

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    })
  }, [])

  const chooseLocation = location => {
    dispatch(addRoute({ type, location }))
    navigation.goBack()
  }

  return (
    <View style={styles.locationSearchContainer}>
      {/* Search Box */}
      <SearchBox type={type} />

      {/* Search Results */}

      <View style={styles.searchResultContainer}>
        {/* Current Location */}
        <CurrentLocation onPress={() => alert('Nice try..')} />

        {/* Search Result */}

        {locations.length > 0 &&
          locations.map(location => (
            <SearchResult
              key={location._id}
              onPress={() => chooseLocation(location)}
              location={location}
              icon='map-pin'
            />
          ))}

        {/* {history.length > 0 &&
          locations.length === 0 &&
          locations.map(location => (
            <SearchResult
              onPress={handleGoBack}
              location={`${location.city},${location.state}`}
              sublocation={`${location.title}`}
              icon='rotate-cw'
            />
          ))} */}
      </View>
    </View>
  )
}
