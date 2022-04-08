import { HomeStack } from '../screens/Navigation'

export const tabs = {
  searchTab: {
    _id: 1,
    title: 'Search',
    icon: 'search',
    componant: HomeStack,
  },
  ridesTab: {
    _id: 2,
    title: 'Your Rides',
    icon: 'map',
    componant: HomeStack,
  },
  inbox: {
    _id: 3,
    title: 'Inbox',
    icon: 'inbox',
    componant: HomeStack,
  },
  profile: {
    _id: 4,
    title: 'Profile',
    icon: 'user',
    componant: HomeStack,
  },
}
