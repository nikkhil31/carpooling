import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  locationSearchContainer: {
    marginHorizontal: 14,
  },
  searchBox: {
    height: 76,
    flexDirection: 'row',
    backgroundColor: '#E8E2E4',
    alignItems: 'center',
    marginVertical: 22,
    overflow: 'hidden',
    borderRadius: 24,
    paddingRight: 14,
  },
  searchBackButton: {
    color: '#BEAFAF',
    // fontSize: 24,
  },
  searchInput: {
    color: '#000',
    fontSize: 24,
    flex: 1,
  },
  searchResultContainer: {},
  searchResult: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    // height: 28,
    paddingVertical: 14,
  },
  searchResultContain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchResultText: {
    flex: 1,
    color: '#000',
    fontSize: 24,
    marginLeft: 18,
  },
  searchResultText1: {
    fontSize: 18,
    color: '#000',
  },
  searchResultText2: {
    fontSize: 15,
    color: '#BEAFAF',
  },
  searchIcon: {
    color: '#000',
  },
})

export default styles
