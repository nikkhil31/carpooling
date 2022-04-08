import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { tabs } from '../../constant/bottomTab'

const Tab = createBottomTabNavigator()

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null
  }
  return (
    <View style={styles.bottomTab}>
      {state.routes
        .filter(route => tabs[route.name]['isInBottom'])
        .map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true })
            }
            // console.log('first')
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          const data = tabs[label]
          return (
            <TouchableOpacity
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.singleTab}
              key={data['_id']}
            >
              <Icon
                name={data['icon']}
                style={[
                  styles.trendingIcon,
                  { color: isFocused ? '#5BADF9' : '#373737' },
                ]}
                size={27}
              />
              <Text style={{ color: isFocused ? '#5BADF9' : '#373737' }}>
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
    </View>
  )
}

export default function BottomTab({ children }) {
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  // }, [navigation, route]);

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {children}
    </Tab.Navigator>
  )
}
