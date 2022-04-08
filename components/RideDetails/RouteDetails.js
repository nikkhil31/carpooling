import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function RouteDetails() {
  return (
    <View style={styles.routeContainer}>
      <View style={styles.routeTimeBlock}>
        <Text style={styles.routeTime}>12:00</Text>
        <Text style={styles.routeTime}>05:30</Text>
      </View>
      <View style={styles.routeMarkLine}>
        <View style={[styles.routeSmallCube, { top: -1 }]} />
        <View style={[styles.routeSmallCube, { bottom: -1 }]} />
      </View>
      <View style={styles.routeAddressBlock}>
        <Text style={styles.routeAddress}>
          C.B.D. Fire Brigade Station, Sector 1A, CBD Belapur, Navi Mumbai,
          Maharashtra
        </Text>
        <Text style={[styles.routeAddress, { top: 18 }]}>
          C.B.D. Fire Brigade Station, Sector 1A, CBD Belapur, Navi Mumbai,
          Maharashtra
        </Text>
      </View>
    </View>
  )
}
