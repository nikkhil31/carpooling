import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import styles from '../components/Home/styles'
import {
  IntenceSelector,
  LocationTaker,
  SearchBtn,
  TrendingList,
} from '../components'

export default function Home({ navigation }) {
  return (
    <>
      <View style={styles.firstHalf}>
        <View style={styles.firstHalfTextWrapper}>
          <Text style={styles.firstHalfText}>
            Your pick of rides at low prices
          </Text>
        </View>
      </View>
      <View style={styles.secoundHalf}>
        <TrendingList />
      </View>
      <View style={styles.middleBox}>
        <IntenceSelector />
        <LocationTaker navigation={navigation} />
        <SearchBtn />
      </View>
    </>
  )
}
