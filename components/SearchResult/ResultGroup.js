import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import Result from './Result'

export default function ResultGroup() {
  return (
    <View style={styles.resultsGroup}>
      <Text style={styles.resultDate}>Today</Text>
      {/* Grid List */}

      <Result />
      <Result />
      <Result />
    </View>
  )
}
