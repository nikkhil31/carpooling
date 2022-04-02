import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import StarIcon from 'react-native-vector-icons/AntDesign'

export default function SearchResults() {
  return (
    <View style={styles.resultScreen}>
      {/* Header */}
      <View style={styles.resultScreenHeader}>
        <TouchableOpacity>
          <Icon name='chevron-left' style={styles.resultBackButton} size={59} />
        </TouchableOpacity>
        <Text style={styles.resultText}>Matching ride giver</Text>
      </View>

      {/* Available Rides */}
      <View style={styles.allResults}>
        {/* Grid Group Date vise */}
        <View style={styles.resultsGroup}>
          <Text style={styles.resultDate}>Today</Text>
          {/* Grid List */}

          <View style={styles.resultGrids}>
            <View>
              {/* Grid */}
              <View style={styles.shadowGen}></View>
              <View style={styles.resultGrid}>
                {/* DP */}
                <View style={styles.userImage}></View>
                {/* Text */}
                <View style={styles.userInformation}>
                  <Text style={[styles.userName, { width: '80%' }]}>
                    Nikhil Limbad
                  </Text>
                  <StarIcon
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
                    <StarIcon
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
                    <StarIcon
                      name='arrowright'
                      style={[
                        styles.goToResult,
                        { marginHorizontal: 3, fontSize: 12 },
                      ]}
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
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  resultScreen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  resultScreenHeader: {
    flexDirection: 'row',
    height: 72,
    alignItems: 'center',
    backgroundColor: '#ABD7FF',
  },
  resultBackButton: {
    color: '#373737',
  },
  resultText: {
    fontSize: 24,
    color: '#373737',
    fontWeight: 'bold',
  },
  allResults: {},
  resultsGroup: {
    // marginHorizontal: 29,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  resultDate: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 31,
  },
  resultGrids: {
    marginVertical: 20,
  },
  resultGrid: {
    flexDirection: 'row',
    height: 82,
    width: 370,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 999,
  },
  shadowGen: {
    position: 'absolute',
    top: 3,
    left: 1,
    height: 82,
    width: 370,
    backgroundColor: '#ddd',
    borderRadius: 6,
  },
  userImage: {
    width: 80,
    height: 63,
    backgroundColor: '#C4C4C4',
    borderRadius: 8,
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 9,
  },
  goToResult: { color: '#000' },
  userName: { color: '#000', fontSize: 25 },
})
