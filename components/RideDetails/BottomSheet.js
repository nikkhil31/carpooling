import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './style'

export default function BottomSheet() {
  return (
    <View style={styles.bottomRequestSheet}>
      <View style={styles.bottomRequestHeader}>
        <Text style={styles.bottomRequestHeaderText}>Ride Taking Request</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.currentRequest}>
          <Text style={styles.currentRequestText}>
            You don't have any request, would you like to create a request?
          </Text>
          <TouchableOpacity>
            <Text style={styles.currentCreateRequest}>Create Request</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.requestsContainer}>
          <Text style={styles.requestTitleText}>Past Requests</Text>
          <View style={styles.requestBlocks}>
            <View style={styles.requestBlockContainer}>
              <View style={styles.requestBlock}>
                <View style={styles.requestBlockRow}>
                  <View style={styles.requestBlockRowText}>
                    <Text
                      style={{
                        color: '#373131',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}
                    >
                      Jamnagar
                    </Text>
                    <AntDesign
                      name='arrowright'
                      style={styles.requestBlockIcon}
                      size={20}
                    />
                    <Text
                      style={{
                        color: '#373131',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}
                    >
                      Rajkot
                    </Text>
                  </View>
                  <AntDesign
                    name='arrowright'
                    style={styles.iconGo}
                    size={30}
                  />
                </View>
                <View style={styles.requestBlockRow}>
                  <View style={styles.requestBlockRowInfo}>
                    <AntDesign
                      name='calendar'
                      style={styles.requestBlockIcon1}
                      size={20}
                    />
                    <Text style={styles.requestBlockText1}>12 Aug</Text>
                  </View>
                  <View style={styles.requestBlockRowInfo}>
                    <AntDesign
                      name='user'
                      style={styles.requestBlockIcon1}
                      size={20}
                    />
                    <Text style={styles.requestBlockText1}>1 Passanger</Text>
                  </View>
                  <View style={styles.requestBlockRowInfo}>
                    <FontAwesome
                      name='road'
                      style={styles.requestBlockIcon1}
                      size={20}
                    />
                    <Text style={styles.requestBlockText1}>100 km</Text>
                  </View>
                </View>
              </View>
              <View style={styles.requestBlockShadow} />
            </View>
            <View style={styles.requestBlockContainer}>
              <View style={styles.requestBlock}>
                <View style={styles.requestBlockRow}>
                  <View style={styles.requestBlockRowText}>
                    <Text
                      style={{
                        color: '#373131',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}
                    >
                      Jamnagar
                    </Text>
                    <AntDesign
                      name='arrowright'
                      style={styles.requestBlockIcon}
                      size={20}
                    />
                    <Text
                      style={{
                        color: '#373131',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}
                    >
                      Rajkot
                    </Text>
                  </View>
                  <AntDesign
                    name='arrowright'
                    style={styles.iconGo}
                    size={30}
                  />
                </View>
                <View style={styles.requestBlockRow}>
                  <View style={styles.requestBlockRowInfo}>
                    <AntDesign
                      name='calendar'
                      style={styles.requestBlockIcon1}
                      size={20}
                    />
                    <Text style={styles.requestBlockText1}>12 Aug</Text>
                  </View>
                  <View style={styles.requestBlockRowInfo}>
                    <AntDesign
                      name='user'
                      style={styles.requestBlockIcon1}
                      size={20}
                    />
                    <Text style={styles.requestBlockText1}>1 Passanger</Text>
                  </View>
                  <View style={styles.requestBlockRowInfo}>
                    <FontAwesome
                      name='road'
                      style={styles.requestBlockIcon1}
                      size={20}
                    />
                    <Text style={styles.requestBlockText1}>100 km</Text>
                  </View>
                </View>
              </View>
              <View style={styles.requestBlockShadow} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
