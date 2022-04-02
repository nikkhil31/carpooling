import { View, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import { removeLocation, searchLocation } from '../../slices/locationsSlice'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { removeRoute } from '../../slices/routeSlice'

export default function SearchBox() {
  const dispatch = useDispatch()
  const input = useRef()
  const navigation = useNavigation()
  const route = useRoute()
  const { type } = route.params

  const { leavingTo, goingTo } = useSelector(state => state.route)

  const [text, onChangeText] = useState()

  useFocusEffect(
    React.useCallback(() => {
      dispatch(removeLocation())
      let city = type === 0 ? leavingTo?.city : goingTo?.city
      if (city) {
        handleSearch(city)
      } else {
        input.current.clear()
      }
    }, [route])
  )

  const handleSearch = search => {
    dispatch(
      searchLocation({
        search: search,
      })
    )
    onChangeText(search)
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const handleRemoveLocation = () => {
    dispatch(removeRoute({ type }))
    dispatch(removeLocation())
    onChangeText('')
  }

  const placeholder = type === 0 ? 'Leaving From ?' : 'Going To ?'

  return (
    <View style={styles.searchBox}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name='chevron-left' style={styles.searchBackButton} size={50} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor='#BEAFAF'
        onChangeText={handleSearch}
        value={text}
        ref={input}
      />
      <TouchableOpacity onPress={handleRemoveLocation}>
        <Icon name='x' style={styles.searchBackButton} size={32} />
      </TouchableOpacity>
    </View>
  )
}
