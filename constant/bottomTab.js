import { Home, LocationSearch, SearchResults } from '../screens'

export const tabs = {
  search: {
    _id: 1,
    title: 'Search',
    icon: 'search',
    isInBottom: true,
    componant: Home,
  },
  rides: {
    _id: 2,
    title: 'Your Rides',
    icon: 'map',
    isInBottom: true,
    componant: Home,
  },
  inbox: {
    _id: 3,
    title: 'Inbox',
    icon: 'inbox',
    isInBottom: true,
    componant: Home,
  },
  profile: {
    _id: 4,
    title: 'Profile',
    icon: 'user',
    isInBottom: true,
    componant: Home,
  },
  locationSearch: {
    _id: 5,
    title: 'Location Search',
    isInBottom: false,
    componant: LocationSearch,
  },
  searchResults: {
    _id: 6,
    title: 'Search Results',
    isInBottom: false,
    componant: SearchResults,
  },
}
