import { StyleSheet } from 'react-native'
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
  bottomRequestSheet: {
    flex: 1,
  },
  bottomRequestHeader: {
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 3,
  },
  bottomRequestHeaderText: {
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 16,
    paddingBottom: 10,
  },
  currentRequest: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentRequestText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    width: 274,
    // fontWeight: '400',
    // height: 38,
  },
  currentCreateRequest: {
    fontSize: 18,
    color: '#5BADF9',
    fontWeight: 'bold',
  },
  requestsContainer: {
    paddingHorizontal: 25,
  },
  requestTitleText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  requestBlocks: {
    marginTop: 31,
  },
  requestBlock: {
    borderColor: '#ddd',
    borderWidth: 1,
    height: 82,
    width: 370,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 7,
    justifyContent: 'space-around',
    position: 'relative',
    zIndex: 99,
    backgroundColor: '#fff',
  },
  requestBlockRow: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  requestBlockRowText: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGo: {
    color: '#000',
    width: '20%',
    textAlign: 'center',
  },
  requestBlockIcon: {
    color: '#000',
    marginHorizontal: 7,
  },
  requestBlockIcon1: {
    color: '#000',
    marginRight: 7,
  },
  requestBlockText1: {
    color: '#000',
  },
  requestBlockRowInfo: {
    flexDirection: 'row',
    marginRight: 15,
  },
  requestBlockShadow: {
    position: 'absolute',
    top: 3,
    left: 1,
    height: 82,
    width: 370,
    backgroundColor: '#ddd',
    borderRadius: 6,
  },
  requestBlockContainer: {
    marginBottom: 13,
  },
})

export default styles
