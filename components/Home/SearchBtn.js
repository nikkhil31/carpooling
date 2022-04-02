import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SearchBtn() {
  const navigation = useNavigation()

  const handleSearch = () => {
    console.log('Go to search result!')
    navigation.navigate('searchResults')
  }

  return (
    <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
      <Text style={styles.searchText}>Search</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  searchBtn: {
    backgroundColor: '#5BADF9',
    height: 65,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
})
