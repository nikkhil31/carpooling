import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

export default function CurrentLocation({ onPress }) {
  return (
    <View style={styles.searchResult}>
      <TouchableOpacity onPress={onPress} style={styles.searchResultContain}>
        <Icon name='crosshair' style={styles.searchBackButton} size={32} />
        <Text style={styles.searchResultText}>Use Current location</Text>
        <Icon name='chevron-right' style={styles.searchBackButton} size={32} />
      </TouchableOpacity>
    </View>
  )
}
