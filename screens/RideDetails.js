import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import React, { useRef } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import RBSheet from 'react-native-raw-bottom-sheet'
import {
  BottomSheet,
  PricePerPasanger,
  Profile,
  RouteDetails,
  VehicleDetails,
} from '../components'
import styles from '../components/RideDetails/style'

export default function RideDetails() {
  const refRBSheet = useRef()
  const navigation = useNavigation()
  return (
    <>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={styles.backBtn}
        >
          <AntDesign name='arrowleft' style={styles.backBtnIcon} size={48} />
        </TouchableOpacity>
        <Text style={styles.whenText}>Today</Text>
        <RouteDetails />

        <PricePerPasanger />

        <Text style={styles.whenText}>Profile</Text>
        <Profile />

        <View style={styles.routePrice}>
          <Text style={styles.routeInfoText}>
            Nikhil is Traveling from Jamnagr to Ahemdavad
          </Text>
        </View>

        <Text style={styles.whenText}>Vehicle Details</Text>
        <VehicleDetails />
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={styles.bottomRequestBtn}
        >
          <Text style={styles.bottomRequestBtnText}>Request for Ride</Text>
        </TouchableOpacity>
      </ScrollView>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            // backgroundColor: 'transparent',
          },
          container: {
            // borderStartRadius: 46,
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            height: 500,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
      >
        <BottomSheet />
      </RBSheet>
    </>
  )
}
