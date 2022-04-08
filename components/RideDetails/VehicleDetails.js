import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './style'

const VehicleDetails = () => {
  return (
    <View style={styles.vehicleDetails}>
      <View style={styles.VehicleDetailsRow}>
        <MaterialIcons
          name='directions-car'
          style={styles.vehilcleIcon}
          size={34}
        />
        <Text style={styles.vehicleText}>Maruti Brazzer</Text>
      </View>
      <View style={styles.VehicleDetailsRow}>
        <Text style={styles.vehicleText1}>White</Text>
        <Text style={styles.vehicleText2}>GJ03LN9737</Text>
      </View>
    </View>
  )
}

export default VehicleDetails
