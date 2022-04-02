import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  firstHalf: {
    height: '50%',
    backgroundColor: '#ABD7FF',
    // position: 'relative',
  },
  secoundHalf: {
    height: '50%',
    backgroundColor: '#fff',
    position: 'relative',
    // paddingBottom: 200,
  },
  middleBox: {
    height: 300,
    width: 350,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 35,
    alignSelf: 'center',
    top: '28%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
    overflow: 'hidden',
  },
  userIntence: {
    flexDirection: 'row',
    // borderColor: '#5BADF9',
    // borderWidth: 2,
  },
  userIntenceFields: {
    width: '50%',
    height: 65,
    backgroundColor: '#ddd',
  },
  intenceTextPress: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#5BADF9',
  },
  intenceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#373131',
  },
  activeIntence: {
    backgroundColor: '#5BADF9',
  },
  activeText: {
    color: '#fff',
  },
  locationInput: {
    flex: 1,
    fontSize: 17,
    color: '#BEAFAF',
    marginLeft: 10,
  },
  locationInputActive: {
    flex: 1,
    fontSize: 17,
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  inputWrapper: {
    marginHorizontal: 26,
    borderBottomColor: '#BEAFAF',
    borderBottomWidth: 2,
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  touchLocation: {
    flexDirection: 'row',
  },
  locationCircle: {
    color: '#BEAFAF',
  },
  locationCircleActive: {
    color: '#000',
  },
  locationTaker: {
    flex: 1,
    justifyContent: 'center',
  },
  firstHalfTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  firstHalfText: {
    width: '70%',
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  trendingWrapper: {
    // top: '35%',
    height: 100,
    marginTop: '40%',
    // marginBottom: 60,
  },
  trendingRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomColor: '#373131',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  trendingIcon: {
    color: '#BEAFAF',
  },
  trendingRoute: {
    flexDirection: 'row',
    paddingLeft: 10,
    flex: 1,
    // backgroundColor: '#ddd',
  },
  trendingText: {
    color: '#000',
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
})

export default styles
