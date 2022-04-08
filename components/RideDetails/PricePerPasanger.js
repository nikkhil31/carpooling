import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const PricePerPasanger = () => {
  return (
    <View style={styles.routePrice}>
      <Text style={styles.routePriceText}>Price for 1 passenger</Text>
      <Text style={styles.routePriceText}>Rs. 550</Text>
    </View>
  )
}

export default PricePerPasanger
