import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

export default function IntenceSelector() {
  const [intance, setIntance] = useState(0)

  const handleIntence = () => {
    setIntance(!intance)
  }

  return (
    <View style={styles.userIntence}>
      <View style={styles.userIntenceFields}>
        <TouchableOpacity
          onPress={handleIntence}
          style={[styles.intenceTextPress, !intance && styles.activeIntence]}
        >
          <Text style={[styles.intenceText, !intance && styles.activeText]}>
            Ride Take
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userIntenceFields}>
        <TouchableOpacity
          onPress={handleIntence}
          style={[styles.intenceTextPress, intance && styles.activeIntence]}
        >
          <Text style={[styles.intenceText, intance && styles.activeText]}>
            Ride Give
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
