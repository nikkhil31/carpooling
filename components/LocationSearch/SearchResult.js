import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

export default function SearchResult({ location, onPress, icon }) {
  return (
    <View style={styles.searchResult}>
      <TouchableOpacity onPress={onPress} style={styles.searchResultContain}>
        <Icon name={icon} style={[styles.searchIcon]} size={32} />
        <View style={styles.searchResultText}>
          <Text style={styles.searchResultText1}>{`${location.title}`}</Text>
          <Text
            style={styles.searchResultText2}
          >{`${location.city},${location.state}`}</Text>
        </View>
        <Icon name='chevron-right' style={styles.searchBackButton} size={32} />
      </TouchableOpacity>
    </View>
  )
}
