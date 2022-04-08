import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export default function Result() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RideDetail')}
      style={styles.resultGrids}
    >
      {/* Grid */}

      <View style={styles.resultGrid}>
        {/* DP */}
        <View style={styles.userImage}></View>
        {/* Text */}
        <View style={styles.userInformation}>
          <Text style={[styles.userName, { width: '80%' }]}>Nikhil Limbad</Text>
          <AntDesign
            name='arrowright'
            style={[styles.goToResult, { width: '20%' }]}
            size={30}
          />
          <View
            style={{
              // width: '20%',
              flexDirection: 'row',
              alignItems: 'center',
              borderRightColor: '#BEAFAF',
              borderRightWidth: 1,
              paddingRight: 4,
            }}
          >
            <AntDesign
              name='star'
              style={[
                styles.goToResult,
                {
                  color: '#FFB800',
                },
              ]}
              size={13}
            />
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontWeight: 'bold',
                // borderLeftColor: '#BEAFAF',
                // borderRightWidth: 1,
              }}
            >
              4.7
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
              paddingLeft: 4,
            }}
          >
            <Text
              style={{
                color: '#373131',
                fontWeight: 'bold',
                fontSize: 12,
              }}
            >
              Rajkot
            </Text>
            <AntDesign
              name='arrowright'
              style={[styles.goToResult, { marginHorizontal: 3, fontSize: 12 }]}
              size={17}
            />
            <Text
              style={{
                color: '#373131',
                fontWeight: 'bold',
                fontSize: 12,
              }}
            >
              Jamnagar
            </Text>
          </View>
        </View>
        {/* Go */}
      </View>
      <View style={styles.shadowGen}></View>
    </TouchableOpacity>
  )
}
