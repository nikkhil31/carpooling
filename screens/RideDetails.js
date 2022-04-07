import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function RideDetails() {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack(null)}
        style={styles.backBtn}
      >
        <AntDesign name='arrowleft' style={styles.backBtnIcon} size={48} />
      </TouchableOpacity>
      <Text style={styles.whenText}>Today</Text>
      <View style={styles.routeContainer}>
        <View style={styles.routeTimeBlock}>
          <Text style={styles.routeTime}>12:00</Text>
          <Text style={styles.routeTime}>05:30</Text>
        </View>
        <View style={styles.routeMarkLine}>
          <View style={[styles.routeSmallCube, { top: -1 }]} />
          <View style={[styles.routeSmallCube, { bottom: -1 }]} />
        </View>
        <View style={styles.routeAddressBlock}>
          <Text style={styles.routeAddress}>
            C.B.D. Fire Brigade Station, Sector 1A, CBD Belapur, Navi Mumbai,
            Maharashtra
          </Text>
          <Text style={[styles.routeAddress, { top: 18 }]}>
            C.B.D. Fire Brigade Station, Sector 1A, CBD Belapur, Navi Mumbai,
            Maharashtra
          </Text>
        </View>
      </View>

      <View style={styles.routePrice}>
        <Text style={styles.routePriceText}>Price for 1 passenger</Text>
        <Text style={styles.routePriceText}>Rs. 550</Text>
      </View>
      <Text style={styles.whenText}>Profile</Text>
      <View style={styles.profileSpace}>
        <View style={styles.userDP} />
        <View style={styles.userInfo}>
          <View style={styles.userName}>
            <Text style={styles.userNameText}>Nikhil Limbad</Text>
            <MaterialIcons
              name='verified'
              style={styles.verifyIcon}
              size={34}
            />
          </View>
          <View style={styles.userName}>
            <AntDesign name='star' style={styles.startIcon} size={34} />
            <Text style={styles.userRatingText}>4.7 (12)</Text>
          </View>
        </View>
      </View>

      <View style={styles.routePrice}>
        <Text style={styles.routeInfoText}>
          Nikhil is Traveling from Jamnagr to Ahemdavad
        </Text>
      </View>

      <Text style={styles.whenText}>Vehicle Details</Text>
      <View style={styles.vehicleDetails}>
        <View style={styles.VehicleDetailsRow}>
          <MaterialIcons
            name='directions-car'
            style={styles.vehilcleIcon}
            size={34}
          />
          <Text style={styles.vehicleText}>Maruti Brazzer</Text>
        </View>
        <View style={styles.VehicleDetailsRow}>
          <Text style={styles.vehicleText1}>White</Text>
          <Text style={styles.vehicleText2}>GJ03LN9737</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.bottomRequestBtn}>
        <Text style={styles.bottomRequestBtnText}>Post your ride request</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    paddingTop: 10,
  },
  backBtn: {},
  backBtnIcon: {
    color: '#000',
  },
  whenText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 27,
  },
  routeContainer: {
    marginVertical: 41,
    height: 100,
    flexDirection: 'row',
  },
  routeTimeBlock: {
    height: '100%',
    justifyContent: 'space-between',
  },
  routeTime: { color: '#000', fontSize: 16 },
  routeMarkLine: {
    backgroundColor: '#ABD7FF',
    width: 10,
    height: '100%',
    marginLeft: 10,
    position: 'relative',
    alignItems: 'center',
  },
  routeSmallCube: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: '#5BADF9',
    borderRadius: 5,
  },
  routeAddressBlock: {
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  routeAddress: {
    color: '#000',
    width: 293,
  },
  routePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#C4C4C4',
    borderTopWidth: 3,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 3,
    padding: 10,
  },
  routePriceText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  profileSpace: {
    flexDirection: 'row',
    marginVertical: 27,
  },
  userDP: {
    width: 103,
    height: 81,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: { flexDirection: 'row', alignItems: 'center' },
  userNameText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 26,
  },
  verifyIcon: {
    color: '#3499F8',
    marginLeft: 10,
  },
  startIcon: {
    color: '#FFB800',
  },
  userRatingText: {
    color: '#000',
    fontSize: 21,
    fontWeight: '800',
    marginLeft: 5,
  },
  routeInfoText: {
    color: '#BEAFAF',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  vehicleDetails: {
    marginTop: 27,
  },
  VehicleDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehilcleIcon: {
    color: '#3499F8',
  },
  vehicleText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 26,
  },
  vehicleText1: {
    color: '#000',
    fontSize: 18,
    borderRightColor: '#BEAFAF',
    borderRightWidth: 2,
    paddingRight: 10,
  },
  vehicleText2: {
    paddingLeft: 10,
    color: '#000',
    fontSize: 18,
  },
  bottomRequestBtn: {
    backgroundColor: '#5BADF9',
    height: 60,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 79,
    marginBottom: 25,
  },
  bottomRequestBtnText: {
    color: '#fff',
    fontSize: 25,
  },
})
