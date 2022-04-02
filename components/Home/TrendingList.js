import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'

export default function TrendingList() {
  return (
    <View style={styles.trendingWrapper}>
      <View style={styles.trendingRow}>
        <Icon name='trending-up' style={styles.trendingIcon} size={32} />
        <View style={styles.trendingRoute}>
          <Text style={styles.trendingText}>Rajkot</Text>
          <Icon
            name='arrow-right'
            style={[styles.trendingIcon, { color: '#000' }]}
            size={32}
          />
          <Text style={styles.trendingText}>Jamnagar</Text>
        </View>
        <Icon name='chevron-right' style={styles.trendingIcon} size={32} />
      </View>
      <View style={styles.trendingRow}>
        <Icon name='trending-up' style={styles.trendingIcon} size={32} />
        <View style={styles.trendingRoute}>
          <Text style={styles.trendingText}>Rajkot</Text>
          <Icon
            name='arrow-right'
            style={[styles.trendingIcon, { color: '#000' }]}
            size={32}
          />
          <Text style={styles.trendingText}>Jamnagar</Text>
        </View>
        <Icon name='chevron-right' style={styles.trendingIcon} size={32} />
      </View>

      <View style={styles.trendingRow}>
        <Icon name='trending-up' style={styles.trendingIcon} size={32} />
        <View style={styles.trendingRoute}>
          <Text style={styles.trendingText}>Rajkot</Text>
          <Icon
            name='arrow-right'
            style={[styles.trendingIcon, { color: '#000' }]}
            size={32}
          />
          <Text style={styles.trendingText}>Jamnagar</Text>
        </View>
        <Icon name='chevron-right' style={styles.trendingIcon} size={32} />
      </View>
    </View>
  )
}
