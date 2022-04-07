import { StyleSheet } from 'react-native'
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
  allResults: {
    // marginBottom: 19,
    // flex: 1,
    flexGrow: 1,
    // marginBottom: 19,
  },
  resultsGroup: {
    // marginHorizontal: 29,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  },
  resultDate: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 31,
  },
  resultGrids: {
    marginTop: 16,
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
  bottomPostContainer: {
    margin: 19,
  },
  bottomPostText: {
    color: '#BEAFAF',
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
  },
  bottomPostBtn: {
    backgroundColor: '#5BADF9',
    height: 60,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
  },
  bottomPostBtnText: {
    color: '#fff',
    fontSize: 25,
  },
})

export default styles
