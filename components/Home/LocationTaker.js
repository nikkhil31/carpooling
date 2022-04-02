import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import styles from './styles'
import { useSelector } from 'react-redux'

export default function LocationTaker({ navigation }) {
  const { leavingTo, goingTo } = useSelector(state => state.route)

  const handleLocation = type => {
    navigation.navigate('locationSearch', { type })
  }

  const active1 = JSON.stringify(leavingTo) !== '{}' && leavingTo?.city !== ''
  const active2 = JSON.stringify(goingTo) !== '{}' && goingTo?.city !== ''
  return (
    <View style={styles.locationTaker}>
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          onPress={() => handleLocation(0)}
          style={styles.touchLocation}
        >
          <Icon
            name='square'
            style={
              active1 ? styles.locationCircleActive : styles.locationCircle
            }
            size={32}
          />
          <Text
            style={active1 ? styles.locationInputActive : styles.locationInput}
          >
            {active1 ? `${leavingTo.city},${leavingTo.state}` : `Leaving From`}
          </Text>
          {/* <Icon
              name='x'
              style={
                active1 ? styles.locationCircleActive : styles.locationCircle
              }
              size={32}
            /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          onPress={() => handleLocation(1)}
          style={styles.touchLocation}
        >
          <Icon
            name='square'
            style={
              active2 ? styles.locationCircleActive : styles.locationCircle
            }
            size={32}
          />
          <Text
            style={active2 ? styles.locationInputActive : styles.locationInput}
          >
            {active2 ? `${goingTo.city},${goingTo.state}` : `Going To`}
          </Text>
          {/* <Icon
            name='x'
            style={
              active2 ? styles.locationCircleActive : styles.locationCircle
            }
            size={32}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  )
}
