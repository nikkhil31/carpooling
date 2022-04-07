import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import styles from '../components/SearchResult/style'
import { ResultGroup } from '../components'
import { useNavigation } from '@react-navigation/native'

export default function SearchResults() {
  const navigation = useNavigation()
  return (
    <View style={styles.resultScreen}>
      {/* Header */}
      <View style={styles.resultScreenHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='chevron-left' style={styles.resultBackButton} size={59} />
        </TouchableOpacity>
        <Text style={styles.resultText}>Matching ride giver</Text>
      </View>

      {/* Available Rides */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.allResults}
      >
        {/* Grid Group Date vise */}
        <ResultGroup />
        {/* <ResultGroup /> */}
        {/* <ResultGroup /> */}
        <View style={styles.bottomPostContainer}>
          <Text style={styles.bottomPostText}>
            Can't find any related rider! You can post your request.
          </Text>
          <TouchableOpacity style={styles.bottomPostBtn}>
            <Text style={styles.bottomPostBtnText}>Post your ride request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
