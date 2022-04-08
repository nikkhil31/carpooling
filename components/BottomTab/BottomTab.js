import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { tabs } from '../../constant/bottomTab'

const BottomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.bottomTab}>
      {state.routes.map((route, index) => {
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

        let tab = tabs[label]

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.singleTab}
            key={route.key}
          >
            <Icon
              name={tab.icon}
              style={[
                styles.trendingIcon,
                { color: isFocused ? '#5BADF9' : '#373737' },
              ]}
              size={27}
            />
            <Text style={{ color: isFocused ? '#5BADF9' : '#373737' }}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default BottomTab
