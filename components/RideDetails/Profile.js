import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './style'

export default function Profile() {
  return (
    <View style={styles.profileSpace}>
      <View style={styles.userDP} />
      <View style={styles.userInfo}>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>Nikhil Limbad</Text>
          <MaterialIcons name='verified' style={styles.verifyIcon} size={34} />
        </View>
        <View style={styles.userName}>
          <AntDesign name='star' style={styles.startIcon} size={34} />
          <Text style={styles.userRatingText}>4.7 (12)</Text>
        </View>
      </View>
    </View>
  )
}
